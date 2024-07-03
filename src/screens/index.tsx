import {
  Container,
  Tasks,
  InfoContainer,
  TasksCreated,
  TasksDone,
  ContainerTask,
  CounterTask,
  TextCounterTask,
} from "./styles";
import { Header } from "../components/Header";
import { Task } from "../components/Task";
import { useRef, useState } from "react";
import { TaskTDO } from "../dtos/TaskDTO";
import { FlatList, TextInput } from "react-native";
import { Empty } from "../components/Empty";
import { uuid } from "../utils/uuid";
import { Alert } from "react-native";

export function HomeScreen() {
  const [tasks, setTasks] = useState<TaskTDO[]>([]);
  const [newTask, setNewTasks] = useState("");
  const newTaskInputRef = useRef<TextInput>(null);

  function handleTaskAdd() {
    if (newTask !== "" && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isCompleted: false, title: newTask.trim() },
      ]);
    }
    setNewTasks("");
    newTaskInputRef.current?.blur();
  }

  function handleTaskDone(id: string) {
    setTasks((tasks) =>
      tasks.map((task) => {
        task.id === id ? (task.isCompleted = !task.isCompleted) : null;
        return task;
      })
    );
  }

  function handleTaskDeleted(id: string) {
    Alert.alert("Excluir tarefa", "Deseja excluir essa tarefa?", [
      {
        text: "Sim",
        style: "default",
        onPress: () =>
          setTasks((tasks) => tasks.filter((task) => task.id !== id)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const totalTasksCreated = tasks.length;
  const totalTasksCompleted = tasks.filter(
    ({ isCompleted }) => isCompleted
  ).length;

  return (
    <>
      <Container>
        <Header
          inputRef={newTaskInputRef}
          task={newTask}
          onChangeText={setNewTasks}
          onPress={handleTaskAdd}
        />
        <Tasks>
          <InfoContainer>
            <ContainerTask>
              <TasksCreated>Criadas</TasksCreated>
              <CounterTask>
                <TextCounterTask>{totalTasksCreated}</TextCounterTask>
              </CounterTask>
            </ContainerTask>
            <ContainerTask>
              <TasksDone>Concluídas</TasksDone>
              <CounterTask>
                <TextCounterTask>{totalTasksCompleted}</TextCounterTask>
              </CounterTask>
            </ContainerTask>
          </InfoContainer>

          <FlatList
            data={tasks}
            keyExtractor={(tasks) => tasks.id}
            renderItem={({ item }) => (
              <Task
                key={item.id}
                onTaskDone={() => handleTaskDone(item.id)}
                onTaskDeleted={() => handleTaskDeleted(item.id)}
                {...item}
              />
            )}
            ListEmptyComponent={<Empty />}
          />
        </Tasks>
      </Container>
    </>
  );
}

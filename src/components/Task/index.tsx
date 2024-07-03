import {
  TaskContainer,
  ButtonContainer,
  ContainerButtonCheck,
  ContainerTextTask,
  TextCreated,
  TextDone,
} from "./styles";
import { theme } from "../../theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TaskTDO } from "../../dtos/TaskDTO";

type TasksProps = TaskTDO & {
  onTaskDone: (id: string) => void;
  onTaskDeleted: (id: string) => void;
};

export function Task({
  id,
  title,
  isCompleted,
  onTaskDone,
  onTaskDeleted,
}: TasksProps) {
  return (
    <>
      <TaskContainer>
        <ButtonContainer onPress={() => onTaskDone(id)}>
          <MaterialCommunityIcons
            name={
              isCompleted
                ? "checkbox-marked-circle-outline"
                : "checkbox-blank-circle-outline"
            }
            size={22}
            color={
              isCompleted ? theme.colors.brand.purple : theme.colors.brand.blue
            }
          />
        </ButtonContainer>
        <ContainerTextTask>
          {isCompleted ? (
            <TextDone>{title}</TextDone>
          ) : (
            <TextCreated>{title}</TextCreated>
          )}
        </ContainerTextTask>
        <ContainerButtonCheck>
          <ButtonContainer onPress={() => onTaskDeleted(id)}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={20}
              color={theme.colors.base.gray300}
            />
          </ButtonContainer>
        </ContainerButtonCheck>
      </TaskContainer>
    </>
  );
}

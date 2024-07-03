import { Image, TextInput } from "react-native";
import { theme } from "../../theme";
import {
  HeaderContainer,
  FormContainer,
  InputTodo,
  ButtonInput,
} from "./styles";
import logo from "../../assets/Logo.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

type HeaderProps = {
  task: string;
  inputRef: React.RefObject<TextInput>;
  onChangeText: (task: string) => void;
  onPress: () => void;
};

export function Header({ task, inputRef, onChangeText, onPress }: HeaderProps) {
  const [focused, setFocused] = useState(false);
  return (
    <>
      <HeaderContainer>
        <Image source={logo} />
        <FormContainer>
          <InputTodo
            isFocused={focused}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={theme.colors.base.gray300}
            value={task}
            onChangeText={onChangeText}
            ref={inputRef}
            autoCorrect={false}
            onSubmitEditing={onPress}
            returnKeyType="done"
            onBlur={() => setFocused(false)}
            onFocus={() => setFocused(true)}
          />
          <ButtonInput onPress={onPress}>
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={22}
              color={theme.colors.base.gray100}
            />
          </ButtonInput>
        </FormContainer>
      </HeaderContainer>
    </>
  );
}

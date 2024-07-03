import { InputAccessoryViewProps, TextInputProps } from "react-native";
import { theme } from "../../theme";
import styled from "styled-components/native";

interface Props {
  isFocused: boolean;
}

export const HeaderContainer = styled.View`
  background-color: ${theme.colors.base.gray700};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 173px;
  position: relative;
`;

export const FormContainer = styled.View`
  height: 54px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -27px;
`;

export const InputTodo = styled.TextInput<Props>`
  height: 54px;
  width: 75%;
  background-color: ${theme.colors.base.gray500};
  border-radius: 5px;
  padding: 16px;
  font-size: ${theme.font_size.md};
  color: ${theme.colors.base.gray100};
  border-color: ${({ isFocused }) =>
    isFocused ? theme.colors.brand.purple : theme.colors.base.gray700};
  border-width: 1px;
`;

export const ButtonInput = styled.TouchableOpacity`
  height: 54px;
  width: 54px;
  border-radius: 5px;
  background-color: ${theme.colors.brand.blue_dark};
  align-items: center;
  justify-content: center;
`;

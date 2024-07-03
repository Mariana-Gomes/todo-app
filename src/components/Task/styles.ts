import { theme } from "../../theme";
import styled from "styled-components/native";

export const TaskContainer = styled.View`
  width: 100%;
  height: 64px;
  background-color: ${theme.colors.base.gray500};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0px;
  padding: 20px 10px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${theme.colors.base.gray400};
`;

export const ButtonContainer = styled.TouchableOpacity``;

export const ContainerTextTask = styled.View`
  width: 80%;
  height: 40px;
  align-content: center;
  justify-content: center;
  margin: 0 8px;
`;

export const ContainerButtonCheck = styled.View``;

export const TextCreated = styled.Text`
  font-size: ${theme.font_size.md};
  color: ${theme.colors.base.gray100};
  text-decoration: none;
`;

export const TextDone = styled.Text`
  font-size: ${theme.font_size.md};
  color: ${theme.colors.base.gray300};
  text-decoration: line-through;
`;

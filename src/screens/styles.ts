import { theme } from "../theme";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.base.gray600};
`;

export const Tasks = styled.View`
  flex: 1;
  margin: 55px 24px 0 24px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
`;

export const TasksCreated = styled.Text`
  color: ${theme.colors.brand.blue};
  font-size: ${theme.font_size.md};
  font-family: ${theme.font_family.bold};
`;

export const TasksDone = styled.Text`
  color: ${theme.colors.brand.purple};
  font-size: ${theme.font_size.md};
  font-family: ${theme.font_family.bold};
`;

export const ContainerTask = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CounterTask = styled.View`
  background-color: ${theme.colors.base.gray400};
  width: 25px;
  height: 19px;
  border-radius: 999px;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

export const TextCounterTask = styled.Text`
  color: ${theme.colors.base.gray200};
  font-size: ${theme.font_size.sm};
  font-family: ${theme.font_family.bold};
`;

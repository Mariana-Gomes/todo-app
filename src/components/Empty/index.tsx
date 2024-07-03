import { EmptyContainer, EmptyImage, EmptyTitle, EmptyText } from "./styles";
import { theme } from "../../theme";
import Clipboard from "../../assets/Clipboard.png";

export function Empty() {
  return (
    <>
      <EmptyContainer>
        <EmptyImage source={Clipboard} />
        <EmptyTitle>Você ainda não tem tarefas cadastradas</EmptyTitle>
        <EmptyText>Crie tarefas e organize seus itens a fazer</EmptyText>
      </EmptyContainer>
    </>
  );
}

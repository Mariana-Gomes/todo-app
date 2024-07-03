import { ActivityIndicator } from "react-native";
import { Container } from "./styles";
import { theme } from "../../theme";

export function Loading() {
  return (
    <Container>
      <ActivityIndicator size={"large"} color={theme.colors.brand.purple} />
    </Container>
  );
}

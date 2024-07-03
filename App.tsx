import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { HomeScreen } from "./src/screens";
import { Loading } from "./src/components/loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_700Bold,
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {fontsLoaded ? <HomeScreen /> : <Loading />}
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}

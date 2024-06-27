import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Routes from "./src/routes";
import theme from "./src/theme";
import Groups from "./src/screens/Groups";
import { ActivityIndicator, StatusBar } from "react-native";
import CreateGroup from "./src/screens/CreateGroup";
import Players from "./src/screens/Players";
export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {/* {fontLoaded ? <Groups /> : <ActivityIndicator />} */}
      {/* <CreateGroup /> */}
      {/* <Players /> */}
      <Routes />
    </ThemeProvider>
  );
}

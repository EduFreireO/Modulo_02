import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateGroup from "../screens/CreateGroup";
import Groups from "../screens/Groups";
import Players from "../screens/Players";
export default function AppRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Groups" component={Groups} />
      <Screen name="CreateGroup" component={CreateGroup} />
      <Screen name="Players" component={Players} />
    </Navigator>
  );
}

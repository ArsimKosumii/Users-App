import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserDetailsView from "./src/screens/UserDetailsView";
import UserView from "./src/screens/UserView";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserView"
          component={UserView}
          options={{ headerTitle: "All Users" }}
        />

        <Stack.Screen
          name="UserDetailsView"
          component={UserDetailsView}
          options={{ headerTitle: "User" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

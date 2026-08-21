import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function Navigation() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}
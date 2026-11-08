import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/navigation";
import MainTabs from "./MainTabs";
import AddTransactionScreen from "../screens/AddTransactionScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainTabs" component={MainTabs} />
            <Stack.Screen name="AddTransaction" component={AddTransactionScreen} options={{ presentation: "modal" }} />
        </Stack.Navigator>
    );
}
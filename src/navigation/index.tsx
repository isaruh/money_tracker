import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigator from "./AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

export default function Navigation() {
    return (
        <View className='flex-1 bg-[#ebebeb]'>
            <AppNavigator />
        </View>
    );
}
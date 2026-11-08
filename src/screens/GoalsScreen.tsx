import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, RootStackParamList } from "../types/navigation";
import { useNavigation } from "@react-navigation/native";

export default function GoalsScreen() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView>
            <Text>
                ini goals
            </Text>
        </SafeAreaView>
    );
}
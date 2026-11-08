import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type props = {
    type: string;
    date: string;
}

export default function TotalTransactions() {
    return (
        <View className="flex-row items-center">
            <View className="flex-1">
                <Text className="text-md text-[#ed0000] font-semibold">
                    Expense
                </Text>
                <Text className="text-2xl text-[#ed0000] font-extrabold">
                    Rp. 100,000
                </Text>
            </View>
            <View className="pl-2">
                <Ionicons name="chevron-forward" size={16} color="#ed0000" />
            </View>
        </View>
    );
}
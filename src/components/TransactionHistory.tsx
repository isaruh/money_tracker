import { Text, View } from "react-native";
import { Transaction } from "../types/transactions";
import { Ionicons } from "@expo/vector-icons";

type props = {
    transactions: Transaction[];
}

export default function TransactionHistory() {
    return (
        <View className="gap-4">
            <View className="gap-2">
                <Text className="text-[#a0a0a0]">
                    Today
                </Text>
                <View className="flex-row items-center gap-4">
                    <Ionicons name="remove-circle-outline" size={24} color="#ed0000"/>
                    <View>
                        <Text className="text-sm text-[#ed0000]">
                            Warteg
                        </Text>
                        <Text className="text-lg text-[#ed0000] font-semibold">
                            Rp. 12,000
                        </Text>
                    </View>
                </View>
                <View className="flex-row items-center gap-4">
                    <Ionicons name="add-circle-outline" size={24} color="#1aad15"/>
                    <View>
                        <Text className="text-sm text-[#1aad15]">
                            Gaji
                        </Text>
                        <Text className="text-lg text-[#1aad15] font-semibold">
                            Rp. 5,500,000
                        </Text>
                    </View>
                </View>
            </View>
            <View className="gap-2">
                <Text className="text-[#a0a0a0]">
                    Yesterday
                </Text>
                <View className="flex-row items-center gap-4">
                    <Ionicons name="remove-circle-outline" size={24} color="#ed0000"/>
                    <View>
                        <Text className="text-sm text-[#ed0000]">
                            Warteg
                        </Text>
                        <Text className="text-lg text-[#ed0000] font-semibold">
                            Rp. 12,000
                        </Text>
                    </View>
                </View>
                <View className="flex-row items-center gap-4">
                    <Ionicons name="add-circle-outline" size={24} color="#1aad15"/>
                    <View>
                        <Text className="text-sm text-[#1aad15]">
                            Gaji
                        </Text>
                        <Text className="text-lg text-[#1aad15] font-semibold">
                            Rp. 5,500,000
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
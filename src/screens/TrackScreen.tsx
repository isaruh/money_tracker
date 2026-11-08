import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import TransactionHistory from "../components/TransactionHistory";
import { useState } from "react";
import { MONTHS } from "../types/date";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../types/navigation";
import TotalFundsAvail from "../components/TotalFundsAvail";

export default function TrackScreen() {
    const navigation = useNavigation<NavigationProp>();
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());
    const [showPicker, setShowPicker] = useState(true);

    return (
        <ScrollView className="flex-1" contentContainerClassName="gap-8 px-8 pt-16 pb-32">
            {/* Total Funds Avail */}
            <View className="items-start bg-[#333] p-4 rounded-xl gap-4">
                <TotalFundsAvail />
                <View className="w-full">
                    <View
                    className="gap-4 w-full p-6 bg-[#ebebeb] rounded-lg "
                    >
                        <Text className="text-sm text-[#333] font-semibold">
                            This month
                        </Text>
                        <View className="flex-row items-center">
                            <View className="flex-1">
                                <Text className="text-md text-[#1aad15] font-semibold">
                                    Income
                                </Text>
                                <Text className="text-2xl text-[#1aad15] font-extrabold">
                                    Rp. 14,000
                                </Text>
                            </View>
                            <View className="pl-2">
                                <Ionicons name="chevron-forward" size={16} color="#1aad15" />
                            </View>
                        </View>
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
                    </View>
                </View>
            </View>

            {/* Transaction History */}
            <View className="gap-4 p-4">
                <View className="flex-row justify-between">
                    <View className="flex-1">
                        <Text className="flex-1 font-bold text-2xl text-[#333]">
                            History
                        </Text>
                    </View>
                    <View className="flex-1 flex-row justify-between items-center gap-2">
                        <Ionicons name="chevron-back" size={24} color="#333" />
                        <Text className="text-lg font-bold text-[#333]">
                            {MONTHS[month]} {year}
                        </Text>
                        <Ionicons name="chevron-forward" size={24} color="#333" />
                    </View>
                </View>
                <TransactionHistory />
            </View>
        </ScrollView>
    );
}
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SmallTab from "../components/SmallTab";
import { getTotalFunds } from "../utils/database";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../types/navigation";
import { DAYS, MONTHS } from "../types/date";
import TotalFundsAvail from "../components/TotalFundsAvail";

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();
    
    const today = new Date();
    const daysTab: string[] = ["Today", "Yesterday"];
    const [tabTotalSpentTodayPressed, setTabTotalSpentTodayPressed] = useState<string>(daysTab[0]);
    const [tabAverageSpentPressed, setTabAverageSpentPressed] = useState<string>(daysTab[0]);

    return (
        <ScrollView className="flex-1" contentContainerClassName="gap-4 px-8 pt-16 pb-32">

            {/* Total Funds Avail */}
            <View className="items-start bg-[#333] p-4 rounded-xl gap-4">
                <TotalFundsAvail />
                <View className="flex-2 flex-row justify-between gap-2">
                    <View className="w-3/5 items-start justify-between gap-2 p-6 bg-[#ebebeb] rounded-lg">
                        <Text className="text-md text-[#333] font-semibold">
                            {today.getDate()} {MONTHS[today.getMonth()]} {today.getFullYear()}
                        </Text>
                        <Text numberOfLines={1} adjustsFontSizeToFit={true} className="text-5xl text-[#333] font-extrabold">
                            {DAYS[today.getDay()]}
                        </Text>
                    </View>
                    <View className="flex-1 items-start justify-center gap-2 p-6 bg-[#ebebeb] rounded-lg">
                        <Text className="text-md text-[#333] font-semibold">
                            Today's transactions
                        </Text>
                        <Text className="text-4xl text-[#333] font-extrabold">
                            14
                        </Text>
                    </View>
                </View>
            </View>

            {/* Total Spent Today */}
            <View className="items-start bg-[#333] p-4 rounded-xl gap-4">
                <View className="flex-row items-end mb-16">
                    <View className="flex-1 justify-center">
                        <Text className="text-md text-white font-semibold">
                            Average spent
                        </Text>
                        <View className="flex-row gap-2 items-end">
                            <Text className="text-4xl font-extrabold text-white">
                                Rp. 20,000
                            </Text>
                            <Text className="font-bold text-white text-2xl">
                                / day
                            </Text>
                        </View>
                    </View>
                    <View className="ml-2">
                        <Ionicons name="chevron-forward" size={24} color="#fff" />
                    </View>
                </View>
                <View className="w-full">
                    <View className="flex-row">
                        {daysTab.map((val, idx) => (
                            <SmallTab key={idx} title={val} order={daysTab} isPressed={tabTotalSpentTodayPressed} onPress={() => setTabTotalSpentTodayPressed(val)} />
                        ))}
                    </View>
                    <View 
                    className={`gap-4 w-full pt-8 p-6 bg-[#ebebeb] rounded-b-lg ${daysTab.indexOf(tabTotalSpentTodayPressed) == 0 ? "rounded-tr-lg " : (daysTab.indexOf(tabTotalSpentTodayPressed) == daysTab.length-1) ? "rounded-tl-lg" : "rounded-t-lg"}`}
                    >
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

            {/* Average Spent */}
            <View className="items-start bg-[#333] p-4 rounded-xl gap-4">
                <View className="flex-row items-end mb-16">
                    <View className="flex-1 justify-center">
                        <Text className="text-md text-white font-semibold">
                            Average spent
                        </Text>
                        <View className="flex-row gap-2 items-end">
                            <Text className="text-4xl font-extrabold text-white">
                                Rp. 20,000
                            </Text>
                            <Text className="font-bold text-white text-2xl">
                                / day
                            </Text>
                        </View>
                    </View>
                    <View className="ml-2">
                        <Ionicons name="chevron-forward" size={24} color="#fff" />
                    </View>
                </View>
                <View className="w-full">
                    <View className="flex-row">
                        {daysTab.map((val, idx) => (
                            <SmallTab key={idx} title={val} order={daysTab} isPressed={tabAverageSpentPressed} onPress={() => setTabAverageSpentPressed(val)} />
                        ))}
                    </View>
                    <View 
                    className={`gap-4 w-full pt-8 p-6 bg-[#ebebeb] rounded-b-lg ${daysTab.indexOf(tabAverageSpentPressed) == 0 ? "rounded-tr-lg " : (daysTab.indexOf(tabAverageSpentPressed) == daysTab.length-1) ? "rounded-tl-lg" : "rounded-t-lg"}`}
                    >
                        <View className="flex-row items-center">
                            <View className="flex-1">
                                <Text className="text-md text-[#333] font-semibold">
                                    spent
                                </Text>
                                <View className="flex-row gap-2 items-end">
                                    <Text className="text-2xl text-[#333] font-extrabold">
                                        Rp. 14,000
                                    </Text>
                                    <Text className="text-lg text-[#333] font-semibold">
                                        / day
                                    </Text>
                                </View>
                            </View>
                            <View className="ml-2">
                                <Ionicons name="chevron-forward" size={16} color="#333" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
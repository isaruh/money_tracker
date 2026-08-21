import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SmallTab from "../components/SmallTab";

export default function HomeScreen() {
    const moneyTypeOrder: string[] = ["Balance", "Cash"];
    const [tabTotalSpentTodayPressed, setTabTotalSpentTodayPressed] = useState<string>(moneyTypeOrder[0]);
    const [tabAverageSpentPressed, setTabAverageSpentPressed] = useState<string>(moneyTypeOrder[0]);

    return (
        <SafeAreaView className="flex-1 bg-[#ebebeb]">
            <ScrollView className="flex-1" contentContainerClassName="gap-4 pb-32 p-8">

                {/* Total Funds Avail */}
                <View className="items-start bg-[#d15abf] p-4 rounded-xl gap-4">
                    <View className="flex-row items-end mb-16">
                        <View className="flex-1">
                            <Text className="text-md text-white font-semibold">
                                total funds available
                            </Text>
                            <Text className="text-4xl font-extrabold text-white">
                                Rp. 5,760,000
                            </Text>
                        </View>
                        <View className="pl-2">
                            <Ionicons name="add-circle" size={24} color="#fff" />
                        </View>
                    </View>
                    <View className="w-full">
                        <View
                        className="gap-4 w-full p-6 bg-[#ebebeb] rounded-lg "
                        >
                            <View className="flex-row items-center">
                                <View className="flex-1">
                                    <Text className="text-md text-[#d15abf] font-semibold">
                                        Balance
                                    </Text>
                                    <Text className="text-2xl text-[#d15abf] font-extrabold">
                                        Rp. 14,000
                                    </Text>
                                </View>
                                <View className="pl-2">
                                    <Ionicons name="chevron-forward" size={16} color="#d15abf" />
                                </View>
                            </View>
                            <View className="flex-row items-center">
                                <View className="flex-1">
                                    <Text className="text-md text-[#d15abf] font-semibold">
                                        Cash
                                    </Text>
                                    <Text className="text-2xl text-[#d15abf] font-extrabold">
                                        Rp. 100,000
                                    </Text>
                                </View>
                                <View className="pl-2">
                                    <Ionicons name="chevron-forward" size={16} color="#d15abf" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Total Spent Today */}
                <View className="items-start bg-[#d15abf] p-4 rounded-xl gap-4">
                    <View className="flex-row items-end mb-16">
                        <View className="flex-1 justify-center">
                            <Text className="text-md text-white font-semibold">
                                Today spent
                            </Text>
                            <View className="flex-row gap-2 items-end">
                                <Text className="text-4xl font-extrabold text-white">
                                    Rp. 20,000
                                </Text>
                            </View>
                        </View>
                        <View className="pl-2">
                            <Ionicons name="chevron-forward" size={24} color="#fff" />
                        </View>
                    </View>
                    <View className="w-full">
                        <View className="flex-row">
                            {moneyTypeOrder.map((val, idx) => (
                                <SmallTab key={idx} title={val} order={moneyTypeOrder} isPressed={tabTotalSpentTodayPressed} onPress={() => setTabTotalSpentTodayPressed(val)} />
                            ))}
                        </View>
                        <View 
                        className={`gap-4 w-full pt-8 p-6 bg-[#ebebeb] rounded-b-lg ${moneyTypeOrder.indexOf(tabTotalSpentTodayPressed) == 0 ? "rounded-tr-lg " : (moneyTypeOrder.indexOf(tabTotalSpentTodayPressed) == moneyTypeOrder.length-1) ? "rounded-tl-lg" : "rounded-t-lg"}`}
                        >
                            <View className="flex-row items-center">
                                <View className="flex-1">
                                    <Text className="text-md text-[#ed0000] font-semibold">
                                        spent
                                    </Text>
                                    <View className="flex-row gap-2 items-end">
                                        <Text className="text-2xl text-[#ed0000] font-extrabold">
                                            Rp. 14,000
                                        </Text>
                                        <Text className="text-lg text-[#ed0000] font-semibold">
                                            today
                                        </Text>
                                    </View>
                                </View>
                                <View className="pl-2">
                                    <Ionicons name="chevron-forward" size={16} color="#ed0000" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Average Spent */}
                <View className="items-start bg-[#d15abf] p-4 rounded-xl gap-4">
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
                        <View className="pl-2">
                            <Ionicons name="chevron-forward" size={24} color="#fff" />
                        </View>
                    </View>
                    <View className="w-full">
                        <View className="flex-row">
                            {moneyTypeOrder.map((val, idx) => (
                                <SmallTab key={idx} title={val} order={moneyTypeOrder} isPressed={tabAverageSpentPressed} onPress={() => setTabAverageSpentPressed(val)} />
                            ))}
                        </View>
                        <View 
                        className={`gap-4 w-full pt-8 p-6 bg-[#ebebeb] rounded-b-lg ${moneyTypeOrder.indexOf(tabAverageSpentPressed) == 0 ? "rounded-tr-lg " : (moneyTypeOrder.indexOf(tabAverageSpentPressed) == moneyTypeOrder.length-1) ? "rounded-tl-lg" : "rounded-t-lg"}`}
                        >
                            <View className="flex-row items-center">
                                <View className="flex-1">
                                    <Text className="text-md text-[#d15abf] font-semibold">
                                        spent
                                    </Text>
                                    <View className="flex-row gap-2 items-end">
                                        <Text className="text-2xl text-[#d15abf] font-extrabold">
                                            Rp. 14,000
                                        </Text>
                                        <Text className="text-lg text-[#d15abf] font-semibold">
                                            / day
                                        </Text>
                                    </View>
                                </View>
                                <View className="pl-2">
                                    <Ionicons name="chevron-forward" size={16} color="#d15abf" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
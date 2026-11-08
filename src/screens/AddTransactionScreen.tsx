import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function AddTransactionScreen() {
    const navigation = useNavigation();
    const [balance, setBalance] = useState<string>();
    const [type, setType] = useState<string>("income");
    const [desc, setDesc] = useState<string>("");

    return (
        <ScrollView keyboardShouldPersistTaps="handled" className="flex-1 px-8 pt-16 pb-32">
            <View className="gap-12">
                <View className="flex-row justify-between items-center">
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={24} color="#333" />
                    </Pressable>
                    <Text className="font-bold text-2xl">
                        New Transaction
                    </Text>
                </View>

                <View className="gap-8 p-6">
                    <View className="gap-2">
                        <Text className="text-lg font-semibold text-[#333]">
                            Balance
                        </Text>
                        <TextInput
                        value={balance}
                        onChangeText={setBalance}
                        placeholder="Amount" 
                        className="p-4 rounded-lg placeholder:text-[#aaa] border-2 border-[#aaa] focus:border-[#333]" keyboardType="decimal-pad" />
                    </View>

                    <View className="flex-row gap-8 items-center">
                        <Pressable onPress={() => {setType("income")}} className="flex-row gap-2 items-center p-2">
                            <View className={`aspect-square size-4 rounded-full ${type == "income" ? "bg-[#333]" : "border-2 border-[#aaa]"}`} />
                            <Text className={`font-bold ${type == "income" ? "text-[#333]" : "text-[#aaa]"}`}>income</Text>
                        </Pressable>
                        <Pressable onPress={() => {setType("expense")}} className="flex-row gap-2 items-center p-2">
                            <View className={`aspect-square size-4 rounded-full ${type == "expense" ? "bg-[#333]" : "border-2 border-[#aaa]"}`} />
                            <Text className={`font-bold ${type == "expense" ? "text-[#333]" : "text-[#aaa]"}`}>expense</Text>
                        </Pressable>
                    </View>

                    <View className="gap-2">
                        <Text className="text-lg font-semibold text-[#333]">
                            Description
                        </Text>
                        <TextInput
                        value={desc}
                        onChangeText={setDesc}
                        placeholder="Mie Ayam di dekat kantor"
                        multiline={true}
                        textAlignVertical="top"
                        className="h-48 p-4 rounded-lg placeholder:text-[#aaa] border-2 border-[#aaa] focus:border-[#333]" />
                    </View>
                </View>

                <View className="flex-row justify-between items-center gap-8 p-6">
                    <Pressable onPress={() => navigation.goBack()} className="flex-1 p-4 justify-center items-center border-2 border-[#333] rounded-xl">
                        <Text className="text-[#333] text-lg font-bold">
                            cancel
                        </Text>
                    </Pressable>
                    <Pressable className="flex-1 p-4 justify-center items-center border-2 border-[#333] bg-[#333] rounded-xl">
                        <Text className="text-[#ebebeb] text-lg font-bold">
                            save
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
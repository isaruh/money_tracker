import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { getTotalFunds } from "../utils/database";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../types/navigation";

export default function TotalFundsAvail() {
    const navigation = useNavigation<NavigationProp>();
    const [totalFunds, setTotalFunds] = useState<number>(0);

    useEffect(() => {
        const fetchFunds = async () => {
            try {
                const result = await getTotalFunds();

                setTotalFunds(result);
            } catch (e) {
                console.error("failed: " + e);
            }
        };

        fetchFunds();
    }, []);

    return (
        <View className="flex-row items-end mb-16">
            <View className="flex-1">
                <Text className="text-md text-white font-semibold">
                    Total funds available
                </Text>
                <Text className="text-4xl font-extrabold text-white">
                    Rp. {totalFunds}
                </Text>
            </View>
            <Pressable className="ml-2" onPress={() => navigation.navigate('AddTransaction')}>
                <Ionicons name="add-circle" size={24} color="#fff" />
            </Pressable>
        </View>
    );
}
import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";

export default function BottomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
    return (
        <View className="absolute w-full bottom-8 px-8 items-center justify-center">
            <View className="flex-row bg-[#d15abf] gap-8 rounded-full justify-between items-center px-8 py-4 shadow-xl shadow-slate-500">
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index;

                    let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

                    if (route.name == "Home") {
                        iconName = isFocused ? "home" : "home-outline";
                    } else if (route.name == "Track") {
                        iconName = isFocused ? "analytics-sharp" : "analytics-outline";
                    } else if (route.name == "Goals") {
                        iconName = isFocused ? "trophy" : "trophy-outline";
                    }

                    const onPress = () => {
                        const event = navigation.emit({
                            type: "tabPress",
                            target: route.key,
                            canPreventDefault: true
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    return (
                        <TouchableOpacity
                        key={route.key}
                        onPress={onPress}
                        className="items-center justify-between p-2"
                        >
                            <Ionicons name={iconName} size={24} color={isFocused ? "#fff" : "#ffb8f4"} />
                            <Text className={isFocused ? "text-[#fff]" : "text-[#ffb8f4]"} >{route.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
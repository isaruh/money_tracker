import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";

type props = {
    title: string;
    order: string[];
    isPressed: string;
    onPress: () => void;
}

export default function SmallTab({ title, order, isPressed, onPress }: props) {

    let bg = "rounded-xl";
    let bg2 = "bg-[#ebebeb] rounded-t-lg"

    if (isPressed == title) {
            bg = "rounded-xl";
            bg2 = "bg-[#ebebeb] rounded-t-lg";
        } else if (order.indexOf(isPressed) != 0 && order[order.indexOf(isPressed) - 1] == title) {
            bg = "rounded-t-xl rounded-bl-xl";
            bg2 = "bg-[#d15abf] rounded-lg";
        } else if (order.indexOf(isPressed) != order.length-1 && order[order.indexOf(isPressed) + 1] == title) {
            bg = "rounded-t-xl rounded-br-xl";
            bg2 = "bg-[#d15abf] rounded-lg";
        } else {
            bg = "rounded-xl";
            bg2 = "bg-[#d15abf] rounded-lg";
        }

    return (
        <Pressable className={`flex-1 bg-[#ebebeb] ${bg}`} onPress={onPress}>
            <View 
            className={`flex-1 items-center py-2 px-4 ${bg2}`}
            >
                <Text className={`text-md font-semibold ${isPressed == title ? "text-[#d15abf]" : "text-[#ebebeb]"}`}>
                    {title}
                </Text>
            </View>
        </Pressable>
    );
}
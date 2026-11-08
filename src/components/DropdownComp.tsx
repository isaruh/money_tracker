import { Dropdown } from "react-native-element-dropdown";
import { DropdownData } from "../types/dropdownData";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type props = {
    data: DropdownData[];
    placeholder?: string;
    defVal: string | null;
}

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        borderWidth: 1,
        borderColor: '#aaa'
    },
    dropdownFocused: {
        borderColor: "#333"
    },
    placeholder: {
        color: '#aaa'
    },
    selectedText: {
        fontSize: 13
    }
});

export default function DropdownComp({data, placeholder = "Select item", defVal }: props) {
    const [value, setValue] = useState<string | null>(defVal);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <Dropdown
        style={[styles.dropdown, isFocused && styles.dropdownFocused]}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={item => {
            setValue(item.value);
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        />
    );
}
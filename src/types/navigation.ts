import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
    MainTabs: NavigatorScreenParams<MainTabParamList>;
    AddTransaction: undefined;
}

export type MainTabParamList = {
    Home: undefined;
    Track: undefined;
    Goals: undefined;
}
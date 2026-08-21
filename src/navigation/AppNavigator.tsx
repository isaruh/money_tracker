import { MainTabParamList } from "../types/navigation";
import HomeScreen from "../screens/HomeScreen";
import GoalsScreen from "../screens/GoalsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomTabBar from "./BottomTabBar";
import TrackScreen from "../screens/TrackScreen";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function AppNavigator() {
    return (
        <Tab.Navigator
        tabBar={(props) => <BottomTabBar {...props} />}
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Track" component={TrackScreen} />
            <Tab.Screen name="Goals" component={GoalsScreen} />
        </Tab.Navigator>
    );
}
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "../types/navigation";
import HomeScreen from "../screens/HomeScreen";
import TrackScreen from "../screens/TrackScreen";
import GoalsScreen from "../screens/GoalsScreen";
import BottomTabBar from "./BottomTabBar";

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function MainTabs() {
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
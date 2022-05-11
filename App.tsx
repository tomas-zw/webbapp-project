import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Base } from './styles';
import Home from "./components/Home";
import Delays from "./components/map/Delays";
import Login from "./components/auth/Login";

const Tab = createBottomTabNavigator();
const routeIcons = {
  "Home": "home",
  "Delays": "train",
  "Login": "log-in",
};

export default function App() {
  return (
    <SafeAreaView style={Base.container}>

        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = routeIcons[route.name] || "alert";
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarActiveBackgroundColor: '#202020',
                tabBarInactiveBackgroundColor: '#202020',
              })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Delays" component={Delays} />
                <Tab.Screen name="Login" component={Login} />
            </Tab.Navigator>
        </NavigationContainer>

        <StatusBar style="auto" />

    </SafeAreaView>
  );
};

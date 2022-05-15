import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react';
import FlashMessage from 'react-native-flash-message';

import delaysModel from './models/delays';
import authModel from './models/auth';
import { Base } from './styles';
import Home from "./components/Home";
import Delays from "./components/map/Delays";
import Auth from "./components/auth/AuthStack";
import User from "./components/user/UserStack";

const Tab = createBottomTabNavigator();
const routeIcons = {
  "Home": "home",
  "Delays": "train",
  "Login": "log-in",
  "Premium": "person-circle",
};

export default function App() {
    const [delayedTrains, setDelayedTrains] = useState([]);
    const [stations, setStations] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

    useEffect(async () => {
        setDelayedTrains(await delaysModel.getDelays());
        setStations(await delaysModel.getStations());
        setIsLoggedIn(await authModel.loggedIn());
    }, []);

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
                    headerShown: false,
                  })}
                >
                    <Tab.Screen name="Home">
                        {(screenProps) => <Home
                            {...screenProps}
                            delayedTrains={delayedTrains}
                            stations={stations}
                            />}
                    </Tab.Screen>
                    <Tab.Screen name="Delays">
                        {() => <Delays
                            delayedTrains={delayedTrains}
                            stations={stations}
                            />}
                    </Tab.Screen>
                    {isLoggedIn ?
                    <Tab.Screen name="Premium">
                        {(screenProps) => <User
                            {...screenProps}
                            delayedTrains={delayedTrains}
                            stations={stations}
                            setIsLoggedIn={setIsLoggedIn}
                            />}
                    </Tab.Screen> :
                    <Tab.Screen name="Login">
                        {(screenProps) => <Auth
                            {...screenProps}
                            setIsLoggedIn={setIsLoggedIn}
                            />}
                    </Tab.Screen>
                }
                </Tab.Navigator>
            </NavigationContainer>

            <StatusBar style="auto" />
            <FlashMessage position="top" />
        </SafeAreaView>
    );
};

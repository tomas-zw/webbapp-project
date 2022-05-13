import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Register from './Register';
import Auth from './Auth';

const Stack = createNativeStackNavigator();

export default function AuthStack(props) {
    return (
        <Stack.Navigator initialRouteName="Auth">
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Logga in">
                {(screenProps) => <Login {...screenProps} setIsLoggedIn={props.setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Registrera" component={Register} />
        </Stack.Navigator>
    );
};

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import User from './User';

const Stack = createNativeStackNavigator();

export default function UserStack(props) {
    return (
        <Stack.Navigator initialRouteName="User">
            <Stack.Screen name="User">
                {(screenProps) => <User {...screenProps} setIsLoggedIn={props.setIsLoggedIn} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

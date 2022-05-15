import { createNativeStackNavigator } from '@react-navigation/native-stack';

import User from './User';
import UserDelays from './UserDelays';
import UserFavorites from './UserFavorites';
import UserMap from './UserMap';

const Stack = createNativeStackNavigator();

export default function UserStack(props) {
    return (
        <Stack.Navigator initialRouteName="User">
            <Stack.Screen name="User">
                {(screenProps) => <User
                    {...screenProps}
                    setIsLoggedIn={props.setIsLoggedIn} />}
            </Stack.Screen>

            <Stack.Screen name="Delayed trains">
                {(screenProps) => <UserDelays
                    {...screenProps}
                    delayedTrains={props.delayedTrains}
                    stations={props.stations}
                    />}
            </Stack.Screen>

            <Stack.Screen name="Favorites">
                {(screenProps) => <UserFavorites
                    {...screenProps}
                    delayedTrains={props.delayedTrains}
                    stations={props.stations}
                    />}
            </Stack.Screen>

            <Stack.Screen name="Delayed train">
                {(screenProps) => <UserMap
                    {...screenProps}
                    //delayedTrains={props.delayedTrains}
                    //stations={props.stations}
                    />}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

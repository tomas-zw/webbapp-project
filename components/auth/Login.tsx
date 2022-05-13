import { View, ImageBackground } from "react-native";
import { Base } from "../../styles";
import { useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import Auth from "../../interfaces/auth";
import AuthModel from "../../models/auth";
import AuthFields from './AuthFields';
import sunset from "../../assets/proj_background.jpg";

export default function Login({navigation, setIsLoggedIn}) {
    const [auth, setAuth] = useState<Partial<Auth>>({});

    async function doLogin() {
        if (auth.email && auth.password) {
            const result = await AuthModel.login(auth.email, auth.password);

            if (result.type === 'success') {
                setIsLoggedIn(true);
                navigation.navigate("Home");
            }

            showMessage({
                message: result.title,
                description: result.message,
                type: result.type,
            });


        } else {
            showMessage({
                message: 'Saknas',
                description: 'E-post eller lösenord saknas',
                type: 'warning'
            });
        }
    }
    return (
        <View>
            <ImageBackground source={sunset} style={Base.imgBackgroundContainer}>
                <AuthFields
                    auth={auth}
                    setAuth={setAuth}
                    submit={doLogin}
                    title="Logga in"
                    navigation={navigation}
                />
            </ImageBackground>
        </View>
    )
}

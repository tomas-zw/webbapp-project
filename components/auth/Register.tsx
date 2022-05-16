import { View, ImageBackground } from "react-native";
import { Base } from "../../styles";
import { useState } from 'react';
import { showMessage } from 'react-native-flash-message';
import Auth from "../../interfaces/auth";
import AuthModel from "../../models/auth";
import AuthFields from './AuthFields';
import sunset from "../../assets/proj_background.jpg";

export default function Register({navigation, setIsLoggedIn}) {
    const [auth, setAuth] = useState<Partial<Auth>>({});

    async function doRegister() {
        if (auth.email && auth.password) {
            const result = await AuthModel.register(auth.email, auth.password);
            // console.log(result.data.message);
            navigation.navigate("Auth");
            showMessage({
                message: result.title,
                description: result.message,
                type: result.type
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
                    submit={doRegister}
                    title="Registrera"
                    navigation={navigation}
                />
            </ImageBackground>
        </View>
    )
}



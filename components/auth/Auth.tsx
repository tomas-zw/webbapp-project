import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
import { Base, Typography } from "../../styles";
import sunset from "../../assets/proj_background.jpg";

export default function Auth({ delayedTrains, stations, navigation}) {
    return (
        <View>
            <ImageBackground source={sunset} style={Base.imgBackgroundContainer}>

                <TouchableOpacity
                    style={Base.buttonContainer}
                    >
                    <Text style={Typography.buttonText}>Logga in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Base.buttonContainer}
                    >
                    <Text style={Typography.buttonText}>Registrera</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

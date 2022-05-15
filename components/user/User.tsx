import { Text, View, ImageBackground, TouchableOpacity} from "react-native";
import { Base, Typography } from "../../styles";
import Station from "../../interfaces/station";
import storage from "../../models/storage";

import sunset from "../../assets/proj_background.jpg";

export default function User({ navigation, setIsLoggedIn }) {

    return (
        <View>
            <ImageBackground source={sunset} style={Base.imgBackgroundContainer}>
            <TouchableOpacity
                style={Base.buttonContainer}
                onPress={() => {
                        navigation.navigate("Delayed trains");
                    }}
                >
                <Text style={Typography.buttonText}>Förseningar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Base.buttonContainer}
                onPress={() => {
                        navigation.navigate("Favorites");
                    }}
                >
                <Text style={Typography.buttonText}>Favoriter</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Base.buttonContainer}
                onPress={() => {
                        storage.deleteToken();
                        setIsLoggedIn(false);
                        navigation.navigate("Home");
                    }}
                >
                <Text style={Typography.buttonText}>Logga ut</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

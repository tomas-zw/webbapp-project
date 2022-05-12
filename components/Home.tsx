import { Text, View, ImageBackground} from "react-native";
import { Base, Typography } from "../styles";

import sunset from "../assets/proj_background.jpg";

export default function Home() {
    return (
        <View>
            <ImageBackground source={sunset} style={{width: "100%", height: "100%"}}>
                <Text>Home</Text>
            </ImageBackground>
        </View>
    )
}

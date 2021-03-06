import { Text, View, ImageBackground, TouchableOpacity} from "react-native";
import { Base, Typography } from "../styles";
import Station from "../interfaces/station";

import sunset from "../assets/proj_background.jpg";

export default function Home({ delayedTrains, stations, navigation}) {


    //console.log(stations[0])

    const allStations = stations.map((station: Station, index: number) =>
        <Text style={Typography.normal} key={index}>
            { station.AdvertisedLocationName } Antal: {station.Geometry.WGS84}</Text>);

    const hasStations = () => {
            return (<TouchableOpacity
                style={Base.buttonContainer}
                onPress={() => {navigation.navigate("Delays")}}
                >
                    <Text style={Typography.buttonText}>Förseningar</Text>
                </TouchableOpacity>
            )
        }

    return (
        <View>
            <ImageBackground source={sunset} style={Base.imgBackgroundContainer}>
                {stations ? hasStations():
                <Text>Laddar</Text>
                }
            </ImageBackground>
        </View>
    )
}

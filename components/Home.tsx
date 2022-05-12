import { Text, View, ImageBackground} from "react-native";
import { Base, Typography } from "../styles";

import sunset from "../assets/proj_background.jpg";

export default function Home({ delayedTrains, stations}) {


    console.log(stations[0])

    const allStations = stations.map((station, index: number) =>
        <Text style={Typography.normal} key={index}>
            { station.AdvertisedLocationName } Antal: {station.Geometry.WGS84}</Text>);


    return (
        <View>
            <ImageBackground source={sunset} style={{width: "100%", height: "100%"}}>
                {allStations}
            </ImageBackground>
        </View>
    )
}

import { Text, View } from "react-native";
import { Base, Typography } from "../../styles";
import { Picker } from "@react-native-picker/picker";

export default function UserFavorites({ navigation, delayedTrains, stations }) {

    const stationList = stations.map((station, index) => {
        return <Picker.Item
            key={index}
            label={station.AdvertisedLocationName}
            value={station.LocationSignature}
            />
    });



    return (
        <View>
            <Text style={Typography.normal}>Favoriter</Text>
            <Picker
                selectedValue={}
                onValueChange={ () => false}
            />
        </View>
    )
}

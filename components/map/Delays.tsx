import MapView, { Marker } from "react-native-maps";
import { View } from "react-native";
import { Base } from "../../styles";

export default function Delays() {
    const initialRegion = {
        latitude: 60.128161,
        longitude: 15.5869,
        latitudeDelta: 10,
        longitudeDelta: 0.1,
    };

    return (
        <View style={Base.dark}>
            <View style={Base.mapContainer}>
                <MapView
                    style={Base.map}
                    initialRegion={ initialRegion }
                    >
                    <Marker
                        coordinate={{ latitude: 56.17, longitude: 15.59 }}
                        title="Min första markör"
                    />
                    </MapView>
            </View>
        </View>
    );
}

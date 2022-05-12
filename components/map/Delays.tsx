import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useState, useEffect } from 'react';
import { View } from "react-native";
import { Base } from "../../styles";

export default function Delays() {
    const [locationMarker, setLocationMarker] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const initialRegion = {
        latitude: 60.128161,
        longitude: 15.5869,
        latitudeDelta: 10,
        longitudeDelta: 0.1,
    };

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                setErrorMessage('Permission to access location was denied');
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});

            setLocationMarker(<Marker
                coordinate={{
                    latitude: currentLocation.coords.latitude,
                    longitude: currentLocation.coords.longitude
                }}
                title="Min plats"
                pinColor="blue"
            />);
        })();
    }, []);

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
                    { locationMarker }
                    </MapView>
            </View>
        </View>
    );
}

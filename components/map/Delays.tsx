import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useState, useEffect } from 'react';
import { View, Text } from "react-native";
import { Base, Typography } from "../../styles";
import DelayMarker from "./DelayMarker";

export default function Delays({ delayedTrains, stations }) {

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
                pinColor="green"
                key="user"
            />);
        })();
    }, []);

    return (
        <View style={Base.dark}>
            <View style={Base.mapContainer}>
            <Text style={Typography.normal}> { errorMessage }</Text>
                <MapView
                    style={Base.map}
                    initialRegion={ initialRegion }
                    >
                    { locationMarker }
                    <DelayMarker
                        delayedTrains={delayedTrains}
                        stations={stations}
                    />
                    </MapView>
            </View>
        </View>
    );
}

import { Text, ScrollView } from "react-native";
import { Base, Typography } from "../../styles";
import { DataTable } from "react-native-paper";

export default function UserDelays({ navigation, delayedTrains, stations }) {

    function getCoordinates (wgs84) {
        return wgs84.slice(7, -1).split(" ");
    };

    function totalDelay(advertised, estimated) {
        const oldTime = new Date(advertised);
        const newTime = new Date(estimated);
        return Math.abs((newTime.getTime() - oldTime.getTime()) / 1000 / 60);
    };

    function circleRadius(delay) {
        const metersPerMin = 45;
        return delay * metersPerMin;
    };

    let onlyValid = delayedTrains
        .filter(delay => delay.hasOwnProperty("FromLocation"))
        .map((train, index) => {
            let stationName = stations.filter(station => station.LocationSignature === train.FromLocation[0].LocationName);

            let latAndLong = getCoordinates(stationName[0].Geometry.WGS84);
            let delayInMinutes = totalDelay(train.AdvertisedTimeAtLocation, train.EstimatedTimeAtLocation);
            let newTime = new Date(train.EstimatedTimeAtLocation).toLocaleString("se-SV");
            let circle = circleRadius(delayInMinutes);

            let trainInfo = {
            station: stationName[0].AdvertisedLocationName,
            latAndLong: latAndLong,
            circle: circle,
            newTime: newTime,
            };

            return (
                <DataTable.Row
                    key={index}
                    onPress={() => {
                        navigation.navigate("Delayed train", {trainInfo: trainInfo});
                    }}>
                    <DataTable.Cell>{stationName[0].AdvertisedLocationName}</DataTable.Cell>
                    <DataTable.Cell> {newTime}</DataTable.Cell>
                </DataTable.Row>
            );

    });

    return (
        <ScrollView>
            <DataTable>
                <DataTable.Header >
                    <DataTable.Title>Station</DataTable.Title>
                    <DataTable.Title>Ny Avgångstid</DataTable.Title>
                </DataTable.Header>
            </DataTable>
            {onlyValid}
        </ScrollView>
    )
}

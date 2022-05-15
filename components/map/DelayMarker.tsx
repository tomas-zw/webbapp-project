import { Marker, Circle } from "react-native-maps";

export default function DelayMarker({ delayedTrains, stations }) {

    let onlyValid = delayedTrains
        .filter(delay => delay.hasOwnProperty("FromLocation"))
        .map((train, index) => {
            let stationName = stations.filter(station => station.LocationSignature === train.FromLocation[0].LocationName);

            let latAndLong = getCoordinates(stationName[0].Geometry.WGS84);
            let delayInMinutes = totalDelay(train.AdvertisedTimeAtLocation, train.EstimatedTimeAtLocation);

            return (<Marker
                coordinate={{
                    latitude: parseFloat(latAndLong[1]),
                    longitude: parseFloat(latAndLong[0])
                }}
                key = {index}
                title= {stationName[0].AdvertisedLocationName}
                description= {"Ny tid: " + new Date(train.EstimatedTimeAtLocation).toLocaleString("se-SV")}
                pinColor="blue"
                />
            );

        });

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

    return onlyValid;
};

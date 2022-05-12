import { Marker } from "react-native-maps";

export default function DelayMarker({ delayedTrains, stations }) {

    let coordinates = stations[0].Geometry.WGS84.slice(7, -1);
    let latAndLong = coordinates.split(" ");
    console.log(coordinates);
    console.log(latAndLong[0]);
    console.log(latAndLong[1]);





    let onlyValid = delayedTrains
        .filter(delay => delay.hasOwnProperty("FromLocation"))
        .map((train, index) => {
            let stationName = stations.filter(station => station.LocationSignature === train.FromLocation[0].LocationName);

            latAndLong = getCoordinates(stationName[0].Geometry.WGS84);

            return (<Marker
                coordinate={{
                    latitude: parseFloat(latAndLong[1]),
                    longitude: parseFloat(latAndLong[0])
                }}
                key = {index}
                title= {stationName[0].AdvertisedLocationName}
                description= {"Ny tid: " + new Date(train.EstimatedTimeAtLocation).toLocaleString("se-SV")}
                pinColor="blue"
            />);


        /*
            return {
                name: stationName[0].AdvertisedLocationName,
                latitude: latAndLong[1],
                longitude: latAndLong[0],
                estimated: new Date(train.EstimatedTimeAtLocation).toLocaleString("se-SV"),
                advertised: new Date(train.AdvertisedTimeAtLocation).toLocaleString("se-SV"),
            }
        */

        });

    console.log(onlyValid)

    function getCoordinates (wgs84) {
        return wgs84.slice(7, -1).split(" ");

    };

    function totalDelay(advertised, estimated) {

    };





    return onlyValid;
};

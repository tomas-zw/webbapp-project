import { Marker, Circle } from "react-native-maps";

export default function DelayMarker({ delayedTrains, stations }) {

    let onlyValid = delayedTrains
        .filter(delay => delay.hasOwnProperty("FromLocation"))
        .map((train, index) => {
            let stationName = stations.filter(station => station.LocationSignature === train.FromLocation[0].LocationName);

            let latAndLong = getCoordinates(stationName[0].Geometry.WGS84);

            console.log(index)

            return (<>
                <Marker
                    coordinate={{
                        latitude: parseFloat(latAndLong[1]),
                        longitude: parseFloat(latAndLong[0])
                    }}
                    key = {index}
                    title= {stationName[0].AdvertisedLocationName}
                    description= {"Ny tid: " + new Date(train.EstimatedTimeAtLocation).toLocaleString("se-SV")}
                    pinColor="blue"
                />
                <Circle
                    center={{
                        latitude: parseFloat(latAndLong[1]),
                        longitude: parseFloat(latAndLong[0])
                    }}
                    radius= {1000}
                    key= {(1 + index) * (-1)}
                />
                </>

            );

        });


    function getCoordinates (wgs84) {
        return wgs84.slice(7, -1).split(" ");

    };

    function totalDelay(advertised, estimated) {

    };

    return onlyValid;
};
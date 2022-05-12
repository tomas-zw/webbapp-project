import Location from "./location";

export default interface Delay {
    ActivityId: String,
    ActivityType: String,
    AdvertisedTimeAtLocation: String,
    AdvertisedTrainIdent: String,
    Canceled: boolean,
    EstimatedTimeAtLocation: String,
    FromLocation: Array<Location>,
    ToLocation: Array<Location>,
}

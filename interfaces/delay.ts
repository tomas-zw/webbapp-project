import Location from "./location";

export default interface Delays {
    activity_id: String,
    activity_type: String,
    advertised_time_at_location: String,
    advestised_train_indent: String,
    canceled: boolean,
    estimated_time_at_location: String,
    from_location: Array<Location>,
    to_location: Array<Location>,
}

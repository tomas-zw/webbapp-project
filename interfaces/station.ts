export default interface Station {
    advertised_location_name: String,
    geometry: {
        wgs84: String,
    }
    location_signature: String,
    platform_line: Array<String>,
}

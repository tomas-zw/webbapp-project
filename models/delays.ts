import config from "../config/config.json";
import Delay from "../interfaces/delay";
import Station from "../interfaces/station";

const trains = {
    getDelays: async function getDelays(): Promise<Delay[]> {
        const response = await fetch
            (`${config.base_url}/delayed`);
        const result = await response.json();

        return result.data;
    },
    getStations: async function getStations(): Promise<Station[]> {
        const response = await fetch
            (`${config.base_url}/stations`);
        const result = await response.json();

        return result.data;
    },
}

export default trains;

import { StyleSheet } from "react-native";

export const container = {
    flex: 1,
};

export const base = {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
};

export const map = {
    ...StyleSheet.absoluteFillObject,
};

export const mapContainer = {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
};

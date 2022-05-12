import { StyleSheet } from "react-native";

export const container = {
    flex: 1,
};

export const dark = {
    flex: 1,
    backgroundColor: "#202020",
}

export const base = {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: "#202020",
};

export const map = {
    ...StyleSheet.absoluteFillObject,
};

export const mapContainer = {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    margin: 10,
    borderWidth: 1,
    borderColor: "white",
};

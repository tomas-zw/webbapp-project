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

export const imgBackgroundContainer = {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
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

export const buttonContainer = {
    elevation: 8,
    backgroundColor: "gray",
    borderRadius: 10,
    borderColor: "white",
    width: 200,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 30,
    margin: 20,
}

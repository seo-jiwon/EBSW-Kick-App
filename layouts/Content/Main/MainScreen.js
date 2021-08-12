import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from 'react-native-maps';



class MainScreen extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 35.91393,
                    longitude: 128.80278,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker 
                    coordinate={{ 
                        latitude: 35.91393,
                        longitude: 128.80278, }}

                />
            </MapView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#f9e6e9",
    },
    
    
})

export default MainScreen;
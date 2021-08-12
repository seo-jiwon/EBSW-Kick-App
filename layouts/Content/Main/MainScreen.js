import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from 'react-native-maps';



class MainScreen extends Component {
    constructor({ props }) {
        super(props);

        this.state = {
            show: true,
        }
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
                        longitude: 128.80278,
                    }}

                />
                <Modal
                    offset={this.state.offset}
                    visible={this.state.show}
                    transparent={true}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                    현재 운행중인 정보 보기
                            </Text>
                        </View>
                    </View>
                </Modal>
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
    centeredView: {
        flex: 1,
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'pink',
        borderRadius: 40,
        width: '80%',
        height: '6%',
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },

})

export default MainScreen;
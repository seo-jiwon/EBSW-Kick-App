//import React, { Component } from "react";
//import { StyleSheet, View, Text, TextInput } from "react-native";
//import { TouchableOpacity } from "react-native-gesture-handler";
//import { Camera } from 'expo-camera';

//import React, { Component, useState, useEffect } from 'react';
//import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
//import { Camera } from 'expo-camera';

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { FontAwesome, Ionicons, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

/*
constructor({ props }) {
        super(props);
    }
    */

export default class LicenseScan extends React.Component {
    

    state = {
        hasPermission: null,
        cameraType: Camera.Constants.Type.back,
    }
    async componentDidMount() {
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        // Camera roll Permission 
        if (Platform.OS === 'ios') {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
        // Camera Permission
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasPermission: status === 'granted' });
    }

    handleCameraType = () => {
        const { cameraType } = this.state

        this.setState({
            cameraType:
                cameraType === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
        })
    }

    takePicture = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();

        }
    }
    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });
    }

    render() {
        const { hasPermission } = this.state
        if (hasPermission === null) {
            return <View />;
        } else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.cameraType} ref={ref => { this.camera = ref }}>
                        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 30 }}>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent'
                                }}
                                onPress={() => this.pickImage()}>
                                <Foundation
                                    name="photo"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}
                                onPress={() => this.takePicture()}
                            >
                                <FontAwesome
                                    name="camera"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                    backgroundColor: 'transparent',
                                }}
                                onPress={() => this.handleCameraType()}
                            >
                                <MaterialCommunityIcons
                                    name="camera-switch"
                                    style={{ color: "#fff", fontSize: 40 }}
                                />
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

/*
<View style={styles.container}>
                <View style={styles.logoView}>
                    <Text style={styles.logoText}>면허증 스캔</Text>
                </View>
                <View style={styles.bodyView}>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.prevBtn}
                        onPress={() => this.props.navigation.navigate('Signup')}
                    >
                        <Text style={styles.prevText}>이전</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextBtn}>
                        <Text style={styles.nextText}>다음</Text>
                    </TouchableOpacity>
                </View>
            </View>
            */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#f9e6e9"
    },
    logoView: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    },
    logoText: {
        fontSize: 30
    },
    bodyView: {
        flex: 3,
    },
    btnView: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: "center"
    },
    prevBtn: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "pink",
        width: 120,
        height: '30%',
        backgroundColor: "pink",
        marginRight: 60,
        borderRadius: 40
    },
    prevText: {
        fontSize: 20,
        color: 'white'
    },
    nextBtn: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "pink",
        width: 120,
        height: '30%',
        backgroundColor: "pink",
        borderRadius: 40,
    },
    nextText: {
        fontSize: 20,
        color: 'white'
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
})
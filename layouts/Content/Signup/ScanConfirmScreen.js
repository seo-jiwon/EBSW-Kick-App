import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";


class ScanConfirm extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyView}>
                    <View style={styles.cardView}>

                    </View>
                    <View style={styles.nameView}>
                        <Text style={styles.nameText}>
                            이름
                        </Text>
                    </View>
                    <View style={styles.birthView}>
                        <Text style={styles.birthText}>
                            생년월일
                        </Text>
                    </View>
                    <View style={styles.cardNumView}>
                        <Text style={styles.cardNumText}>
                            운전면허번호{"\n"}{"\t"}
                            00{"\t"}-{"\t"}00{"\t"}-{"\t"}00000{"\t"}-{"\t"}00
                        </Text>
                    </View>
                    <View style={styles.identifyView}>
                        <Text style={styles.identifyText}>
                            식별번호
                        </Text>
                    </View>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.prevBtn}
                        onPress={() => this.props.navigation.navigate('LicenseScan')}
                    >
                        <Text style={styles.prevText}>이전</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextBtn}>
                        <Text style={styles.nextText}>완료</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#f9e6e9",
        paddingLeft: 40,
        paddingRight: 40
    },
    bodyView: {
        flex: 4,
    },
    cardView: {
        flex: 4,
        backgroundColor: "white"
    },
    nameView: {
        flex: 1,
    },
    birthView: {
        flex: 1,
    },
    cardNumView: {
        flex: 1
    },
    identifyView: {
        flex: 1,
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
    },
    prevBtn: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "pink",
        width: 120,
        height: '30%',
        backgroundColor: "pink",
        marginRight: 60,
        borderRadius: 40,
        borderColor: "pink"
    },
    prevText: {
        fontSize: 20,
        color: 'white'
    },
    nextBtn: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "pink",
        width: 120,
        height: '30%',
        backgroundColor: "pink",
        borderRadius: 40,
        borderColor: "pink"
    },
    nextText: {
        fontSize: 20,
        color: 'white',
    },
    nameText: {
        fontSize: 16
    },
    birthText: {
        fontSize: 16
    },
    cardNumText: {
        fontSize: 16
    },
    identifyText: {
        fontSize: 16
    }
})

export default ScanConfirm;

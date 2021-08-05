import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

class RunInfo extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
          <View style={styles.bodyView}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>
                            운행 구역
                        </Text>
                        <Text style={styles.titleText}>
                            일련 번호
                        </Text>
                        <Text style={styles.titleText}>
                            탑승 시간
                        </Text>
                        <Text style={styles.titleText}>
                            운행 시간
                        </Text>
                        <Text style={styles.titleText}>
                            운행 요금
                        </Text>
                    </View>
                    <View style={styles.contentView}>
                        <Text style={styles.placeText}>
                            대구가톨릭대학교
                        </Text>
                        <Text style={styles.numText}>
                            #100000
                        </Text>
                        <Text style={styles.startText}>
                            14:10
                        </Text>
                        <Text style={styles.timeText}>
                            15 (분)
                        </Text>
                        <Text style={styles.priceText}>
                            2500 (원)
                        </Text>
                    </View>
                </View>
                <View style={styles.alertView}>
                    <Text style={styles.alertText}>
                    • 운행 종료를 위해서는 안전모를 킥보드에 거치해야 합니다.
                    </Text>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.confirmBtn}>
                        <Text style={styles.confirmText}>
                            운행 종료
                        </Text>
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
        padding: 40
    },
    bodyView: {
        flex:1.5,
        flexDirection: 'row',
    },
    alertView: {
        flex:2.5,
        paddingTop: '10%'
    },
    btnView: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleView: {
        flex:1,
    },
    contentView: {
        flex: 3,
        marginLeft: '10%'
    },
    titleText: {
        fontSize: 18,
        marginBottom: '30%'
    },
    placeText: {
        fontSize: 18,
        marginBottom: '11%',
    },
    numText: {
        fontSize: 18,
        marginBottom: '11%'
    },
    startText: {
        fontSize: 18,
        marginBottom: '10%'
    },
    timeText: {
        fontSize: 18,
        marginBottom: '10%'
    },
    priceText: {
        fontSize: 18,
    },
    alertText: {
        alignItems: 'center'
    },
    confirmBtn: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "pink",
        borderColor: "pink",
        width: "80%",
        height: '40%',
        alignItems: "center",
        justifyContent: "center"
    },
    confirmText: {
        fontSize: 23,
        color: "white"
    },
    
})

export default RunInfo;
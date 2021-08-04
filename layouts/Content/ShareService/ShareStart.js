import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

class ShareStart extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.stopBtnView}>
                    <TouchableOpacity style={styles.stopStyle}>
                        <Text style={styles.stopText}>
                            일시정지
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bodyView}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>
                            구역 선택
                        </Text>
                        <Text style={styles.titleText}>
                            시작 날짜
                        </Text>
                        <Text style={styles.titleText}>
                            종료 날짜
                        </Text>
                        <Text style={styles.titleText}>
                            시작 시작
                        </Text>
                        <Text style={styles.titleText}>
                            종료 시간
                        </Text>
                    </View>
                    <View style={styles.chooseView}>

                    </View>
                </View>
                <View style={styles.noticeView}>

                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.confirmBtn}>
                        <Text style={styles.confirmText}>
                            쉐어링 서비스 시작
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
    },
    stopBtnView: {
        flex: 0.5,
        flexDirection: 'row-reverse',
    },
    bodyView: {
        flex:2.5,
        flexDirection: 'row'
    },
    noticeView: {
        flex:1
    },
    btnView: {
        flex:1,
        alignItems: "center",
    },
    titleView: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    chooseView: {
        flex: 3
    },
    stopStyle: {
        borderWidth: 1,
        borderRadius: 40,
        width: '20%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5%'
    },
    stopText: {
        fontSize: 16
    },
    titleText: {
        fontSize: 18,
        marginBottom: '20%'
    },
    confirmBtn: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "pink",
        borderColor: "pink",
        width: "65%",
        height: '40%',
        alignItems: "center",
        justifyContent: "center"
    },
    confirmText: {
        fontSize: 23,
        color: "white"
    }
})

export default ShareStart;
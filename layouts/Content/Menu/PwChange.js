import React, {Component} from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from "react-native";

class PwChange extends Component{
    constructor({props}) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyView}>
                    <Text style={styles.pwText}>
                        현재 비밀번호
                    </Text>
                    <TextInput style={styles.pwTextInput}
                        placeholder="현재 비밀번호 입력"
                    />
                    <Text style={styles.newPwText}>
                        새 비밀번호
                    </Text>
                    <TextInput style={styles.newPwTextInput}
                        placeholder="새 비밀번호 입력"
                    />
                    <Text style={styles.rePwText}>
                        비밀번호 재입력
                    </Text>
                    <TextInput style={styles.rePwTextInput}
                        placeholder="비밀번호 재입력"
                    />
                    <Text style={styles.noticeText}>• 특수문자 포함 12자리</Text>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.confirmBtn}>
                        <Text style={styles.confirmText}> 
                            확인
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
        padding: 40,
        backgroundColor: "#f9e6e9"
    },
    bodyView: {
        flex: 4,
    },
    pwText: {
        fontSize: 16
    },
    pwTextInput: {
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        color: 'grey',
        marginBottom: 25
    },
    newPwText: {
        fontSize: 16
    },
    newPwTextInput: {
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        color: 'grey',
        marginBottom: 25
    },
    rePwText: {
        fontSize: 16
    },
    rePwTextInput: {
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        color: 'grey',
        marginBottom: 25
    },
    noticeText: {
        fontSize: 13
    },
    btnView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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
    }
})

export default PwChange;
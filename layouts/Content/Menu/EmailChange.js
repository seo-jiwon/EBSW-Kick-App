import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";

class EmailChange extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyView}>
                    <Text style={styles.newEmailText}>
                        변경할 이메일
                        </Text>
                    <View style={styles.newEmailView}>

                        <TextInput style={styles.newEmailTextInput}
                            placeholder="이메일 입력"
                        >
                        </TextInput>
                        <TouchableOpacity style={styles.emailBtn}>
                            <Text style={styles.emailBtnText}>
                                인증번호 전송
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.certificationText}>
                        인증번호
                        </Text>
                    <View style={styles.certificationView}>

                        <TextInput style={styles.certificationTextInput}
                            placeholder="인증번호 입력"
                        >
                        </TextInput>
                        <TouchableOpacity style={styles.certificationBtn}>
                            <Text>
                                확인
                            </Text>
                        </TouchableOpacity>
                    </View>
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
    newEmailView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25
    },
    newEmailText: {
        fontSize: 16,
        marginBottom: 5
    },
    newEmailTextInput: {
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        color: 'grey',
        height: 20,
        width: "65%"
    },
    emailBtn: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 40,
        height: 30,
        backgroundColor: "white",
        borderColor: "pink",
        width: 100,
        marginTop: -7
    },
    emailBtnText: {
        //폰트 바꾸는 경우 추가
    },
    certificationView: {
        flex: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    certificationText: {
        fontSize: 16,
        marginBottom: 5
    },
    certificationTextInput: {
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        color: 'grey',
        height: 20,
        width: "65%"
    },
    certificationBtn: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 40,
        height: 30,
        backgroundColor: "white",
        borderColor: "pink",
        width: 100,
        marginTop: -7
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

export default EmailChange;
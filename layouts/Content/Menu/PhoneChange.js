import React, {Component} from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";

class PhoneChange extends Component{
    constructor({props}) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyView}>
                    <Text style={styles.newPhoneText}>
                        변경할 전화번호
                    </Text>
                    <TextInput style={styles.newPhoneTextInput}
                        placeholder="전화번호 입력"
                    >
                    </TextInput>
                    <Text style={styles.noticeText}>
                    • 010-0000-0000 형식으로 입력
                    </Text>
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
    newPhoneText: {
        fontSize: 16,
        marginBottom: 5
    },
    newPhoneTextInput: {
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

export default PhoneChange;
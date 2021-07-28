import React, {Component} from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";

class AliasChange extends Component{
    constructor({props}) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyView}>
                    <Text style={styles.newAliasText}>
                        새 닉네임
                    </Text>
                    <TextInput style={styles.newAliasTextInput}
                        placeholder="닉네임 입력"
                    >
                    </TextInput>
                    <Text style={styles.noticeText}>
                    • 2-10자리 입력 {"\n"}• 특수문자 사용불가
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
    newAliasText: {
        fontSize: 16,
        marginBottom: 5
    },
    newAliasTextInput: {
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

export default AliasChange;
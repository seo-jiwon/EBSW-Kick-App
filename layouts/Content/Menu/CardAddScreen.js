import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";

class CardAdd extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyView}>
                    <Text style={styles.titleText}>
                        카드번호
                    </Text>
                    <TextInput style={styles.cardNumTextInput}
                        placeholder='카드번호 입력'
                    >
                    </TextInput>
                    <View style={styles.rowView}>
                        <Text style={styles.titleText}>
                            유효기간
                    </Text>
                        <Text style={styles.pwText}>
                            비밀번호 앞 두 자리
                    </Text>

                    </View>
                    <View style={styles.rowTextInputView}>
                        <TextInput style={styles.dateTextInput}
                            placeholder='YYYY-MM'
                        >
                        </TextInput>
                        <TextInput style={styles.pwTextInput}
                            placeholder='**'>

                        </TextInput>
                    </View>
                    <View style={styles.birthView}>
                        <Text style={styles.titleText}>
                            생년월일
                    </Text>
                        <TextInput style={styles.birthTextInput}
                            placeholder='YYMMDD'
                        >
                        </TextInput>
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
        backgroundColor: "#f9e6e9",
        padding: 40
    },
    bodyView: {
        flex: 4,
    },
    btnView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    cardNumTextInput: {
        borderBottomWidth: 1,
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '5%'
    },
    rowTextInputView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateTextInput: {
        borderBottomWidth: 1,
        width: '40%'
    },
    pwTextInput: {
        borderBottomWidth: 1,
        width: '47%',
    },
    pwText: {
        marginRight: '5%',
        fontSize: 17
    },
    birthView: {
        paddingTop: '5%',
    },
    birthTextInput: {
        borderBottomWidth: 1,
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
    titleText: {
        fontSize: 17
    }
})

export default CardAdd;
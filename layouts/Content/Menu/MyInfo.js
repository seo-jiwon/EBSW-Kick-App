import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";

class MyInfo extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyView}>
                    <View style={styles.titleView}>
                        <View style={styles.titleBorderView}>
                            <Text style={styles.titleName}>
                                이름
                        </Text>
                        </View>

                        <View style={styles.titleBorderView}>
                            <Text style={styles.titleName}>
                                아이디
                        </Text>
                        </View>

                        <View style={styles.titleBorderView}>
                            <Text style={styles.titleName}>
                                비밀번호
                        </Text>
                        </View>

                        <View style={styles.titleBorderView}>
                            <Text style={styles.titleName}>
                                닉네임
                        </Text>
                        </View>

                        <View style={styles.titleBorderView}>
                            <Text style={styles.titleName}>
                                전화번호
                        </Text>
                        </View>

                        <View style={styles.titleBorderView}>
                            <Text style={styles.titleName}>
                                이메일
                        </Text>
                        </View>

                        <View style={styles.titleBorderView}>
                            <Text style={styles.titleName}>
                                카드정보
                        </Text>
                        </View>

                    </View>
                    <View style={styles.contentView}>
                        <Text style={styles.nameText}>
                            마삐삐
                        </Text>
                        <Text style={styles.idText}>
                            rkskekfkakqktk00
                        </Text>
                        <Text style={styles.pwText}>
                            **********
                        </Text>
                        <Text style={styles.aliasText}>
                            애플망고
                        </Text>
                        <Text style={styles.phoneText}>
                            010-0000-9999
                        </Text>
                        <Text style={styles.emailText}>
                            rkskekfkak00@gmail.com
                        </Text>
                        <Text style={styles.cardText}>
                            신한 0000
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.pwBtn}>
                            <Text>
                                변경
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.aliasBtn}>
                            <Text>
                                변경
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.phoneBtn}>
                            <Text>
                                변경
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.emailBtn}>
                            <Text>
                                변경
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardBtn}>
                            <Text>
                                변경
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.bottommView}>
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
        backgroundColor: "#f9e6e9",
        padding: 40
    },
    bodyView: {
        flex: 4,
        flexDirection: "row"
    },
    titleView: {
        flex: 1,
    },
    contentView: {
        flex: 3,
        alignItems: "center",
    },
    buttonView: {
        flex: 1,
        alignItems: "center",
    },
    bottommView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    titleName: {
        fontSize: 16,
        marginBottom: 27,
        color: "#969191"
    },
    nameText: {
        fontSize: 16,
        marginBottom: 25,
    },
    idText: {
        fontSize: 16,
        marginBottom: 25,
    },
    pwText: {
        fontSize: 16,
        marginBottom: 25,
    },
    aliasText: {
        fontSize: 16,
        marginBottom: 25,
    },
    phoneText: {
        fontSize: 16,
        marginBottom: 25,
    },
    emailText: {
        fontSize: 16,
        marginBottom: 25,
    },
    cardText: {
        fontSize: 16,
        marginBottom: 25,
    },
    pwBtn: {
        marginTop: 75,
        borderWidth: 2,
        borderRadius: 40,
        borderColor: "pink",
        backgroundColor: "white",
        width: 50,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
    },
    aliasBtn: {
        borderWidth: 2,
        borderRadius: 40,
        borderColor: "pink",
        backgroundColor: "white",
        width: 50,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
    },
    phoneBtn: {
        borderWidth: 2,
        borderRadius: 40,
        borderColor: "pink",
        backgroundColor: "white",
        width: 50,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
    },
    emailBtn: {
        borderWidth: 2,
        borderRadius: 40,
        borderColor: "pink",
        backgroundColor: "white",
        width: 50,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
    },
    cardBtn: {
        borderWidth: 2,
        borderRadius: 40,
        borderColor: "pink",
        backgroundColor: "white",
        width: 50,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15
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

export default MyInfo;

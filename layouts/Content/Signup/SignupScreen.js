import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Signup extends Component {
    constructor({ props }) {
        super(props);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoView}>
                    <Text style={styles.logoText}>회원가입</Text>
                </View>
                <View style={styles.bodyView}>
                    <TextInput style={styles.nameInput}
                        placeholder='이름'
                    />
                    <TextInput style={styles.aliasInput}
                        placeholder='닉네임'
                    />
                    <TextInput style={styles.birthInput}
                        placeholder='생년월일'
                    />
                    <TextInput style={styles.phoneInput}
                        placeholder='전화번호'
                    />
                    <View style={styles.emailView}>
                        <TextInput style={styles.emailInput}
                            placeholder='이메일'
                        >
                        </TextInput>

                        <TouchableOpacity style={styles.emailBtn}
                        >
                            <Text>인증번호 전송</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.certifiView}>
                        <TextInput style={styles.certifinumInput}
                            placeholder='인증번호'
                        >
                        </TextInput>
                        <TouchableOpacity style={styles.certifinumBtn}>
                            <Text>확인</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.prevBtn}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={styles.prevText}>이전</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextBtn}
                        onPress={() => this.props.navigation.push('LicenseScan')
                        }>
                        <Text style={styles.nextText}>다음</Text>
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
        backgroundColor: "#f9e6e9"
    },
    logoView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logoText: {
        fontSize: 30
    },
    bodyView: {
        flex: 3,
        //backgroundColor: 'white',
        paddingHorizontal: 40
    },
    nameInput: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height: 35,
        textAlign: "left",
        marginBottom: 20,
    },
    aliasInput: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height: 35,
        textAlign: "left",
        marginBottom: 20
    },
    birthInput: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height: 35,
        textAlign: "left",
        marginBottom: 20
    },
    phoneInput: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height: 35,
        textAlign: "left",
        marginBottom: 20
    },
    emailView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    emailInput: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height: 35,
        textAlign: "left",
        marginBottom: 20,
        width: '70%'
    },
    emailBtn: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 40,
        height: 35,
        backgroundColor: "white",
        borderColor: "pink",
        width: 100,
    },
    certifiView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    certifinumInput: {
        borderWidth: 1,
        borderBottomWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        height: 35,
        textAlign: "left",
        marginBottom: 20,
        width: '70%'
    },
    certifinumBtn: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 40,
        height: 35,
        backgroundColor: "white",
        borderColor: "pink",
        width: 100,
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center"
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
        color: 'white'
    },
})

export default Signup;
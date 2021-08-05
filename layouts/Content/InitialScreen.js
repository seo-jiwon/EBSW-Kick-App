import React, {Component} from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

class Initial extends Component{
    constructor({props}) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#fdf7d2', '#fbdfe6']}
                    style={styles.logoGradient}
                >
                    <View style={styles.logoView}>
                        <Image
                            style={{ height: '100%', width: '100%', resizeMode: 'cover' }}
                            source={require('./chip.png')} />
                    </View>

                    <View style={styles.signView}>
                        <TouchableOpacity style={styles.signinBtn}
                            onPress={() => this.props.navigation.push('Login')}
                        >
                            <Text style={styles.signinText}>로그인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signupBtn}
                            onPress={() => this.props.navigation.push('Signup')}
                        >
                            <Text style={styles.signupText}>회원가입</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.push('RidingInfo')}
                    >
                        <Text>내정보</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end"
    },
    logoView: {
        flex:3,
    },
    logoGradient: {
        flex:1
    },
    signView: {
        flex:1,
        alignItems: "flex-start",
        flexDirection: "row",
        justifyContent: "center",
    },
    signinBtn: {
        borderWidth:1,
        height:45,
        width: "35%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        backgroundColor: "pink",
        borderColor: "pink",
        marginRight: 40,
    },
    signupBtn: {
        borderWidth:1,
        height:45,
        width: "35%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        backgroundColor: "pink",
        borderColor: "pink"
    },
    signinText: {
        color: "white",
        fontSize: 20
    },
    signupText: {
        color: "white",
        fontSize: 20
    }
})

export default Initial;

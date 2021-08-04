import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

class ShareMain extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.bodyView}>
                    <TouchableOpacity style={styles.btnStyle}
                        onPress={() => this.props.navigation.push('ShareStart')}
                    >
                        <Text style={styles.btnText}>
                            쉐어링 서비스 시작
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle}
                        onPress={() => this.props.navigation.push('ShareMain')}
                    >
                        <Text style={styles.btnText}>
                            쉐어링 서비스 내역
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyle}
                        onPress={() => this.props.navigation.push('ShareMain')}
                    >
                        <Text style={styles.btnText}>
                            쉐어링 서비스 등록
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
        backgroundColor: "#f9e6e9"
    },
    bodyView: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnStyle: {
        borderWidth: 1,
        borderColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        height: '8%',
        marginBottom: '10%',
        backgroundColor: 'white'
    },
    btnText: {
        fontSize: 20,
    },
})

export default ShareMain;
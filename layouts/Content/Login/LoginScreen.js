import React, {Component} from "react";
import { StyleSheet, View, Text, TextInput, Button, Touchable} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// class Login extends Component{
//     constructor(props) {
//         super(props);
//         this.state = {viewText : ''};
//     }

//     componentDidMount() {
//         this.setState({
//             viewText: ''
//         });
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <View style={styles.logoGradient} >
//                     <View style={styles.headerView}>
//                         <Text style={styles.headerText}>로그인</Text>
//                     </View>
//                     <View style={styles.bodyContainer}>
//                         <TextInput style={styles.idInput}
//                             placeholder="아이디"
//                         />
//                         <TextInput style={styles.pwInput}
//                             placeholder="비밀번호"
//                         />
//                         <TouchableOpacity style={styles.findStyle}
//                             onPress={() => this.props.navigation.push('IdFind')}
//                         >
//                             <Text style={styles.findText}>아이디/비밀번호 찾기</Text>
//                         </TouchableOpacity>
//                         <TouchableOpacity style={styles.loginBtn}
//                         onPress={() => this.props.navigation.popToTop('MainScreen')}>
//                             <Text style={styles.loginText}>로그인</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

function Login({ navigation }) {
    return (
            <View style={styles.container}>
                <View style={styles.logoGradient} >
                    <View style={styles.headerView}>
                        <Text style={styles.headerText}>로그인</Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        <TextInput style={styles.idInput}
                            placeholder="아이디"
                        />
                        <TextInput style={styles.pwInput}
                            placeholder="비밀번호"
                        />
                        <TouchableOpacity style={styles.findStyle}
                            onPress={() => navigation.navigate('IdFind')}
                        >
                            <Text style={styles.findText}>아이디/비밀번호 찾기</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginBtn}
                        onPress={() => navigation.navigate('MainScreen')}>
                            <Text style={styles.loginText}>로그인</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.loginBtn}
                        onPress={() => navigation.navigate('Signup')}>
                            <Text style={styles.loginText}>회원가입</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end"
    },
    logoGradient: {
        flex:1,
        backgroundColor: "#f9e6e9"
    },
    headerView: {
        flex: 1,
        //backgroundColor: 'yellow',
        justifyContent: "flex-end",
        alignItems: "center"
    },
    headerText: {
        //backgroundColor: 'gray',
        fontSize: 30
    },
    bodyContainer: {
        flex: 4,
        //backgroundColor: 'pink',
        paddingHorizontal: 50
    },
    idInput: {
        marginTop: 20,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 5,
        borderWidth: 1
    },
    pwInput: {
        marginTop: 20,
        marginBottom: 40,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 5
    },
    findStyle: {
        alignItems: "flex-end"
    },
    findText: {
        //color: 'red'
    },
    loginBtn: {
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 40,
        height: 45,
        backgroundColor: "pink",
        borderColor: "pink"
    },
    loginText: {
        color: 'white',
        fontSize: 18
    },
})

export default Login;
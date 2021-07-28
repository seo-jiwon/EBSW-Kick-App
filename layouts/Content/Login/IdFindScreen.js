import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

class IdFindScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabHeader}>
          <TouchableOpacity style={styles.idLogoBtn}
            disabled="false"
          >
            <Text style={styles.idLogoText}>아이디 찾기</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.pwLogoBtn}
            onPress={() => this.props.navigation.navigate('PwFind')}
          >
            <Text style={styles.pwLogoText}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <TextInput style={styles.nameInput}
            placeholder='이름'
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

        <View style={styles.findBtnView}>
          <TouchableOpacity style={styles.findBtn}>
            <Text style={styles.findText}>아이디 찾기</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default IdFindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f9e6e9"
  },
  tabHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  body: {
    flex: 8,
    paddingHorizontal: 40,
    paddingTop: "10%"
  },
  idLogoBtn: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  idLogoText: {
    fontSize: 18
  },
  pwLogoBtn: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderColor: 'grey'
  },
  pwLogoText: {
    fontSize: 18,
    color: 'grey',
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
  }, emailBtn: {
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
  findBtnView: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center"
  },
  findBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "pink",
    width: 200,
    height: '40%',
    backgroundColor: "pink",
    borderRadius: 40,
    borderColor: "pink"
  },
  findText: {
    fontSize: 20,
    color: "white"
  }
})
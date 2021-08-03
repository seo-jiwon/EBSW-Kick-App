//import React from 'react';
import Initial from './layouts/Content/InitialScreen.js';
import Login from './layouts/Content/Login/LoginScreen.js';
import Signup from './layouts/Content/Signup/SignupScreen.js';
import LicenseScan from './layouts/Content/Signup/LicenseScreen.js';
import IdFind from './layouts/Content/Login/IdFindScreen.js';
import PwFind from './layouts/Content/Login/PwFindScreen.js';
import MyInfo from './layouts/Content/Menu/MyInfo.js';
import PwChange from './layouts/Content/Menu/PwChange.js';
import AliasChange from './layouts/Content/Menu/AliasChange.js';
import PhoneChange from './layouts/Content/Menu/PhoneChange';
import EmailChange from './layouts/Content/Menu/EmailChange';
import ScanConfirm from './layouts/Content/Signup/ScanConfirmScreen';
import CardInformation from './layouts/Content/Menu/CardInformation';

import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';



//import React, {Component} from 'react';
import FindScreen from "./router";
import { View, StyleSheet, StatusBar, TabBarIOS } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//사용할 페이지 메인파일에 등록

//다운받은 라이브러리를 불러와 초기화
const Stack = createStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {props => <Initial {...props} extraData={"HOME"} />}
          </Stack.Screen>

          <Stack.Screen name="Login" options={{
            title: '', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <Login {...props} extraData={"MAINPAGE"} />}
          </Stack.Screen>

          <Stack.Screen name="Signup" options={{
            title: '', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <Signup {...props} extraData={"SIGNUPPAGE"} />}
          </Stack.Screen>

          <Stack.Screen name="LicenseScan" options={{
            title: '', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "pink" }
          }}>{props => <LicenseScan {...props} extraData={"LICENSESCAN"} />}
          </Stack.Screen>

          <Stack.Screen name="IdFind" options={{
            title: '', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <IdFind {...props} extraData={"IDFIND"} />}
          </Stack.Screen>

          <Stack.Screen name="PwFind" options={{
            title: '', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <PwFind {...props} extraData={"PWFIND"} />}
          </Stack.Screen>

          <Stack.Screen name="MyInfo" options={{
            title: '내 정보', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <MyInfo {...props} extraData={"MYINFO"} />}
          </Stack.Screen>

          <Stack.Screen name="PwChange" options={{
            title: '비밀번호 변경', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <PwChange {...props} extraData={"PWCHANGE"} />}
          </Stack.Screen>

          <Stack.Screen name="AliasChange" options={{
            title: '닉네임 변경', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <AliasChange {...props} extraData={"ALIASCHANGE"} />}
          </Stack.Screen>

          <Stack.Screen name="PhoneChange" options={{
            title: '전화번호 변경', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <PhoneChange {...props} extraData={"PHONECHANGE"} />}
          </Stack.Screen>

          <Stack.Screen name="EmailChange" options={{
            title: '이메일 변경', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <EmailChange {...props} extraData={"EMAILCHANGE"} />}
          </Stack.Screen>

          <Stack.Screen name="ScanConfirm" options={{
            title: '', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <ScanConfirm {...props} extraData={"ScanConfirm"} />}
          </Stack.Screen>

          <Stack.Screen name="CardInformation" options={{
            title: '카드 정보', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <CardInformation {...props} extraData={"CardInformation"} />}
          </Stack.Screen>

        </Stack.Navigator>
        
      </NavigationContainer>
    </View>
  )
}

//export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
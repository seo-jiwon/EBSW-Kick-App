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
import CardAdd from './layouts/Content/Menu/CardAddScreen';
import ShareMain from './layouts/Content/ShareService/ShareMain';
import ShareStart from './layouts/Content/ShareService/ShareStart';
import ShareRiding from './layouts/Content/ShareService/ShareRiding';
import ShareRunInfo from './layouts/Content/ShareService/ShareRunInfo';
import RunEnd from './layouts/Content/BasicService/RunEnd';
import RunInfo from './layouts/Content/BasicService/RunInfo';
import RidingInfo from './layouts/Content/BasicService/RidingInfo';
import ShareHistory from './layouts/Content/ShareService/ShareHistory';
import ShareRegister from './layouts/Content/ShareService/ShareRegister';
import MainScreen from './layouts/Content/Main/MainScreen';

import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react';



//import React, {Component} from 'react';
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
          }}>{props => <ScanConfirm {...props} extraData={"SCANCONFIRM"} />}
          </Stack.Screen>

          <Stack.Screen name="CardInformation" options={{
            title: '카드 정보', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <CardInformation {...props} extraData={"CARDINFORMATION"} />}
          </Stack.Screen>

          <Stack.Screen name="CardAdd" options={{
            title: '카드 추가', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <CardAdd {...props} extraData={"CARDADD"} />}
          </Stack.Screen>

          <Stack.Screen name="ShareMain" options={{
            title: '쉐어링 서비스', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <ShareMain {...props} extraData={"SHAREMAIN"} />}
          </Stack.Screen>

          <Stack.Screen name="ShareStart" options={{
            title: '쉐어링 서비스', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <ShareStart {...props} extraData={"SHARESTART"} />}
          </Stack.Screen>
          
          <Stack.Screen name="ShareRiding" options={{
            title: '탑승 정보', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <ShareRiding {...props} extraData={"SHARERIDING"} />}
          </Stack.Screen>

          <Stack.Screen name="ShareRunInfo" options={{
            title: '운행 정보', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <ShareRunInfo {...props} extraData={"SHARERUNINFO"} />}
          </Stack.Screen>

          <Stack.Screen name="ShareHistory" options={{
            title: '쉐어링 서비스 내역', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <ShareHistory {...props} extraData={"SHARERHISTORY"} />}
          </Stack.Screen>

          <Stack.Screen name="ShareRegister" options={{
            title: '쉐어링 서비스 등록', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <ShareRegister {...props} extraData={"SHAREREGISTER"} />}
          </Stack.Screen>

          <Stack.Screen name="RunInfo" options={{
            title: '운행 정보', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <RunInfo {...props} extraData={"RUNINFO"} />}
          </Stack.Screen>

          <Stack.Screen name="RunEnd" options={{
            title: '운행 종료', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <RunEnd {...props} extraData={"RUNEND"} />}
          </Stack.Screen>

          <Stack.Screen name="RidingInfo" options={{
            title: '탑승 정보', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <RidingInfo {...props} extraData={"RIDINGINFO"} />}
          </Stack.Screen>

          <Stack.Screen name="MainScreen" options={{
            title: '가까운 킥보드 찾기', headerBackTitleVisible: false,
            headerStyle: { backgroundColor: "#f9e6e9" }
          }}>{props => <MainScreen {...props} extraData={"MAINSCREEN"} />}
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
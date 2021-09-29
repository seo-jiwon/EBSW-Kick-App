import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Initial from './layouts/Content/InitialScreen';
import Login from './layouts/Content/Login/LoginScreen';
import Signup from './layouts/Content/Signup/SignupScreen';
import EmailSign from './layouts/Content/Signup/EmailScreen';
import PwSign from './layouts/Content/Signup/PwSignScreen';
import LicenseScan from './layouts/Content/Signup/LicenseScreen';
import IdFind from './layouts/Content/Login/IdFindScreen';
import PwFind from './layouts/Content/Login/PwFindScreen';
import ScanConfirm from './layouts/Content/Signup/ScanConfirmScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Initial" component={Initial} options={{ headerShown: false}} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} options={{title: '회원가입', headerBackTitleVisible: false }} />
            <Stack.Screen name="EmailSign" component={EmailSign} options={{title: '이메일 인증', headerBackTitleVisible: false, }} />
            <Stack.Screen name="PwSign" component={PwSign} options={{title: '비밀번호 입력', headerBackTitleVisible: false }} />
            <Stack.Screen name="LicenseScan" component={LicenseScan} options={{title: '운전면허 스캔', headerBackTitleVisible: false }} />
            <Stack.Screen name="IdFind" component={IdFind} options={{title: '아이디 찾기', headerBackTitleVisible: false }} />
            <Stack.Screen name="PwFind" component={PwFind} options={{title: '비밀번호 찾기', headerBackTitleVisible: false }} />

        </Stack.Navigator>
    );
}

export { StackNavigator };
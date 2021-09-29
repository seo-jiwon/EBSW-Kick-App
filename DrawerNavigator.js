import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";

import Login from './layouts/Content/Login/LoginScreen';
import Main from './layouts/Content/Main/MainScreen';
import Initial from './layouts/Content/InitialScreen';

import Sidebar from "./customDrawer";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="메인페이지" drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen name="로그인" component={Login} options={{drawerLabel: '로그인'}}/>
      <Drawer.Screen name="지도페이지" component={Main} options={{drawerLabel: '지도페이지'}}/>
      <Drawer.Screen name="메인페이지" component={StackNavigator} options={{drawerLabel: '메인페이지'}}/>

    </Drawer.Navigator>
  );
}


export default DrawerNavigator;
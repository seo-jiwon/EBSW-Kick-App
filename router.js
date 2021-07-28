import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import IdFind from './layouts/Content/Login/IdFindScreen.js';
import PwFind from './layouts/Content/Login/PwFindScreen.js';
import { View, Text, StyleSheet } from "react-native";
import React, { Component } from 'react';

const Tabs = createMaterialTopTabNavigator({
    IdFind: {
        screen: IdFind,
        navigationOptions: {
            tabBarLabel: ({ }) => (
                <View sttyle={styles.iconCOntainer}>
                    <Text style={{ color: "#fff" }}>IdFind</Text>
                </View>
            ),
        },
    },
    PwFind: {
        screen: PwFind,
        navigationOptions: {
            tabBarLabel: ({ }) => (
                <View sttyle={styles.iconCOntainer}>
                    <Text style={{ color: "#fff" }}>PwFind</Text>
                </View>
            ),
        },
    },
},
    {
        initialRouteName: "IdFind",
        lazyLoad: true,
        tabBarPosition: 'top',
        swipeEnabled: true,
        tabBarOptions: {
            style: {
                height: 70,
                backgroundColor: '#40404c',
                paddingBottom: 3,
                paddingTop: 3,
            },
            indicatorStyle: {
                backgroundColor: '#fff',
                elevation: 10,
            },
            activeTintColor: '#fff',
            inactiveTintColor: 'gray',
        }
    }
);

const FindScreen = createStackNavigator({
    Tabs: {
        screen: Tabs,
        navigationOptions: {
            title: 'My App',
            headerStyle: {
                backgroundColor: '#2b2b39'
            },
            headerTitleStyle: {
                color: '#fff',
            },
        }
    }
})

export default createAppContainer(FindScreen);

const styles = StyleSheet.create({
    iconCOntainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
});

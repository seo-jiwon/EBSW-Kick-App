import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';

function Sidebar({progress,...props}) {
    const traslateX = Animated.interpolate
    return (
    <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
    );
}

export default Sidebar;
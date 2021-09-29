import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import MapView from "react-native-maps";
import { PROVIDER_GOOGLE } from 'react-native-maps';
import Animated from "react-native-reanimated";
import Icon from 'react-native-vector-icons/Ionicons';
import Initial from '../InitialScreen';

import BottomSheet from 'reanimated-bottom-sheet';
import { DrawerNavigator } from "../../../DrawerNavigator";
import DropDownPicker from "react-native-dropdown-picker";
/*
<BottomSheet ref={ref => panelRef.current = ref}>
                        <Text style={{paddingVertical: 20}}>
                        Some random content
                        </Text>
                    </BottomSheet>
                    */


// class MainScreen extends Component {
//     constructor({ props }) {
//         super(props);

//         this.state = {
//             show: false,
//         }
//     }

//     bs = React.createRef();
//     fall = new Animated.Value(1);

//     renderContent = () => (
//         <View style={styles.panel}>
//             <View style={styles.inforIconView}>
//                 <TouchableOpacity>
//                     <Icon name="help-circle-outline" size={32}/>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Icon name="volume-medium-outline" size={32}/>
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.inforView}>
//                 <View style={styles.inforTitle}>
//                     <Text style={styles.inforTitleText}>
//                         킥보드와 나의 거리
//                     </Text>
//                     <Text style={styles.inforTitleText}>
//                         배터리
//                     </Text>
//                     <Text style={styles.inforTitleText}>
//                         일련 번호
//                     </Text>
//                 </View>
//                 <View style={styles.inforContent}>
//                     <Text style={styles.inforContentText}>
//                         18m
//                     </Text>
//                     <Text style={styles.inforContentText}>
//                         70%
//                     </Text>
//                     <Text style={styles.inforContentText}>
//                         #100000
//                     </Text>
//                 </View>
//             </View>
//             <View style={styles.inforBtnView}>
//                 <TouchableOpacity style={styles.inforBtnStyle}>
//                     <Text style={styles.inforBtnText}>이용 시작</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );

//     renderHeader = () => (
//         <View style={styles.header}>
//             <View style={styles.panelHeader}>
//                 <View style={styles.panelHandle}></View>
//             </View>
//         </View>
//     );

//     render() {
//         const { panelRef } = this.state;
//         return (
//             <View style={styles.container}>
//                 <BottomSheet
//                     ref={this.bs}
//                     snapPoints={[330, 0]}
//                     renderContent={this.renderContent}
//                     renderHeader={this.renderHeader}
//                     initialSnap={1}
//                     callbackNode={this.fall}
//                     enabledGestureInteraction={true}
//                 />
//                 <MapView
//                     style={{ flex: 1 }}
//                     initialRegion={{
//                         latitude: 35.91393,
//                         longitude: 128.80278,
//                         latitudeDelta: 0.001,
//                         longitudeDelta: 0.01,
//                     }}
//                 >
//                     <TouchableOpacity style={styles.iconStyle}>
//                         <Icon
//                             name="compass" size={40}
//                         />
//                     </TouchableOpacity>


//                     <MapView.Marker
//                         coordinate={{
//                             latitude: 35.91393,
//                             longitude: 128.80278,
//                         }}
//                         onPress={() => this.bs.current.snapTo(0)}
//                     />



//                 </MapView>

//             </View>

//         );
//     }
// }

function MainScreen({ navigation }) {
    bs = React.createRef();
    fall = new Animated.Value(1);

    renderContent = () => (
        <View style={styles.panel}>
            <View style={styles.inforIconView}>
                <TouchableOpacity>
                    <Icon name="help-circle-outline" size={32} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="volume-medium-outline" size={32} />
                </TouchableOpacity>
            </View>
            <View style={styles.inforView}>
                <View style={styles.inforTitle}>
                    <Text style={styles.inforTitleText}>
                        킥보드와 나의 거리
                    </Text>
                    <Text style={styles.inforTitleText}>
                        배터리
                    </Text>
                    <Text style={styles.inforTitleText}>
                        일련 번호
                    </Text>
                </View>
                <View style={styles.inforContent}>
                    <Text style={styles.inforContentText}>
                        18m
                    </Text>
                    <Text style={styles.inforContentText}>
                        70%
                    </Text>
                    <Text style={styles.inforContentText}>
                        #100000
                    </Text>
                </View>
            </View>
            <View style={styles.inforBtnView}>
                <TouchableOpacity style={styles.inforBtnStyle}>
                    <Text style={styles.inforBtnText}>이용 시작</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}></View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <BottomSheet
                ref={this.bs}
                snapPoints={[330, 0]}
                renderContent={this.renderContent}
                renderHeader={this.renderHeader}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={true}
            />
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 35.91393,
                    longitude: 128.80278,
                    latitudeDelta: 0.001,
                    longitudeDelta: 0.01,
                }}
            >
                <TouchableOpacity style={styles.iconStyle}>
                    <Icon
                        name="menu-outline" size={40} style={{marginLeft: '5%'}}
                        onPress={() => navigation.navigate('Initial')}
                    />
                    <Icon
                        name="compass" size={40} style={{marginRight: '5%'}}
                    />
                </TouchableOpacity>


                <MapView.Marker
                    coordinate={{
                        latitude: 35.91393,
                        longitude: 128.80278,
                    }}
                    onPress={() => this.bs.current.snapTo(0)}
                />



            </MapView>

        </View>

    );
}

/*
<View style={styles.noticeView}>
                        <Text style={styles.noticeText}>탑승하고자 하는 킥보드를 클릭해주세요.</Text>
                </View>
                */

const styles = StyleSheet.create({
    /* container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "#f9e6e9",
    },*/
    centeredView: {
        flex: 1,
        alignItems: 'center',
    },
    modalView: {
        backgroundColor: 'pink',
        borderRadius: 40,
        width: '80%',
        height: '6%',
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    iconStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '15%'
    },
    noticeView: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
    noticeText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        //padding: 20,
        backgroundColor: '#FFFFFF',
        //paddingTop: 20,
        height: '100%',
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 5,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    inforIconView: {
        flex: 0.5,
        flexDirection: 'row-reverse'
    },
    inforView: {
        flex: 1.5,
        flexDirection: 'row'
    },
    inforTitle: {
        flex: 3,
    },
    inforTitleText: {
        fontSize: 18,
        marginBottom: '10%',
        marginLeft: '10%',
        fontWeight: 'bold'
    },
    inforContent: {
        flex: 1,
        alignItems: 'center'
    },
    inforContentText: {
        fontSize: 16,
        marginBottom: '28%',
    },
    inforBtnView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inforBtnStyle: {
        borderRadius: 40,
        borderWidth: 1,
        backgroundColor: 'pink',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        marginBottom: '10%'
    },
    inforBtnText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
        backgroundColor: 'yellow'
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
        backgroundColor: 'pink'
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
})

export default MainScreen;
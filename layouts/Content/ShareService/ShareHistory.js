import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Modal } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';


class ShareHistory extends Component {
    constructor({ props }) {
        super(props);

        this.state = {
            startYearOpen: false,
            startMonthOpen: false,
            startDayOpen: false,
            endYearOpen: false,
            endMonthOpen: false,
            endDayOpen: false,
        };

    }

    render() {
        const{startYearOpen, startMonthOpen, startDayOpen, endYearOpen, endMonthOpen, endDayOpen} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.filterBtnView}>
                    <TouchableOpacity
                    onPress={() => this.setState({ show: value})}
                    value={this.state.show}
                    >
                        <MaterialIcons
                        name="filter-list" size={30}
                        >

                        </MaterialIcons>
                    </TouchableOpacity>
                    

                </View>
                <View style={styles.bodyView}>
                    <View style={styles.listView}>
                        <View style={styles.listStyle}>
                            <Text style={styles.placeText}>
                                대구가톨릭대학교
                            </Text>
                            <View style={styles.listRowView}>
                                <View style={styles.titleView}>
                                    <Text style={styles.titleText}>
                                        사용날짜
                                    </Text>
                                    <Text style={styles.titleText}>
                                        사용시간
                                    </Text>
                                </View>
                                <View style={styles.contentView}>
                                    <Text style={styles.contentText}>
                                        2021-08-10
                                    </Text>
                                    <Text style={styles.contentText}>
                                        15:00 - 15:30
                                    </Text>
                                </View>
                                <View style={styles.priceView}>
                                    <Text style={styles.priceText}>
                                        3000 (원)
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.filterView}
                        hide={this.state.show}
                    >
                        <View style={styles.filterStyle}>
                            <View style={styles.startDateView}>
                                <View style={styles.dropTitleView}>
                                    <Text style={styles.filterTitleText}>
                                        시작 날짜
                                    </Text>
                                </View>
                                <View style={styles.startDropView}>
                                <DropDownPicker
                                    containerStyle={{ width: '35%', }}
                                    placeholder='년도'
                                    items={[
                                        { label: '2021', value: '1' },
                                        { label: '2022', value: '2', selected: true }
                                    ]}
                                    open={startYearOpen}
                                    onOpen={() => { this.setState({ startYearOpen: true }) }}
                                    onClose={() => this.setState({ startYearOpen: false })}
                                />
                                <DropDownPicker
                                    containerStyle={{ width: '25%', }}
                                    placeholder='월'
                                    items={[
                                        { label: '08', value: '1' },
                                        { label: '09', value: '2' },
                                        { label: '10', value: '3' }
                                    ]}
                                    open={startMonthOpen}
                                    onOpen={() => { this.setState({ startMonthOpen: true }) }}
                                    onClose={() => this.setState({ startMonthOpen: false })}
                                />
                                <DropDownPicker
                                    containerStyle={{ width: '25%', }}
                                    placeholder='일'
                                    items={[
                                        { label: '08', value: '1' },
                                        { label: '09', value: '2' },
                                        { label: '10', value: '3' } 
                                    ]}
                                    open={startDayOpen}
                                    onOpen={() => { this.setState({ startDayOpen: true }) }}
                                    onClose={() => this.setState({ startDayOpen: false })}
                                />
                                </View>
                            </View>
                            <View style={styles.endDateView}>
                                <View style={styles.dropTitleView}>
                                    <Text style={styles.filterTitleText}>
                                        끝 날짜
                                    </Text>
                                </View>
                                <View style={styles.endDropView}>
                                <DropDownPicker
                                    containerStyle={{ width: '35%', }}
                                    placeholder='년도'
                                    items={[
                                        { label: '2021', value: '1' },
                                        { label: '2022', value: '2', selected: true }
                                    ]}
                                    open={endYearOpen}
                                    onOpen={() => { this.setState({ endYearOpen: true }) }}
                                    onClose={() => this.setState({ endYearOpen: false })}
                                    onChangeItem={item => {
                                        this.setState({
                                            selected: item.value
                                        });
                                    }}
                                />
                                <DropDownPicker
                                    containerStyle={{ width: '25%', }}
                                    placeholder='월'
                                    items={[
                                        { label: '08', value: '1' },
                                        { label: '09', value: '2' },
                                        { label: '10', value: '3' }
                                    ]}
                                    open={endMonthOpen}
                                    onOpen={() => { this.setState({ endMonthOpen: true }) }}
                                    onClose={() => this.setState({ endMonthOpen: false })}
                                />
                                <DropDownPicker
                                    containerStyle={{ width: '25%', }}
                                    placeholder='일'
                                    items={[
                                        { label: '08', value: '1' },
                                        { label: '09', value: '2' },
                                        { label: '10', value: '3' }
                                    ]}
                                    open={endDayOpen}
                                    onOpen={() => { this.setState({ endDayOpen: true }) }}
                                    onClose={() => this.setState({ endDayOpen: false })}
                                />
                                </View>
                                
                            </View>
                            <View style={styles.certiBtnView}>
                                <TouchableOpacity style={styles.certiBtnStyle}>
                                    <Text style={styles.certiBtnText}>
                                        적용하기
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.confirmBtn}>
                            <Text style={styles.confirmText}>
                                쉐어링 서비스 시작
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
        backgroundColor: "#f9e6e9",
    },
    filterBtnView: {
        flex:0.3,
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    bodyView: {
        flex:3.7,
        marginLeft: 40,
        marginRight: 40,
    },
    btnView: {
        flex:1,
        alignItems: 'center',
    },
    confirmBtn: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "pink",
        borderColor: "pink",
        width: "65%",
        height: '40%',
        alignItems: "center",
        justifyContent: "center"
    },
    confirmText: {
        fontSize: 23,
        color: "white"
    },
    listView: {
        flex:1,
        marginTop: '3%'
    },
    filterView: {
        flex:2,
    },
    listStyle: {
        flex: 0.5,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    placeText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    listRowView:  {
        flexDirection: 'row',
        flex: 1
    },
    titleView: {
        flex:1,
    },
    contentView: {
        flex:2,
    },
    priceView: {
        flex:1,
        flexDirection: 'column-reverse',
        alignItems: 'flex-end',
        marginBottom: '3%'
    },
    titleText: {
        fontSize: 15,
        marginTop: '20%',
        fontWeight: 'bold'
    },
    contentText: {
        fontSize: 15,
        marginTop: '9%'
    },
    priceText: {
        fontSize: 17
    },
    dropTitleView: {
        flex: 1,
    },
    startDateView: {
        flex: 2,
        borderBottomWidth: 1,
        borderColor: 'grey',
        zIndex: 10
    },
    startDropView: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    endDateView: {
        flex:2,
        borderBottomWidth: 1,
        borderColor: 'grey',
        zIndex: 5
    },
    endDropView: {
        flex:3,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    certiBtnView:{
        flex:1
    },
    filterStyle: {
        flex: 0.7,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'grey'
    },
    certiBtnStyle: {
        flex: 1,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    certiBtnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey'
    },
    filterTitleText: {
        fontSize: 18
    }
    
})

export default ShareHistory;
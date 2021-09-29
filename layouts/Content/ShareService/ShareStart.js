import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';


class ShareStart extends Component {
    constructor({ props }) {
        super(props);

        this.state = {
            placeOpen: false,
            startYearOpen: false,
            startMonthOpen: false,
            startDayOpen: false,
            endYearOpen: false,
            endMonthOpen: false,
            endDayOpen: false,
            startHourOpen: false,
            startMinOpen: false,
            endHourOpen: false,
            endMinOpen: false,
            value: null,
        }
        this.setValue = this.setValue.bind(this);
    }

    setOpen(open) {
        this.setState({
            open
        });
    }

    setValue(callback) {
        this.setState(state => ({
            value: callback(state.value)
        }));
    }

    setItems(callback) {
        this.setState(state => ({
            items: callback(state.items)
        }));
    }

    render() {
        const { placeOpen, startYearOpen, startMonthOpen, startDayOpen, endYearOpen, endMonthOpen, endDayOpen,
            startHourOpen, startMinOpen, endHourOpen, endMinOpen } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.stopBtnView}>
                    <TouchableOpacity style={styles.stopStyle}>
                        <Text style={styles.stopText}>
                            일시정지
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bodyView}>
                    <View style={styles.contentView}>
                        <View style={styles.titleView}>
                            <Text style={styles.titleText}>
                                구역 선택
                            </Text>
                            <Text style={styles.titleText}>
                                시작 날짜
                            </Text>
                            <Text style={styles.titleText}>
                                종료 날짜
                            </Text>
                            <Text style={styles.titleText}>
                                시작 시작
                            </Text>
                            <Text style={styles.titleText}>
                                종료 시간
                            </Text>
                        </View>
                        <View style={styles.dropView}>
                            <View style={styles.placeView}>
                                <DropDownPicker
                                    placeholder='장소 선택'
                                    items={[
                                        { label: '대구가톨릭대학교', value: '1' },
                                        { label: '대구대학교', value: '2', selected: true }
                                    ]}
                                    open={placeOpen}
                                    onOpen={() => { this.setState({ placeOpen: true }) }}
                                    onClose={() => this.setState({ placeOpen: false })}
                                    onChangeItem={item => {
                                        this.setState({
                                            selected: item.value
                                        });
                                    }}
                                />
                            </View>

                            <View style={styles.startDateView}>
                                <DropDownPicker
                                    containerStyle={{ width: '38%', }}
                                    placeholder='년도'
                                    items={[
                                        { label: '2021', value: '1' },
                                        { label: '2022', value: '2', selected: true }
                                    ]}
                                    open={startYearOpen}
                                    onOpen={() => { this.setState({ startYearOpen: true }) }}
                                    onClose={() => this.setState({ startYearOpen: false })}
                                    onChangeItem={item => {
                                        this.setState({
                                            selected: item.value
                                        });
                                    }}
                                />
                                <DropDownPicker
                                    containerStyle={{ width: '32%', }}
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
                                    containerStyle={{ width: '32%', }}
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

                            <View style={styles.endDateView}>
                                <DropDownPicker
                                    containerStyle={{ width: '38%', }}
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
                                    containerStyle={{ width: '32%', }}
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
                                    containerStyle={{ width: '32%', }}
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
                            <View style={styles.startTimeView}>
                                <DropDownPicker
                                    containerStyle={{ width: '32%', }}
                                    placeholder='시'
                                    items={[
                                        { label: '09', value: '9' },
                                        { label: '10', value: '10' },
                                        { label: '11', value: '11' },
                                        { label: '12', value: '12' },
                                        { label: '13', value: '13' },
                                        { label: '14', value: '14' },
                                        { label: '15', value: '15' },
                                        { label: '16', value: '16' },
                                        { label: '17', value: '17' },
                                        { label: '18', value: '18' },
                                        { label: '19', value: '19' },
                                        { label: '20', value: '20' },
                                        { label: '21', value: '21' },
                                        { label: '22', value: '22' },
                                    ]}
                                    open={startHourOpen}
                                    onOpen={() => { this.setState({ startHourOpen: true }) }}
                                    onClose={() => this.setState({ startHourOpen: false })}
                                />
                                <DropDownPicker
                                    containerStyle={{ width: '32%', }}
                                    placeholder='분'
                                    items={[
                                        { label: '08', value: '1' },
                                        { label: '09', value: '2' },
                                        { label: '10', value: '3' }
                                    ]}
                                    open={startMinOpen}
                                    onOpen={() => { this.setState({ startMinOpen: true }) }}
                                    onClose={() => this.setState({ startMinOpen: false })}
                                />
                            </View>

                            <View style={styles.endTimeView}>
                                <DropDownPicker
                                    containerStyle={{ width: '32%', }}
                                    placeholder='시'
                                    items={[
                                        { label: '09', value: '9' },
                                        { label: '10', value: '10' },
                                        { label: '11', value: '11' },
                                        { label: '12', value: '12' },
                                        { label: '13', value: '13' },
                                        { label: '14', value: '14' },
                                        { label: '15', value: '15' },
                                        { label: '16', value: '16' },
                                        { label: '17', value: '17' },
                                        { label: '18', value: '18' },
                                        { label: '19', value: '19' },
                                        { label: '20', value: '20' },
                                        { label: '21', value: '21' },
                                        { label: '22', value: '22' },
                                    ]}
                                    open={endHourOpen}
                                    onOpen={() => { this.setState({ endHourOpen: true }) }}
                                    onClose={() => this.setState({ endHourOpen: false })}
                                />
                                <DropDownPicker
                                    containerStyle={{ width: '32%', }}
                                    placeholder='분'
                                    items={[
                                        { label: '08', value: '1' },
                                        { label: '09', value: '2' },
                                        { label: '10', value: '3' }
                                    ]}
                                    open={endMinOpen}
                                    onOpen={() => { this.setState({ endMinOpen: true }) }}
                                    onClose={() => this.setState({ endMinOpen: false })}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.alertView}>
                        <View style={styles.alertTextView}>
                            <Text>
                                • 쉐어링 서비스를 시작할 구역을 정확히 선택해주세요.{"\n"}
                            • 충전할 때에는 상단의 일시정지 버튼을 눌러주세요.
                            </Text>

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
    stopBtnView: {
        flex: 0.3,
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    bodyView: {
        flex: 3.7,
        padding: 40,
    },
    contentView: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: 'grey'
    },
    alertView: {
        flex: 1.7,
        justifyContent: 'center',
    },
    alertTextView: {
        flex: 1,
        justifyContent: 'center'
    },
    btnView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    stopStyle: {
        borderWidth: 1,
        borderRadius: 40,
        width: '20%',
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5%'
    },
    stopText: {
        fontSize: 16
    },
    titleView: {
        flex: 1,
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        marginBottom: '20%',
        marginTop: '20%'
    },
    dropView: {
        flex: 3,
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
    dropDownStyle: {
        borderRadius: 0,
    },
    placeView: {
        flex: 1,
        zIndex: 5
    },
    startDateView: {
        flex: 1,
        flexDirection: 'row',
        zIndex: 4
    },
    endDateView: {
        flex: 1,
        flexDirection: 'row',
        zIndex: 3
    },
    startTimeView: {
        flex: 1,
        flexDirection: 'row',
        zIndex: 2,
    },
    endTimeView: {
        flex: 1,
        flexDirection: 'row',
        zIndex: 1
    }
})

export default ShareStart;
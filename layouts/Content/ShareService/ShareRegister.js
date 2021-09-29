import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, TouchableHighlightBase } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { ceil } from "react-native-reanimated";

class ShareRegister extends Component {

    constructor({ props }) {
        super(props);

        const handleSubmit = () => {
            
        }

        this.state = {
            yearOpen:  false,
            monthOpen: false,
            dayOpen: false,
            endYearOpen: false,
            endMonthOpen: false,
            endDayOpen: false,
            accountOpen: false
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
        const { yearOpen, monthOpen, dayOpen, endYearOpen, endMonthOpen, endDayOpen, accountOpen} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.modifyBtnView}>
                    <TouchableOpacity style={styles.modifyStyle}>
                        <Text style={styles.modifyText}>
                            수정
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bodyView}>
                    <View style={styles.contentView}>
                        <View style={styles.titleView}>
                            <Text style={styles.titleText}>
                                서비스 시작
                            </Text>
                            <Text style={styles.titleText}>
                                서비스 종료
                            </Text>
                            <Text style={styles.titleText}>
                                사진 첨부
                            </Text>
                            <Text style={styles.titleText}>
                                계좌
                            </Text>
                            <Text style={styles.titleText}>
                                등록번호
                            </Text>
                        </View>
                        <View style={styles.dropView}>
                            <View style={styles.startView}>
                                <DropDownPicker
                                containerStyle={{width: '38%', }}
                                    placeholder='년도'
                                    items={[
                                        { label: '2021', value: '1'},
                                        { label: '2022', value: '2', selected:true }
                                    ]}
                                    open={yearOpen}
                                    onOpen = {() => {this.setState({ yearOpen: true })}}
                                    onClose={() => this.setState({ yearOpen: false })}
                                    onChangeItem={item => {
                                        this.setState({
                                            selected: item.value
                                        });
                                    }}
                                />
                                <DropDownPicker
                                containerStyle={{width: '32%', }}
                                    placeholder='월'
                                    items={[
                                        { label: '08', value: '1'},
                                        { label: '09', value: '2'},
                                        { label: '10', value: '3'}
                                    ]}
                                    open={monthOpen}
                                    onOpen = {() => {this.setState({ monthOpen: true })}}
                                    onClose={() => this.setState({ monthOpen: false })}
                                />
                                <DropDownPicker
                                containerStyle={{width: '32%', }}
                                    placeholder='일'
                                    items={[
                                        { label: '08', value: '1'},
                                        { label: '09', value: '2'},
                                        { label: '10', value: '3'}
                                    ]}
                                    open={dayOpen}
                                    onOpen = {() => {this.setState({ dayOpen: true })}}
                                    onClose={() => this.setState({ dayOpen: false })}
                                />
                            </View>
                           
                            <View style={styles.endView}>
                            <DropDownPicker
                                containerStyle={{width: '38%', }}
                                    placeholder='년도'
                                    items={[
                                        { label: '2021', value: '1'},
                                        { label: '2022', value: '2', selected:true }
                                    ]}
                                    open={endYearOpen}
                                    onOpen = {() => {this.setState({ endYearOpen: true })}}
                                    onClose={() => this.setState({ endYearOpen: false })}
                                    onChangeItem={item => {
                                        this.setState({
                                            selected: item.value
                                        });
                                    }}
                                />
                                <DropDownPicker
                                containerStyle={{width: '32%', }}
                                    placeholder='월'
                                    items={[
                                        { label: '08', value: '1'},
                                        { label: '09', value: '2'},
                                        { label: '10', value: '3'}
                                    ]}
                                    open={endMonthOpen}
                                    onOpen = {() => {this.setState({ endMonthOpen: true })}}
                                    onClose={() => this.setState({ endMonthOpen: false })}
                                />
                                <DropDownPicker
                                containerStyle={{width: '32%', }}
                                    placeholder='일'
                                    items={[
                                        { label: '08', value: '1'},
                                        { label: '09', value: '2'},
                                        { label: '10', value: '3'}
                                    ]}
                                    open={endDayOpen}
                                    onOpen = {() => {this.setState({ endDayOpen: true })}}
                                    onClose={() => this.setState({ endDayOpen: false })}
                                />
                            </View>

                            <View style={styles.picView}>
                                <View style={styles.picTextView}>
                                    <Text style={styles.picText}>
                                        파일명
                                    </Text>
                                </View>
                                <View style={styles.picBtnView}>
                                    <TouchableOpacity style={styles.picBtnStyle}>
                                        <Text style={styles.picBtnText}>
                                            첨부
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.accountView}>
                                <View style={styles.accountDropView}>
                                <DropDownPicker
                                    placeholder='은행'
                                    items={[
                                        { label: '농협', value: '1'},
                                        { label: '신한', value: '2'},
                                        { label: '카카오', value: '3'}
                                    ]}
                                    open={accountOpen}
                                    onOpen = {() => {this.setState({ accountOpen: true })}}
                                    onClose={() => this.setState({ accountOpen: false })}
                                />
                                </View>
                                <View style={styles.accountNumView}>
                                    <TextInput style={styles.accountNumTextInput}
                                        placeholder='계좌번호 입력'
                                    >

                                    </TextInput>
                                </View>
                            </View>

                            <View style={styles.registerNumView}>
                                <Text style={styles.registerNumText}>
                                    #100000
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.alertView}>
                        <Text>
                        • 쉐어링 서비스 시작, 종료일을 선택해주세요.{"\n"}
                        • 반드시 본인의 킥보드 사진을 등록해주시기 바랍니다. {"\n"}
                        • 수익금을 수령할 계좌번호를 정확히 입력해주세요.
                        </Text>
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity style={styles.confirmBtn}>
                            <Text style={styles.confirmText}>
                                쉐어링 서비스 등록
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
    modifyBtnView: {
        flex: 0.3,
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    bodyView: {
        flex: 3.7,
        paddingTop: 40,
        paddingBottom: 40,
        paddingLeft: 30,
        paddingRight: 30,
    },
    contentView: {
        flex: 2,
        flexDirection: 'row',
    },
    alertView: {
        flex: 1.7,
        paddingTop: '5%',
        justifyContent: 'center'
    },
    btnView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modifyStyle: {
        borderWidth: 1,
        borderRadius: 40,
        width: '20%',
        height: '55%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '5%'
    },
    modifyText: {
        fontSize: 16
    },
    titleView: {
        flex: 0.85,
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        marginBottom: '15%',
        marginTop: '17%'
    },
    dropView: {
        flex: 2.15,
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
    startView: {
        flex:1,
        flexDirection: 'row',
        zIndex:3
    },
    endView: {
        flex:1,
        flexDirection: 'row',
        zIndex: 2
    },
    picView: {
        flex:1,
        flexDirection: 'row'
    },
    picTextView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    picText: {
        fontSize: 16
    },
    picBtnView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    picBtnStyle: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '40%'
    },
    picBtnText: {
        fontSize: 16
    },
    accountView: {
        flex: 1,
        flexDirection: 'row',
        zIndex: 1
    },
    accountDropView: {
        flex: 1
    },
    accountNumView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    accountNumTextInput: {
        borderBottomWidth: 1,
        width: '95%',
        fontSize: 16
    },
    registerNumView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerNumText: {
        fontSize: 16,
        marginBottom: '5%'
    }
})

export default ShareRegister;
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

class ShareStart extends Component {
    constructor({ props }) {
        super(props);

        this.state = {
            open:  false,
            value: null,
            items: [{ label: '대구대', value: 'daegu'},{ label: '영남대', value: 'yeongnam'}]
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
        const { open, value, items, setOpen, setValue, setItems } = this.state;
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
                            <DropDownPicker style={styles.placeDrop}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                multiple={true}
                                min={0}
                                max={2}
                            />
                        </View>
                    </View>
                    <View style={styles.alertView}>
                        <Text>
                        • 쉐어링 서비스를 시작할 구역을 정확히 선택해주세요.{"\n"}
                        • 충전할 때에는 상단의 일시정지 버튼을 눌러주세요.
                        </Text>
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
        flexDirection: 'row'
    },
    alertView: {
        flex: 1.7,
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
        backgroundColor: 'pink',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 18,
        marginBottom: '30%',
    },
    dropView: {
        flex: 3,
        backgroundColor: 'white'
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
    placeDrop: {
        height: 30,
    }
})

export default ShareStart;
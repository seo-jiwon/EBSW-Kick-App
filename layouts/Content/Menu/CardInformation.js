import React, {Component} from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import { ceil } from "react-native-reanimated";
import Icon from 'react-native-vector-icons/Ionicons';

class CardInformation extends Component{
    constructor({props}) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardView}>
                    <TouchableOpacity style={styles.card1Style}>
                        <Icon name="checkmark-circle-outline" size={30} />
                        <Text style={styles.card1Text}>
                            국민 1234
                        </Text>
                        <TouchableOpacity>
                          <Icon name="close-outline" size={20}/>
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.card2Style}>
                        <Icon style={styles.selectIcon} name="checkmark-circle-outline" size={30} />
                        <Text style={styles.card2Text}>
                            신한 0668
                        </Text>
                        <TouchableOpacity>
                            <Icon name="close-outline" size={20}/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    
                   
                </View>
                
                <View style={styles.addView}>
                    <TouchableOpacity style={styles.addCard}
                        onPress={() => this.props.navigation.push('CardAdd')}
                    >
                        <Text style={styles.addText}>
                                + 카드 추가하기
                        </Text>
                    </TouchableOpacity>
                    <Text style={styles.noticeText}>
                        • 대표 카드에서 서비스 비용이 결제 됩니다.{"\n"}
                        • 카드는 최대 2개까지 등록 가능합니다.
                    </Text>
                </View>

                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.confirmBtn}>
                        <Text style={styles.confirmText}>
                            확인
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
        padding: 40
    },
    cardView: {
        flex: 1,
    },
    card1Style: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '38%',
        marginBottom: '5%'
    },
    card1Text: {
        fontSize: 17,
    },
    card2Style: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '38%',
        backgroundColor: 'pink',
        borderColor: 'white'
    },
    card2Text: {
        fontSize: 17,
    },
    removeIcon: {
        
    },
    selectIcon: {
        color: 'white'
    },
    noSelectIcon: {
        color: 'black'
    },
    addView: {
        flex: 3,
        alignItems: 'center',
    },
    addCard: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '12%',
        width: '50%',

    },
    addText: {
        fontSize: 17
    },
    btnView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    confirmBtn: {
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "pink",
        borderColor: "pink",
        width: "80%",
        height: '40%',
        alignItems: "center",
        justifyContent: "center"
    },
    confirmText: {
        fontSize: 23,
        color: "white"
    },
    noticeText: {
        paddingTop: '10%',
    }
})

export default CardInformation;
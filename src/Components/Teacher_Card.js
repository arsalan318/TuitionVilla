import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
//import Image1 from '../../assets/download.jpg'
import { Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { onSelectedTeacher } from '../actions';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

export class Teacher_Card extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', width: "100%", height: 100, backgroundColor: "#e3e3ed", borderColor: "steelblue", borderWidth: 1, marginBottom: 10, borderRadius: 10 }}>
                <View style={{ width: "25%", height: "100%", paddingTop: 10 }} >
                    <Avatar
                        large
                        rounded
                        source={{ uri: this.props.teacher.uri }}
                        activeOpacity={0.7}
                    />
                </View>

                <View style={{ width: "50%", height: "100%", paddingTop: 10 }} >
                    <Text style={{ paddingTop: 5, fontSize: 15, fontWeight: "bold", color: "black" }}>{this.props.teacher.name}</Text>
                    <Text>{this.props.teacher.email}</Text>
                </View>
                <View style={{ justifyContent: "center", width: "25%", height: "100%" }} >
                    <TouchableOpacity onPress={() => {
                        this.props.onSelectedTeacher(this.props.teacher.uid)
                        Actions.teacher_profileSelected()
                    }}
                        style={{ justifyContent: "center", alignItems: "center", borderColor: "steelblue", width: "100%", borderWidth: 1, height: "50%" }}>
                        <Icon
                            name='md-person'
                            size={25}
                            color='steelblue'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", borderColor: "steelblue", width: "100%", height: "50%", borderWidth: 1 }}
                        onPress={() => {
                            console.log("Chat: "+this.props.teacher.name)
                            Actions.Chat({
                                name: this.props.teacher.name
                            })

                        }}
                    >
                        <Icon
                            name='md-chatboxes'
                            size={25}
                            color='steelblue'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


export default connect(null, { onSelectedTeacher })(Teacher_Card)
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Teacher_ProfileItems from './Teacher_ProfileItems'
import { Avatar } from 'react-native-elements'
import {connect} from 'react-redux';


export class Teacher_Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.coverPhoto}>
                        <Avatar
                            xlarge
                            rounded
                            source={{ uri: this.props.selectedTeacher.uri }}
                            
                        />
                    </View>
                <View style={styles.profileItem}>
                    <Teacher_ProfileItems Teacher={this.props.selectedTeacher}/>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    coverPhoto: {
        width: "100%",
        height: "40%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"steelblue"
    },
    profileItem: {
        width: "100%",
        height: "60%",
    }
})

mapStateToProps=(state)=>{
    const {selectedTeacher,uri} = state.teacher;
    return {selectedTeacher,uri}
}

export default connect(mapStateToProps)(Teacher_Profile)
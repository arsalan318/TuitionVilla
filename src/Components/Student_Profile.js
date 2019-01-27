import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Student_ProfileItems from './Student_ProfileItems'
import { Avatar } from 'react-native-elements'
import {connect} from 'react-redux';


export class Student_Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.coverPhoto}>
                        <Avatar
                            xlarge
                            rounded
                            source={{ uri: this.props.selectedStudent.uri }}                           
                        />
                    </View>
                <View style={styles.profileItem}>
                    <Student_ProfileItems student={this.props.selectedStudent}/>
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
    const {selectedStudent,uri} = state.student;
    return {selectedStudent,uri}
}

export default connect(mapStateToProps)(Student_Profile)
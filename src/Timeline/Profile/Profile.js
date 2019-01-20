import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import ProfileItems from './ProfileItems'
import { Avatar } from 'react-native-elements'
import {connect} from 'react-redux';


export class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.coverPhoto}>
                        <Avatar
                            xlarge
                            rounded
                            source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                            
                        />
                    </View>
                <View style={styles.profileItem}>
                    <ProfileItems student={this.props.selectedStudent}/>
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
    const {selectedStudent} = state.student;
    return {selectedStudent}
}

export default connect(mapStateToProps)(Profile)

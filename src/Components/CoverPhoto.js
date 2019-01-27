import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
export class CoverPhoto extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <Avatar
                    xlarge
                    rounded
                    source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default CoverPhoto
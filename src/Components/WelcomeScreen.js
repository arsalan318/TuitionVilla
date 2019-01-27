import React, { Component } from 'react';
import { Text, Image, View, ImageBackground, TouchableOpacity } from 'react-native';
import Spinner from '../common/Spinner';
import { Actions } from "react-native-router-flux";
class WelcomeScreen extends Component {


    showScreen = () => {
        return (
            <View>
                <ImageBackground source={require('../../Icons/background.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={styles.ImageContainer}>

                        <Image
                            style={styles.ImageStyle}
                            source={require('../../Icons/logo.png')}
                        />
                        <Spinner size="large" />
                    </View>


                </ImageBackground>

            </View>

        )
    }



    render() {
        return (
            <View>
                {this.showScreen()}

            </View>
        );
    };
}

const styles = {
    ImageStyle: {
        width: '99%',
        height: '40%',


    },
    ImageContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,

    },
    TextStyle: {
        fontSize: 23,
        color: '#000080'
    }
}

export default WelcomeScreen;
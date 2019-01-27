import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import PickImage from './PickImage';
import { connect } from 'react-redux';
import {
    studentUpdate,
    signUpHandler,

} from '../actions/StudentActions';

class LoginDetails extends Component {

   

    render() {
        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Email</Text>
                    <FormInput
                        placeholder='Email'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.studentUpdate({ prop: 'email', value })}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Password</Text>
                    <FormInput
                        placeholder='Password'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.studentUpdate({ prop: 'password', value })}
                        secureTextEntry
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Profile Picture</Text>
                    <PickImage />
                </View>
              


            </ScrollView>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: 5,
        paddingBottom: 5
    },
    inputStyle: {
        height: 50,
        backgroundColor: "#fff",
        borderColor: "#002966",
        borderWidth: 1,
        borderRadius: 10,
        width: "100%",
        fontSize: 18,
        paddingLeft: 10

    },
    textStyle: {
        paddingLeft: 15,
        fontSize: 18,
        paddingBottom: 5
    },
    buttonStyle: {
        borderRadius: 10,
    },
};

const mapStateToProps = (state) => {
    const { email, password, name, address, phone, cnic, age, Class, institute, subjects, uri } = state.student;
    return { email, password, name, address, phone, cnic, age, Class, institute, subjects , uri}
}

export default connect(mapStateToProps, { studentUpdate, signUpHandler })(LoginDetails)
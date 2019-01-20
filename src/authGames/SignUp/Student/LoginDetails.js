import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import PickImage from '../../../components/PickImage/PickImage'
import { connect } from 'react-redux';
import {
    emailChanged,
    passwordChanged,
    signUpHandler,
    //studentCreate
} from '../../../actions/StudentActions'

export class LoginDetails extends Component {

    SignInPressed = () => {
        console.log("Signup Pressed")
        const { email, password, name, address, contact, cnic, age, Class, institute, subjects } = this.props;
        this.props.signUpHandler({ email, password, name, address, contact, cnic, age, Class, institute, subjects });
        //this.props.studentCreate({name, contact, address, cnic, age,Class,institute,subjects})
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Email</Text>
                    <FormInput
                        placeholder='Email'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.emailChanged(text)}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Password</Text>
                    <FormInput
                        placeholder='Password'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.passwordChanged(text)}
                        secureTextEntry
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Profile Picture</Text>
                    <PickImage />
                </View>
                <View style={{ paddingBottom: 20 }}>
                    <Button title='Sign Up'
                        backgroundColor='#4d94ff'
                        buttonStyle={styles.buttonStyle}
                        onPress={this.SignInPressed}

                    />
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
    const { email, password, name, address, contact, cnic, age, Class, institute, subjects } = state.student;;
    return { email, password, name, address, contact, cnic, age, Class, institute, subjects }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, signUpHandler })(LoginDetails)
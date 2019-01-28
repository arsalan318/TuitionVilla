import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity, ImageBackground,Dimensions } from 'react-native';
import { FormInput, CheckBox } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import Spinner from '../common/Spinner';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, teacherState, studentState } from '../actions';
class Login extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onLogInPress() {
        const { email, password, student, teacher } = this.props;

        this.props.loginUser({ email, password, student, teacher });
    }
    SignUpPressed() {
        // const { email, password } = this.props;

        // this.props.signUser({ email, password });

        if (this.props.teacher) {

            Actions.teacher_signup();

        }
        if (this.props.student) {

            Actions.loginDetailsStudent()
        }

    }
    renderLogInButton() {
        if (this.props.LogInLoading) {
            return <Spinner size="large" />;
        }

        return (
            <TouchableOpacity style={styles.ButtonStyle} onPress={this.onLogInPress.bind(this)}
            disabled={(this.props.student || this.props.teacher)?false:true}
            
            >
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>


        );
    }


    PressTeacherState() {


        this.props.teacherState();

    }
    PressStudentState() {

        this.props.studentState();

    }
    render() {
        let err="";
        let btnColor='#000080';
        if(this.props.teacher===false && this.props.student===false){
            err="Select login type"
            btnColor="skyblue"
        }
        return (
            <ImageBackground source={require('../../Icons/background.jpg')} style={{ width: '100%', height: '100%' }}>
                <View style={styles.loginStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../../Icons/logo.png')} />
                    <View style={styles.containerStyle}>
                        <Text style={styles.textStyle}>Email </Text>
                        <FormInput
                            placeholder='example@test.com'
                            inputStyle={styles.inputStyle}
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </View>
                    <View style={styles.containerStyle}>
                        <Text style={styles.textStyle}>Password</Text>
                        <FormInput
                            placeholder='password'
                            inputStyle={styles.inputStyle}
                            onChangeText={this.onPasswordChange.bind(this)}
                            secureTextEntry
                            value={this.props.password}
                        />
                    </View>
                    <View style={styles.checkBoxContainer}>
                        <CheckBox title="Teacher" containerStyle={styles.checkBoxStyle} checked={this.props.teacher} onPress={this.PressTeacherState.bind(this)} />
                        <CheckBox title="Student" containerStyle={styles.checkBoxStyle} checked={this.props.student} onPress={this.PressStudentState.bind(this)} />
                    </View>
                    <View>
                        <Text style={styles.errorTextStyle}>
                            {this.props.error}
                            {err}
                        </Text>
                    </View>
                    <View>
                        {this.renderLogInButton()}
                    </View>
                    <View>
                        <TouchableOpacity style={styles.ButtonStyle} onPress={this.SignUpPressed.bind(this)}
                        disabled={(this.props.student || this.props.teacher)?false:true}
                        
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    };
}


const styles = {
    loginStyle: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        //paddingLeft: 30
        justifyContent:"center"
    },
    containerStyle: {
        paddingBottom: 5,
        alignSelf: 'center'


    },
    textStyle: {
        paddingLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 5
    },
    inputStyle: {
        height: 50,
        borderColor: "#002966",
        borderBottomWidth: 1,
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 10

    },
    imageStyle: {
        justifyContent:"center",
        width:"100%",
        height: "30%",
        paddingTop: 20,
        paddingBottom: 10

    },
    ButtonStyle: {
        alignSelf: 'center',
        paddingBottom: 5,
        marginBottom: 5,
        marginTop: 5,
        paddingTop: 5,
        width: "95%",
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#000080'


    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'

    },
    checkBoxStyle: {
        width: '42.5%',
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: '#000080',
        backgroundColor: '#e2c3c0'

    },
    checkBoxContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        marginTop: 10
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};



const mapStateToProps = ( state ) => {
    const { email, password, error, LogInLoading, teacher, student } = state.auth;

    return { email, password, error, LogInLoading, teacher, student };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser, teacherState, studentState
})(Login);
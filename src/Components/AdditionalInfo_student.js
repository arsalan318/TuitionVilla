import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { Button, FormInput, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Spinner from '../common/Spinner';
import {
    studentUpdate,
    subjectsChanged,
    signUpHandler

} from '../actions/StudentActions';
class AdditionalInfo extends Component {
    state = {
        physics: false,
        chemistry: false,
        math: false,
        english: false,
        urdu: false,
        accounts: false,
        biology: false,
        other: false,
    }
    SignInPressed = () => {
        const { email, password, name, address, phone, cnic, age, Class, institute, subjects, uri } = this.props;
        this.props.signUpHandler({ email, password, name, address, phone, cnic, age, Class, institute, subjects, uri });

    }
    Checkpress() {

        this.setState({ checked: !this.state.checked });
    }

    renderSignInButton() {
        if (this.props.SignInLoading) {
            return <Spinner size="large" />;
        }

        return (
            <TouchableOpacity style={styles.ButtonStyle} onPress={this.SignInPressed.bind(this)}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

        );
    }
    onSubjectChange = (condition, val) => {
        this.props.subjectsChanged({ condition, val });
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Class</Text>
                    <FormInput
                        placeholder='Class'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.studentUpdate({ prop: 'Class', value })}

                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>School/College/University</Text>
                    <FormInput
                        placeholder='Institute Name'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.studentUpdate({ prop: 'institute', value })}

                    />
                </View>
                <Text style={styles.textStyle}>Subjects Required</Text>
                <View style={styles.containerStyle}>
                    <CheckBox title='Physics'
                        checked={this.state.physics}
                        onPress={() => { this.setState({ physics: !this.state.physics }); this.onSubjectChange(!this.state.physics, "physics") }}
                    />
                    <CheckBox title='Maths'
                        checked={this.state.math}
                        onPress={() => { this.setState({ math: !this.state.math }); this.onSubjectChange(!this.state.math, "math") }}
                    />
                    <CheckBox title='Chemistry'
                        checked={this.state.chemistry}
                        onPress={() => { this.setState({ chemistry: !this.state.chemistry }); this.onSubjectChange(!this.state.chemistry, "chemistry") }}
                    />
                    <CheckBox title='English'
                        checked={this.state.english}
                        onPress={() => { this.setState({ english: !this.state.english }); this.onSubjectChange(!this.state.english, "english") }}
                    />
                    <CheckBox title='Urdu'
                        checked={this.state.urdu}
                        onPress={() => { this.setState({ urdu: !this.state.urdu }); this.onSubjectChange(!this.state.urdu, "urdu") }}
                    />
                    <CheckBox title='Accounts'
                        checked={this.state.accounts}
                        onPress={() => { this.setState({ accounts: !this.state.accounts }); this.onSubjectChange(!this.state.accounts, "accounts") }}
                    />
                    <CheckBox title='Biology'
                        checked={this.state.biology}
                        onPress={() => { this.setState({ biology: !this.state.biology }); this.onSubjectChange(!this.state.biology, "biology") }}
                    />
                    <CheckBox title='Other'
                        checked={this.state.other}
                        onPress={() => { this.setState({ other: !this.state.other }); this.onSubjectChange(!this.state.other, "other") }}
                    />
                </View>
                <View>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>

                </View>
                <View>
                    {this.renderSignInButton()}
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    containerStyle: {
        paddingTop: 10,
        paddingBottom: 10
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
    buttonStyle: {
        borderRadius: 10,


    },
    textStyle: {
        paddingLeft: 15,
        fontSize: 18,
        paddingBottom: 5

    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 18,
        color: '#fff'

    },
    ButtonStyle: {
        paddingBottom: 10,
        marginBottom: 10,
        marginTop: 10,
        paddingTop: 10,
        paddingLeft: 10,
        width: "100%",
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#fff',
        backgroundColor: '#000080'


    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    const { email, password, name, address, phone, cnic, age, Class, institute, subjects, uri } = state.student;
    const { SignInLoading, error } = state.sign;
    return { email, password, name, address, phone, cnic, age, Class, institute, subjects, uri, SignInLoading, error };
}

export default connect(mapStateToProps, { studentUpdate, subjectsChanged, signUpHandler })(AdditionalInfo)
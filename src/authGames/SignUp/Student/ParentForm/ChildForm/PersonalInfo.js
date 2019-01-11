import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Button, FormInput, CheckBox } from 'react-native-elements';

import { Actions } from 'react-native-router-flux';

//import NativeButton from '../UI/NativeButton';
export default class SignUp extends Component {
    state = {
        physics:false,
        chemistry:false,
        math:false,
        english:false,
        urdu:false,
        accounts:false,
        biology:false,
        other:false,
    }

    Checkpress() {

        this.setState({ checked: !this.state.checked });
    }
    render() {
        console.log(this.state)
        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Your Name</Text>
                    <FormInput
                        placeholder='Name'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.NameChange(text)}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Address</Text>
                    <FormInput
                        placeholder='Address'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.AddressChange(text)}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Contact Number</Text>
                    <FormInput
                        placeholder='Contact No..'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.ContactChange(text)}
                    />
                </View>

                <Text style={styles.textStyle}>CNIC</Text>
                <View style={styles.containerStyle}>
                    <FormInput
                        placeholder='CNIC'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.CnicChange(text)}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Age</Text>
                    <FormInput
                        placeholder='Age'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.AgeChange(text)}
                    />
                </View>
                {/* <View style={{ paddingBottom: 20 }}>
                    <Button title='Next'
                        backgroundColor='#4d94ff'
                        buttonStyle={styles.buttonStyle}
                        onPress={()=>{Actions.createStudent2()}}
                    />
                </View> */}
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Class</Text>
                    <FormInput
                        placeholder='Class'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.ClassChange(text)}

                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>School/College/University</Text>
                    <FormInput
                        placeholder='Institute Name'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.InstituteChange(text)}

                    />
                </View>
                <Text style={styles.textStyle}>Subject Required</Text>
                <View style={styles.containerStyle}>
                    <CheckBox title='Physics'
                        checked={this.state.physics}
                        onPress={() => { this.setState({ physics: !this.state.physics }); this.props.SubjectChange(!this.state.physics,"physics")}}
                    />
                    <CheckBox title='Maths'
                        checked={this.state.math}
                        onPress={() => { this.setState({ math: !this.state.math }); this.props.SubjectChange(!this.state.math,"math")}}
                    />
                    <CheckBox title='Chemistry'
                        checked={this.state.chemistry}
                        onPress={() => { this.setState({ chemistry: !this.state.chemistry }); this.props.SubjectChange(!this.state.chemistry,"chemistry")}}
                    />
                    <CheckBox title='English'
                        checked={this.state.english}
                        onPress={() => { this.setState({ english: !this.state.english }); this.props.SubjectChange(!this.state.english,"english")}}
                    />
                    <CheckBox title='Urdu'
                        checked={this.state.urdu}
                        onPress={() => { this.setState({ urdu: !this.state.urdu }); this.props.SubjectChange(!this.state.urdu,"urdu")}}
                    />
                    <CheckBox title='Accounts'
                        checked={this.state.accounts}
                        onPress={() => { this.setState({ accounts: !this.state.accounts }); this.props.SubjectChange(!this.state.accounts,"accounts")}}
                    />
                    <CheckBox title='Biology'
                        checked={this.state.biology}
                        onPress={() => { this.setState({ biology: !this.state.biology }); this.props.SubjectChange(!this.state.biology,"biology")}}
                    />
                    <CheckBox title='Other'
                        checked={this.state.other}
                        onPress={() => { this.setState({ other: !this.state.other }); this.props.SubjectChange(!this.state.other,"other")}}
                    />
                </View>
                <View style={{ paddingBottom: 20 }}>
                    <Button title='Sign Up'
                        backgroundColor='#4d94ff'
                        buttonStyle={styles.buttonStyle}
                        onPress={this.props.SignUpHandler}
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
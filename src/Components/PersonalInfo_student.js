import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { FormInput} from 'react-native-elements';
import {connect} from 'react-redux'
import {
    studentUpdate
} from '../actions/StudentActions';

class SignUp extends Component {

    render() {
        
        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Your Name</Text>
                    <FormInput
                        placeholder='Name'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.studentUpdate({ prop: 'name', value })}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Address</Text>
                    <FormInput
                        placeholder='Address'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.studentUpdate({ prop: 'address', value })}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Contact Number</Text>
                    <FormInput
                        placeholder='Contact No..'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.studentUpdate({ prop: 'phone', value })}
                    />
                </View>

                <Text style={styles.textStyle}>CNIC</Text>
                <View style={styles.containerStyle}>
                    <FormInput
                        placeholder='CNIC'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.studentUpdate({ prop: 'cnic', value })}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Age</Text>
                    <FormInput
                        placeholder='Age'
                        inputStyle={styles.inputStyle}
                        onChangeText={value => this.props.studentUpdate({ prop: 'age', value })}
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


export default connect(null,{studentUpdate})(SignUp)
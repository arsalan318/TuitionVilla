import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { FormInput} from 'react-native-elements';
import {connect} from 'react-redux'
import {
    nameChanged,
    addressChanged,
    contactChanged,
    cnicChanged,
    ageChanged
} from '../../../actions/StudentActions'

//import NativeButton from '../UI/NativeButton';
class SignUp extends Component {

    render() {
        console.log(this.state)
        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Your Name</Text>
                    <FormInput
                        placeholder='Name'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.nameChanged(text)}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Address</Text>
                    <FormInput
                        placeholder='Address'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.addressChanged(text)}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Contact Number</Text>
                    <FormInput
                        placeholder='Contact No..'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.contactChanged(text)}
                    />
                </View>

                <Text style={styles.textStyle}>CNIC</Text>
                <View style={styles.containerStyle}>
                    <FormInput
                        placeholder='CNIC'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.cnicChanged(text)}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Age</Text>
                    <FormInput
                        placeholder='Age'
                        inputStyle={styles.inputStyle}
                        onChangeText={(text) => this.props.ageChanged(text)}
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

// const mapStateToProps = (state) =>{
//     const {name} = state.student;
//     return { name};
// }

export default connect(null,{nameChanged,addressChanged,contactChanged,cnicChanged,ageChanged})(SignUp)
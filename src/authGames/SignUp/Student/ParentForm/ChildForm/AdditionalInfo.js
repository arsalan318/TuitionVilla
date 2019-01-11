import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Button, FormInput, CheckBox } from 'react-native-elements';
export default class AdditionalInfo extends Component {
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
        return (
            <ScrollView>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>Class</Text>
                    <FormInput
                        placeholder='Education'
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <View style={styles.containerStyle}>
                    <Text style={styles.textStyle}>School/College/University</Text>
                    <FormInput
                        placeholder='Institute Name'
                        inputStyle={styles.inputStyle}
                    />
                </View>
                <Text style={styles.textStyle}>Subject Required</Text>
                <View style={styles.containerStyle}>
                    <CheckBox title='Physics'
                        checked={this.state.physics}
                        onPress={()=>{this.setState({ physics: !this.state.physics  })}}
                    />
                    <CheckBox title='Maths'
                        checked={this.state.math}
                        onPress={()=>{this.setState({ math: !this.state.math  })}}
                    />
                    <CheckBox title='Chemistry'
                        checked={this.state.chemistry}
                        onPress={()=>{this.setState({ chemistry: !this.state.chemistry  })}}
                    />
                    <CheckBox title='English'
                        checked={this.state.english}
                        onPress={()=>{this.setState({ english: !this.state.english  })}}
                    />
                    <CheckBox title='Urdu'
                        checked={this.state.urdu}
                        onPress={()=>{this.setState({ urdu: !this.state.urdu  })}}
                    />
                    <CheckBox title='Accounts'
                        checked={this.state.accounts}
                        onPress={()=>{this.setState({ accounts: !this.state.accounts  })}}
                    />
                    <CheckBox title='Biology'
                        checked={this.state.biology}
                        onPress={()=>{this.setState({ biology: !this.state.biology  })}}
                    />
                    <CheckBox title='Other'
                        checked={this.state.other}
                        onPress={()=>{this.setState({ other: !this.state.other  })}}
                    />

                </View>
                <View style={{ paddingBottom: 20 }}>
                    <Button title='Sign Up'
                        backgroundColor='#4d94ff'
                        buttonStyle={styles.buttonStyle}
                    />
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

    }

};
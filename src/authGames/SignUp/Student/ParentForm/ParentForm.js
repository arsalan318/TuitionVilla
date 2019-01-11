import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Form1 from './ChildForm/PersonalInfo';
//import Form2 from './ChildForm/AdditionalInfo'


export class ParentForm extends Component {
    state={
        name:"",
        address:"",
        contact:"",
        cnic:"",
        age:"",
        class:"",
        institute:"",
        subjects:[]
    }
    onNameChange=(val)=>{
        this.setState({
            name:val
        })
    }
    onAddressChange=(val)=>{
        this.setState({
            address:val
        })
    }
    onContactChange=(val)=>{
        this.setState({
            contact:val
        })
    }
    onCnicChange=(val)=>{
        this.setState({
            cnic:val
        })
    }
    onAgeChange=(val)=>{
        this.setState({
            age:val
        })
    }
    onClassChange=(val)=>{
        this.setState({
            class:val
        })
    }
    onInstituteChange=(val)=>{
        this.setState({
            institute:val
        })
    }
    onSubjectsChange=(condition,val)=>{
        if(condition===true){
            const subjects = this.state.subjects;
            subjects.push(val);
            this.setState({
                subjects
            })
        } 
        else{
            const subjects = this.state.subjects.filter((subject)=>{
                return subject!==val 
            });
            this.setState({
                subjects
            })            
        }
    }
    onSignUpHandler=()=>{
        console.log(this.state);
    }
    render() {
        return (
            <View>
                <Form1 
                NameChange={this.onNameChange}
                AddressChange={this.onAddressChange}
                ContactChange={this.onContactChange}
                CnicChange={this.onCnicChange}
                AgeChange={this.onAgeChange}
                ClassChange={this.onClassChange}
                InstituteChange={this.onInstituteChange}
                SubjectChange={this.onSubjectsChange}
                SignUpHandler={this.onSignUpHandler}
                />
            </View>
        )
    }
}

export default ParentForm

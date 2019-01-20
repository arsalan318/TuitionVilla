import React,{Component} from 'react';
import {Text,View, StyleSheet,Alert} from 'react-native';
import firebase from 'firebase';
import Input from './Input';
import Button from './Button';
import Spinner from './Spinner';
import Card from './Card';
import CardSection from './CardSection';
export default class LoginScreen extends Component { 
  state={
    email:'',
    password:'',
    error:'',
    loading:false
  };
  OnPressClicked(){

     const {email, password} =this.state;
      this.setState({error:'' , loading:true});
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(this.OnLoginSuccess.bind(this))
    .catch(()=>{
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(this.OnLoginSuccess.bind(this))
      .catch(this.OnLoginFail.bind(this));
    });

  }
OnLoginFail(){
  this.setState({error:'Authentication Failed',loading:false,email:'',password:''});
  Alert.alert(this.state.error);
}  

OnLoginSuccess(){
  this.setState({
    email:'',
  password:'',
  loading:false,
  error:''});
}

renderbuttonorspin(){
  if(this.state.loading){
    return <Spinner Size='small'/>;
  }
  return(
  <Button OnPress={this.OnPressClicked.bind(this)}>LOG IN!</Button>
  );
}


  renderScreen(){
  if(this.state.loading){
    return( <Spinner/>);
  }

  return(
    <Card>
      <CardSection>
    <Input 
    label="Email"
    placeholder="Email"
    value={this.state.email}
    onChangeText={email=> this.setState({email})}
    />
    </CardSection>
    <CardSection>
    <Input placeholder="Password"
    secureTextEntry
    label="Password"
    value={this.state.password}
    onChangeText={password=> this.setState({password})}
    />   
    </CardSection>
    <CardSection>
    {this.renderbuttonorspin()}
    </CardSection>
    </Card>
  );
}

  render(){
    return(
        <View>
        {this.renderScreen()}
      </View>
     
    );
   }
}



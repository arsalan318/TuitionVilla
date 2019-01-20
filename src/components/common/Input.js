import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({ label,  placeholder, secureTextEntry  ,value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{ label }</Text>
      <TextInput
        
        autoCorrect={false}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderColor: '#eee',
    borderBottomWidth: 2,
  },
  label: {
    padding: 5,
    paddingBottom: 2,
    color: '#333',
    fontSize: 22,
  },
  input: {
    marginTop:5,
    paddingRight: 5,
    paddingLeft: 20,
    paddingBottom: 2,
    borderWidth:1,
    color: '#333',
    width: 320,
    height:50,
    fontSize: 18,
    borderColor:'#b0afd8',
    borderRadius:10,
  }
});

export default Input;


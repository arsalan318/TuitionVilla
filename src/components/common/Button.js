import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({OnPress,children}) => {
  return (
    <TouchableOpacity  onPress={OnPress} style={styles.button}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    padding: 20,
    width: '100%',
    backgroundColor: '#00aeef',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  }
});

export default Button;
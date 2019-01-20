import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";
import {connect} from 'react-redux'
import {imagePicked} from '../../actions/StudentActions'

class PickImage extends Component {
  state = {
    pickedImaged: null
  }
  options = {
    title: 'Select Avatar',
    //customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  pickImageHandler = () => {
    console.log("Button Pressed")    
    ImagePicker.showImagePicker(this.options, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
          this.props.imagePicked(res.uri,res.data)  
        //this.props.onImagePicked({uri: res.uri, base64: res.data});
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={this.props.image} style={styles.previewImage} />
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={this.pickImageHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    placeholder: {
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: "#eee",
      width: "80%",
      height: 150
    },
    button: {
      margin: 8
    },
    previewImage: {
        width: "100%",
        height: "100%"
    }
  });

const mapStateToProps=(state)=>{
  const {image} = state.student;
  return {image}
}

export default connect(mapStateToProps,{imagePicked})(PickImage);

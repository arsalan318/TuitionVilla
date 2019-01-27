import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import ImagePicker,{showImagePicker} from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import firebase from 'firebase';
//import '@firebase/storage';
import { connect } from 'react-redux'
import { UploadImage, TurnLoadImage } from '../actions/StudentActions';
import Spinner from '../common/Spinner';
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
    this.props.TurnLoadImage();
   // console.log("Button Pressed")
    showImagePicker( res => {
      //console.log("inside showImage");
      if (res.didCancel) {
      //  console.log("User cancelled!");
      } else if (res.error) {
        //console.log("Error", res.error);
      } else {
        
       // console.log("call for function");
        this.uploadImage(res.uri);

        //this.props.onImagePicked({uri: res.uri, base64: res.data});
      }
    });
  }
// pickImageHandler(){
//   showImagePicker((response) => {
//     if (!response.didCancel) {
//         this.uploadImage(response.uri);
//     }
// });
// }
  getImageRef(){
    
    const imageKey = firebase.database().ref().child('images').push().key
    if(this.props.teacher)
    return (firebase.storage().ref(`/users/Teachers`).child(`${imageKey}`+'.jpg'))
    if(this.props.student)
    return (firebase.storage().ref(`/users/Students`).child(`${imageKey}`))
  }

   uploadImage = (uri, mime = 'application/octet-stream') => {
    //console.log("Inside function");
    const image = uri;

    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;

    
    //console.log("image Key:",imageKey);
    let uploadBlob = null;
    let imageRef = this.getImageRef()
    //let mime = 'image/jpg';
    fs.readFile(image, 'base64')
      .then((data) => {
        
        return Blob.build(data, { type: `${mime};BASE64` });
    })
    .then((blob) => {
        
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime });
      })
      .then(() => {
        
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then((url) => {
        //resolve(url);
        //console.log(url);
        // URL of the image uploaded on Firebase storage
        this.props.UploadImage(url);
        //console.log(this.props.imageLoading);
      })
      .catch((error) => {
        ///console.log(error);

      })  
  }

  renderImage(){
    //console.log(this.props.imageLoading);
    if(this.props.imageLoading){

        //console.log("trueee");
        return <Spinner size="large" />;
    }
    else if (this.props.uri!=null){
    return(
    //  console.log("falsee");
      <Image source={{uri:this.props.uri}} style={styles.previewImage}/>
    
    );
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          {this.renderImage()}
        </View>
        <View style={styles.button}>
          <Button title="Pick Image" onPress={this.pickImageHandler.bind(this)} />
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

const mapStateToProps = (state) => {
  const { uri, imageLoading } = state.student;
  const {student , teacher} = state.auth;
  return { uri, imageLoading, student, teacher };
}

export default connect(mapStateToProps, { UploadImage, TurnLoadImage })(PickImage);

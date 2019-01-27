import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {teacherFetch} from '../actions';
class ListItem extends Component {
    
        onProfileClicked(){
            console.log("called!");
            this.props.teacherFetch();
        }
        render(){
        return (
            <View style={styles.outerStyle}>

                <View style={styles.nameStyle}>

                    <Text style={styles.nameTextStyle}>Sufyan Khatri</Text>
                    <View style={styles.buttonStyle}>

                    <TouchableOpacity style={styles.contactButtonStyle}>
                        <Text style={styles.contactTextStyle}>Contact</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.contactButtonStyle} onPress={()=>{this.onProfileClicked.bind(this)}}>

                        <Text style={styles.contactTextStyle}>Profile</Text>

                    </TouchableOpacity>

                </View>

                </View>
                



                <View style={styles.imageContainerStyle}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' }}
                    />
                </View>
            </View>
        );
        }
    
}
const styles = {
    outerStyle: {
        flexDirection: 'row',
        backgroundColor:'#e6e6ff',
        borderWidth:2
    },
    nameTextStyle: {
        fontSize: 24,
        fontWeight:'bold',
        color: '#000080'
    },
    nameStyle: {
        flex:1,
        alignSelf:'flex-start'
    },
    contactTextStyle: {
        fontSize: 18,
        color: '#fff'
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderWidth:4,
        borderColor:'#b3b3ff'
    },
    imageContainerStyle:{
        
        flex:1,
        alignItems:'flex-end',
        paddingRight:2
   
    },
    buttonStyle: {
        flexDirection: 'row',
        backgrounColor: 'black'
    },
    contactButtonStyle: {
        
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft:5,
        paddingRight:5,
        marginRight:5,
        marginTop:15,
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: '#000080'
    }
};


export default connect(null, {
     teacherFetch
})(ListItem);
import React from 'react'
import {View,TouchableOpacity,StyleSheet} from 'react-native';
import { Card} from 'react-native-elements'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Image1 from '../../assets/download.jpg';
import { Actions } from 'react-native-router-flux';

const defaultCards = (props) =>{
    console.log(props)
    return(
        <View style={{width:"50%"}}>
        <Card
            title={props.student.name}
            image={Image1}
            containerStyle={{borderColor:"blue",borderWidth:1}}
          >
          <View style={styles.iconBtn}>
          <TouchableOpacity onPress={()=>Actions.profile()} style={{alignItems:"center",borderColor:"blue",borderWidth:1,width:"50%"}}>
              <Icon 
              name='md-person'
              size={25}
              color='blue'
            />
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:"center",borderColor:"blue",borderWidth:1,width:"50%"}}>
              <Icon 
              name='md-chatboxes'
              size={25}
              color='blue'
            />
          </TouchableOpacity>
          </View>
          
        </Card>
      </View>
    )
}
const styles=StyleSheet.create({
    iconBtn:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row"
    }
})
export default defaultCards;
import React from 'react'
import {View,TouchableOpacity,StyleSheet} from 'react-native';
import { Card} from 'react-native-elements'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Image1 from '../../assets/download.jpg';

const defaultCards = (props) =>{
    return(
        <View style={{width:"50%"}}>
        <Card
          title='HELLO WORLD'
          image={Image1}
          >
          <View style={styles.iconBtn}>
          <TouchableOpacity>
              <Icon 
              name='md-person'
              size={25}
              color='#042'
            />
          </TouchableOpacity>
          <TouchableOpacity>
              <Icon 
              name='md-chatboxes'
              size={25}
              color='#042'
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
        
    }
})
export default defaultCards;
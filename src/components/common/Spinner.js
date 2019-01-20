import React from 'react';
import {View,Text, ActivityIndicator} from 'react-native';
const Spinner=({Size})=>{
    
return(
    <View style={styles.spinnerstyle}>
    <ActivityIndicator size={Size||'large'} />
    </View>
);
    
}
const styles=  {
    spinnerstyle:{
        justifyContent: 'center',
        alignItems: 'center'

    }
};

export default Spinner;
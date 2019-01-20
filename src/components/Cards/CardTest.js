import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Image1 from '../../assets/download.jpg'
import { Avatar} from 'react-native-elements'
import Icon from 'react-native-vector-icons/dist/Ionicons';
export class CardTest extends Component {

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', width: "100%", height: 100, backgroundColor: "#1affff", borderColor: "steelblue", borderWidth: 1, marginBottom: 10,borderRadius:10 }}>
                <View style={{ width: "25%", height: "100%", paddingTop:10 }} >
                    <Avatar
                        large
                        rounded
                        source={Image1}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                </View>
                <View style={{ width: "50%", height: "100%", paddingTop:10}} >
                    <Text style={{ paddingTop: 5, fontSize: 15, fontWeight: "bold", color: "black" }}>Name</Text>
                    <Text style={{fontSize:2}}>Email</Text>
                    
                </View>
                <View style={{ justifyContent:"center",width: "25%", height: "100%"}} >
                    <TouchableOpacity onPress={() => Actions.profile()} style={{ justifyContent:"center",alignItems: "center", borderColor: "steelblue",  width: "100%",borderWidth:1,height: "50%" }}>
                        <Icon
                            name='md-person'
                            size={25}
                            color='steelblue'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent:"center",alignItems: "center", borderColor: "steelblue", width: "100%", height: "50%",borderWidth:1 }}>
                        <Icon
                            name='md-chatboxes'
                            size={25}
                            color='steelblue'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default CardTest

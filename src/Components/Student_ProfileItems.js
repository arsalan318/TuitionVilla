import React, { Component } from 'react'
//import { Icon } from 'react-native-elements'
import { Container, Header, Content, Separator, ListItem, Text, Left, Body, Right, Card, CardItem } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Icon1 from 'react-native-vector-icons/dist/FontAwesome';
import { View,Alert } from 'react-native'
import Icon2 from 'react-native-vector-icons/dist/Entypo';
import { Avatar } from 'react-native-elements'

export class Student_ProfileItems extends Component {
    render() {
        let subjectsRequired = this.props.student.subjects.map((subject, index) => {
            return (
                <ListItem icon key={index} onPress={()=>Alert.alert("Subject"+(index+1),this.props.student.address)}>
                    <Left>
                        <Icon1
                            name='dot-circle-o'
                            size={15}
                            color='black'
                        />
                    </Left>
                    <Body>
                        <Text>{subject}</Text>
                    </Body>

                </ListItem>
            )
        })
        let email=this.props.student.email;
        let address=this.props.student.address;
        if(email.length>14){
            email=email.substring(0, 14)+"...";
        }
        if(address.length>14){
            address=address.substring(0, 14)+"...";
        }

        return (
            <Container>
                <Content>
                    <ListItem icon onPress={()=>Alert.alert("Email",this.props.student.email)}>
                        <Left>
                            <Icon
                                name='md-mail'
                                size={25}
                                color='red'
                            />
                        </Left>
                        <Body>
                            <Text>Email:</Text>
                        </Body>
                        <Right>
                            <Text>
                                {email}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={()=>Alert.alert("Name",this.props.student.name)}>
                        <Left>
                            <Icon
                                name='md-person'
                                size={25}
                                color='orange'
                            />
                        </Left>
                        <Body>
                            <Text>Name:</Text>
                        </Body>
                        <Right>
                            <Text>
                                {this.props.student.name}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={()=>Alert.alert("Contact",this.props.student.phone)}>
                        <Left>
                            <Icon
                                name='md-phone-portrait'
                                size={25}
                                color='blue'
                            />
                        </Left>
                        <Body>
                            <Text>Contact:</Text>
                        </Body>
                        <Right>
                            <Text>
                                {this.props.student.phone}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={()=>Alert.alert("Address",this.props.student.address)}>
                        <Left>
                            <Icon2
                                name='address'
                                size={25}
                                color='green'
                            />
                        </Left>
                        <Body>
                            <Text>Address:</Text>
                        </Body>
                        <Right>
                            <Text>
                             {address} 
                             </Text>
                        </Right>
                    </ListItem>

                    <ListItem icon onPress={()=>Alert.alert("Class",this.props.student.Class)}>
                        <Left>
                            <Icon1
                                name='graduation-cap'
                                size={20}
                                color='black'
                            />
                        </Left>
                        <Body>
                            <Text>Class:</Text>
                        </Body>
                        <Right>
                            <Text>
                                {this.props.student.Class}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={()=>Alert.alert("Age",this.props.student.age)}>
                        <Left>
                            <Icon1
                                name='birthday-cake'
                                size={25}
                                color='pink'
                            />
                        </Left>
                        <Body>
                            <Text>Age:</Text>
                        </Body>
                        <Right>
                            <Text>
                                {this.props.student.age}
                            </Text>
                        </Right>
                    </ListItem>
                    <ListItem icon onPress={()=>Alert.alert("Institute",this.props.student.institute)}>
                        <Left>
                            <Icon1
                                name='institution'
                                size={25}
                                color='brown'
                            />
                        </Left>
                        <Body>
                            <Text>Institute:</Text>
                        </Body>
                        <Right>
                            <Text>
                                {this.props.student.institute}
                            </Text>
                        </Right>
                    </ListItem>
                    <Separator>
                        <View style={{ flexDirection: "row" }}>
                            <Icon1
                                name='book'
                                size={20}
                                color='black'
                            />
                            <Text style={{ fontSize: 15, marginLeft: 5 }}>Required Subjects:</Text>
                        </View>
                    </Separator>
                    {subjectsRequired}

                </Content>
            </Container >
        );
    }
}

export default Student_ProfileItems
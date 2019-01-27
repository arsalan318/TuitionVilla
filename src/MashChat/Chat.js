import React from 'react';
import Backend from './Backend';
import { GiftedChat } from 'react-native-gifted-chat';
//import {StackNavigator} from 'react-navigator';
//import Home from './Home';


//import home for checking
/*
const AppStackNavigator = new StackNavigator({
  WelcomeScreen: { screen: Home},
  LoginScreen: { screen: App },
});
*/
export default class Chat extends React.Component {
  state = {
    messages: [],
  };
  componentWillMount() {

  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          //name: 'android',
          //name from khatri code
          name: this.props.name,
        }}
      />
      //<Text>hello {this.props.navigation.state.params.name}</Text>
    );
  }
  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}
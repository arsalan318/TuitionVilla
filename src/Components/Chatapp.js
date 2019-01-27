import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import logo from "../../Icons/logo.png"
export default class MyChat extends React.Component {
  state = {
    messages: []
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Chat Feature Will be Coming Soon",
          createdAt: new Date(),
          user: {
            _id: 1,
            name: "Developer",
            avatar: {logo}
          }
        }
      ]
    });
  }

  render() {
    return <GiftedChat messages={this.state.messages} />;
  }
}
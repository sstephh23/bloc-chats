import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
          messages: []
        };
        this.MessageList = this.props.firebase.database().ref('messages');
    }

    componentDidMount() {
     this.MessageList.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
     });
    }

    render() {
      return (
       <div>
       {this.state.messages.map((message, room, index) => {
         if (message.roomId === this.props.activeRoom.key) {
          return ( <div key={message.key}> {message.content} </div>)
        } else {
        return null;
        }
      })}
      </div>
    );
   }
}
export default MessageList;

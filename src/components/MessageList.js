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
      this.setState({ messages: this.state.rooms.concat( message ) })
     });
    }

    render() {
      return (
       <div> {this.state.messages.map((message, index) => {
          if (message.roomId === this.props.activeRoom) {
           return (<div key={message.key}> {message.content} </div>)
         } else {
         return null;
         }
       }
       )
       }
      </div>
      ,MessageList.orderByChild("-Le_VZ7fOUu9i-WgWBJb"), function(snapshot){
        console.log(snapshot.key());
      }
    );
   }
}
export default MessageList;
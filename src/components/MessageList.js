import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
          messages: []
        };
        this.messageList = this.props.firebase.database().ref('messages');
        console.log('messageList',this.messageList)
    }

    componentDidMount() {
     this.messageList.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
     });
    }

    handleChange(e) {
    // set a new variable that is a string of the new text
    let newVar = 'new message'
    //this.setState({ messages: e.target.value })
    }

    handleSubmit(e) {
      e.preventDefault();
      this.messageList.push(
        {
          content: 'new message',//this.state.messages,//needs to be set to the newMessage string
          roomId: this.props.activeRoom.key,
          sentAt: 'firebase.database.ServerValue.TIMESTAMP',
          username: this.props.user//wtong method the string of the userName
        }
      );
      this.setState({ messages: [] });
    }

    render() {
      //console.log('messageList console',this.messageList);
      return (
       <section>
         <form onSubmit={ (e) => this.handleSubmit(e) }>
           Add message to {this.props.activeRoom.name}<br/>
           <input type="text" value={ this.props.messages } onChange={ (e) => this.handleChange(e) } />
           <input type="submit" />
         </form>
         <div>
           {this.state.messages.map((message, index) => {
           if (message.roomId === this.props.activeRoom.key) {
               return ( <div key={message.key}>{message.username}: {message.content} </div>)
           } else {
               return null;
           }
           })}
        </div>
      </section>
    );
   }
}
export default MessageList;

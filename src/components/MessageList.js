import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
          messages: ''
        };
        this.messageList = this.props.firebase.database().ref('messages');
    }

    componentDidMount() {
     this.messageList.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
     });
    }

    handleChange(e) {
    this.setState({ messages: e.target.value })
    }

    handleSubmit(e) {
      e.preventDefault();
      this.messageList.push(
        {
          content: this.state.messages,
          roomId: this.props.activeRoom.key,
          sentAt: 'firebase.database.ServerValue.TIMESTAMP',
          username: this.props.setUser
        }
      );
      this.setState({ messages: '' });
    }

    render() {
      return (
       <section>
         <form onSubmit={ (e) => this.handleSubmit(e) }>
           Add message to {this.props.activeRoom.name}<br/>
           <input type="text" value={ this.props.messages } onChange={ (e) => this.handleChange(e) } />
           <input type="submit" />
        </form>
      </section>
    );
   }
}
export default MessageList;

import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);

        this.state = {
          messages: ''
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

    handleChange(e) {
    this.setState({ messages: e.target.value })
    }

    handleSubmit(e) {
    e.preventDefault();
      this.MessageList.push({
        messageContent: this.state.messages
      });
      this.setState({ messages: '' });
    }

    render() {
      return (
       <section>
       <form>
          <input type="text" value={ this.props.messages } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" onSubmit={ (e) => this.handleSubmit(e) }/>
       </form>
       <div>{this.props.user }</div>

      </section>
    );
   }
}
export default MessageList;

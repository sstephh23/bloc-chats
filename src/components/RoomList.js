import React, { Component } from 'react';

class RoomList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: []
        };
        this.roomsRef = this.props.firebase.database().ref('rooms');
    }

    componentDidMount() {
     this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
    });
   }
<<<<<<< HEAD
    render() {
      return (
      <section className='roomdata'>
          {
            this.state.rooms.map( (rooms) =>
            <div key = {index}>
            {rooms.data}
            </div>
            )
          }
          </div>
=======

    render() {
      return (
        <section className='roomdata'>
          {
          this.state.rooms.map( (rooms)=>
            <div key = {rooms} >
          {rooms.name}
            </div>
            )
          }
>>>>>>> list-rooms-chat-assignment
      </section>
      )
    }
}
<<<<<<< HEAD
export default App;
=======
export default RoomList;
>>>>>>> list-rooms-chat-assignment

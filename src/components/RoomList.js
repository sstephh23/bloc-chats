import React, { Component } from 'react';

class RoomList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            newRoomName: ''
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

     handleChange(e) {
     this.setState({ newRoomName:e.target.value })
     }

     handleSubmit(e) {
       e.preventDefault();
       this.roomsRef.push({
         name: this.state.newRoomName
       });
       this.setState({ newRoomName: '' });
     }

    render() {
      return (
      <section className='roomdata'>
          {
            this.state.rooms.map( (room, index) =>
              <div key = {index} onClick= {(e) => this.props.selectRoom(room)}>
                {room.name}
              </div>
            )
          }
          <form onSubmit={ (e) => this.handleSubmit(e) }>
              <input type="text" value={ this.state.newRoomName } onChange={ (e) => this.handleChange(e) } />
              <input type="submit" />
          </form>
      </section>
      )
    }
}
export default RoomList;

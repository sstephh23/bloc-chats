import React, { Component } from 'react';

class RoomList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rooms: [],
            newRoomName: ''
        };

        this.roomsRef = this.props.firebase.database().ref('rooms');
        this.roomsRef.push({
          name: ''
        });
    }


     componentDidMount() {
      this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;
       this.setState({ rooms: this.state.rooms.concat( room ) })
      });
     }

     handleChange(e) {
      this.setState({ newRoomName: e.target.value })
     }

     handleSubmit(e) {
      e.preventDefault();
      const newRoom = { description: this.state.newRoomName };
      this.setState({ rooms: [...this.state.newRoomName, newRoom] });
     }

    render() {
      return (
      <section className='roomdata'>
          {
            this.state.rooms.map( (rooms) =>
              <div key = {rooms}>
                {rooms.name}
              </div>
            )
          }
      <form onSubmit={ (e) => this.handleSubmit(e) }>
        <input type="text" value={ this.state.newRoomName } onChange={ (e) => this.handleChange(e) } />
        <input type="submit"/>
      </form>
      </section>
      )
    }
}
export default RoomList;

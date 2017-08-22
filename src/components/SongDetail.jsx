import React from 'react';

class SongDetail extends React.Component {
  render(){
    if(!this.props.song){
      return null;
    }
    return (
      <div>
      <h3>{this.props.song.position}</h3>
      <p>{this.props.song.artist}</p>
      <p>{this.props.song.title}</p>
      </div>
    );
  }
}

export default SongDetail;

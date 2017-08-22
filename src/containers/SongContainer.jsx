import React from 'react';
import SongSelector from '../components/SongSelector';
import SongDetail from '../components/SongDetail';

class SongContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      focusSong: null
    };
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.addEventListener("load", () => {
      if(request.status === 200){
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({
          songs: data
        })
      }
    });
    request.send();
  }

  render(){
    return (
      <div>
        <h2>Song Container</h2>
        <SongSelector songs={this.state.songs}
         />
        <SongDetail Song={this.state.focusSong} />
      </div>
    );
  }
}

export default SongContainer;

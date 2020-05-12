import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: []
  }

  fetchSongs = () => {
    fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(songs => {
      console.log("SONGS", songs);
      this.setState({...this.state, songs});
    })
    .catch(err => console.error("error", err));
  };
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.fetchSongs /* TODO: Put your method to fetch the songs */}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs={this.state.songs} /> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;

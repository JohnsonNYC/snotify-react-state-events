import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs: []
  }
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.getSongs}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  getSongs = () => {
    fetch(API_ENDPOINT)
    .then(res => res.json())
    .then(songData => this.setState({songs: songData}))
  }
  
  handleFavorite = (id) => {
    console.log(id)
    console.log(this.state.songs.find(song => song.id === id))
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer handleFavorite={this.handleFavorite}songs={this.state.songs}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;

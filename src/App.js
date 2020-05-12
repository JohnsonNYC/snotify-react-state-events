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
    .then(songs => this.setState({ songs }))
  }

  updateLikes = (newLike) => {
    
  }

  render(){
    console.log('this app state', this.state)
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer allSongs={this.state.songs}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;

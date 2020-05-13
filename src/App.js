import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

let API_ENDPOINT = `http://localhost:6001/songs`

class App extends React.Component {
  state = {
    songs:[]
  }

toggleFavorite=(id, newValue)=>{
  console.log('toggle',id, newValue)
  fetch(API_ENDPOINT+`/${id}`,{
    method: "PATCH",
    headers:{
      "Content-Type":'application/json',
      Accept:'application/json'
    },
    body: JSON.stringify({
      favorite: newValue
    })
  })
  .then(resp => resp.json())
  .then(newFav => {
    const copy = this.state.songs.map((song)=>{ 
      if(newFav.id === song.id){ // return (newFav.id===song.id)? newFav : song
        return newFav
      }else{
        return song
      }
    })
    this.setState({
      songs: copy
    })
  })
}

  getData=()=>{
    fetch(API_ENDPOINT)
    .then(resp=> resp.json())
    .then(songs => this.setState({songs}))
  }
  
  renderNav = () => {
    return (
      <div className="simple-flex-row">
        <button onClick={this.getData}>Get Songs</button> 
        <h1>S-not-ify 🐽</h1>
        <input placeholder="Search by title or artist..."/>
      </div>
    )
  }

  render(){
    return (
      <div className="App">
        {this.renderNav()} {/** The renderNav method renders a div holding the button to get songs and the title */}
        <MainContainer songs ={this.state.songs} toggleFavorite={this.toggleFavorite}/> {/** TODO: What props do I need? */}
      </div>
    );
  }
}

export default App;

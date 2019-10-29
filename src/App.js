import React, { Component } from 'react';
import './App.css';
import { FaPlus, 
        FaMinus,
        FaChevronRight,
        FaChevronLeft,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import SpotifyWebApi from 'spotify-web-api-js';
import { importDeclaration } from '@babel/types';
import Cred from './credientals'

import SpotifyLogin from 'react-spotify-login';




var spotifyApi = new SpotifyWebApi();
class App extends Component {
  constructor(){
    super();

  
    this.state = {
      images: false,
      currentlyPlaying: null,
      Artists: {},
      token: null
    }
  }

  onSuccess=(response)=>{
    spotifyApi.setAccessToken(response.access_token)
    this.setState({token: response.access_token})
  }



  incrementSong=(ArtistID)=>{
   let index = this.state.Artists[ArtistID]['CurrentPlaying']
   let len = this.state.Artist[ArtistID].songDict.length
   console.log(index)
   console.log(len)
   this.setState(prevState => {
    let Artist = Object.assign({}, prevState.Artists);  // creating copy of state variable jasper
    Artist[ArtistID]['CurrentPlaying'] =  index+1===len ? 0 : index+1   // update the name property, assign a new value                 
    return {Artist};                                 // return new object jasper object
  })
  console.log(this.state.Artists[ArtistID]['CurrentPlaying'])
  }

  decrementSong=(ArtistID)=>{
    let index = this.state.Artists[ArtistID]['CurrentPlaying']
    let len = this.state.Artist[ArtistID].songDict.length
    console.log(index)
    console.log(len)
    this.setState(prevState => {
     let Artist = Object.assign({}, prevState.Artists);  // creating copy of state variable jasper
     Artist[ArtistID]['CurrentPlaying'] =  index-1===-1 ? len-1 : index-1   // update the name property, assign a new value                 
     return {Artist};                                 // return new object jasper object
   })
   console.log(this.state.Artists[ArtistID]['CurrentPlaying'])
   }
  
  makeSongDict=(response,artistID)=>{
    this.setState(prevState => {
      let Artist = Object.assign({}, prevState.Artists);  // creating copy of state variable jasper
      Artist[artistID]['songDict'] =  response.tracks.map((track)=>{
          return  track.preview_url
      })                  // update the name property, assign a new value                 
      return {Artist};                                 // return new object jasper object
    })
  }





  getTopArtists=()=>{
    spotifyApi.getMyTopArtists()
    .then((response)=>{
      response.items.forEach((artist)=> { 
        this.setState(({ Artists }) => ({
         Artists: {
           ...Artists,
           [artist.id]: {"Image": artist.images ? artist.images[0].url : 'https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg', 
           "Name": artist.name, 
           "songDict": null, 
           "Pop": artist.popularity,
           "CurrentPlaying": 0,
            "CurrentlyShown": null }
         }
       }))
  })  
      this.setState({
          images: response.items.map(function (artist) { 
      return {"Artist": artist.name, 
              "Image": artist.images ? artist.images[0].url : 'https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg', 
              "ID": artist.id}
       }) 
    })
  })
  }



getRelatedArtists=(ArtistID)=>{
  console.log(ArtistID)
  spotifyApi.getArtistRelatedArtists(ArtistID)
  .then((response)=>{
    response.artists.forEach((artist)=> { 
      this.setState(({ Artists }) => ({
       Artists: {
         ...Artists,
         [artist.id]: {
          "Image": artist.images ? artist.images[0].url : 'https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg', 
         "Name": artist.name, 
         "songDict": null, 
         "Pop": artist.popularity,
         "CurrentPlaying": 0,
          "CurrentlyShown": null }
       }
     }))
   })  
    this.setState({
        images: response.artists.map(function (artist) { 
    return {"Artist": artist.name, 
    "Image": artist.images ? artist.images[0].url : 'https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg', 
            "ID": artist.id }
     }) 
  })
})
}


playMusic=(artistID)=>{
  if (!this.state.Artists[artistID].songDict){
  spotifyApi.getArtistTopTracks(artistID,"US")
  .then((response)=>{ 
    this.makeSongDict(response,artistID)
    this.state.currentlyPlaying && this.state.currentlyPlaying.pause()

    let index = this.state.Artists[artistID].CurrentPlaying
    this.setState({
        currentlyPlaying: new Audio(this.state.Artists[artistID].songDict[index]) || null
     }) 
     this.state.currentlyPlaying && this.state.currentlyPlaying.play()
     console.log(this.state.Artists)
  }) }
  else{
    this.state.currentlyPlaying && this.state.currentlyPlaying.pause()
    let index = this.state.Artists[artistID].CurrentPlaying
    this.setState({
        currentlyPlaying: new Audio(this.state.Artists[artistID].songDict[index]) || null
     },()=>{
     this.state.currentlyPlaying.play()})
     console.log(this.state.Artists)
  }
}


saveSong=(artistID)=>{
  spotifyApi.getArtistTopTracks(artistID,"US")
  .then((response)=>{ 
    let index= this.state.Artists[artistID].CurrentPlaying
     let id = response.tracks[index].id
     spotifyApi.addToMySavedTracks([id]).then((response)=>console.log(response))
     })
}

stopMusic=()=>{
  this.state.currentlyPlaying && this.state.currentlyPlaying.pause()
  this.setState({
    currentlyPlaying: null
 }) 
}

  render() {
    return (
    
      <div className="App">
        
        <SpotifyLogin 
        clientId= {Cred['ClientID']}
        redirectUri= {Cred['redirectUri']}
        scope= 'user-read-private user-read-email user-library-read user-top-read user-library-modify'
        onSuccess={ (response)=>{this.onSuccess(response)} }
        />
          
        <div className="containerParent">
      
      {this.state.images && this.state.images.map((img) => (
       
        <div key= {img.ID} className="container">
        < img key= {img.Name} 
        className="circular--portrait" 
        alt={img.Artist} 
        src = {img.Image} 
        onClick={()=>this.getRelatedArtists(img.ID)}
        onMouseEnter={()=>this.playMusic(img.ID)}
        onMouseOut={()=>this.stopMusic()}
         />
        <div  key= {img.Name} className="centered">{img.Artist}</div>
     
       
      <h1 className='Popularity'>{this.state.Artists[img.ID].Pop}</h1>
      <FaPlus className='green-plus' size={35} onClick={()=>this.saveSong(img.ID)}/>
      <FaChevronLeft className='chevron-left' size={20} onClick={()=>this.decrementSong(img.ID)} />
      <FaChevronRight className='chevron-right' size={20} onClick={()=>this.incrementSong(img.ID)} />
         </div>
       
          ))}
           
        </div>
      
       
        {this.state.token &&
          <button onClick={() => this.getTopArtists()}>
            Get Top Artists
          </button>
        }
      </div>
      
    );
  }
}

export default App;
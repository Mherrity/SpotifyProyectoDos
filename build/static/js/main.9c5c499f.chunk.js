(window.webpackJsonpspotifyapp=window.webpackJsonpspotifyapp||[]).push([[0],{103:function(t,e,n){},104:function(t,e,n){},245:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),s=n(87),i=n.n(s),o=(n(103),n(24)),c=n(88),l=n(89),u=n(96),g=n(90),m=n(97),p=(n(104),n(25)),y=(n(0),n(91)),f=n.n(y),d=(n(105),n(95)),h=n(92),A=n.n(h);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(n,!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b=new f.a,O=function(t){function e(){var t;Object(c.a)(this,e),(t=Object(u.a)(this,Object(g.a)(e).call(this))).incrementSong=function(e){var n=t.state.Artists[e].CurrentPlaying,r=t.state.Artist[e].songDict.length;console.log(n),console.log(r),t.setState((function(t){var a=Object.assign({},t.Artists);return a[e].CurrentPlaying=n+1===r?0:n+1,{Artist:a}})),console.log(t.state.Artists[e].CurrentPlaying)},t.decrementSong=function(e){var n=t.state.Artists[e].CurrentPlaying,r=t.state.Artist[e].songDict.length;console.log(n),console.log(r),t.setState((function(t){var a=Object.assign({},t.Artists);return a[e].CurrentPlaying=n-1===-1?r-1:n-1,{Artist:a}})),console.log(t.state.Artists[e].CurrentPlaying)},t.makeSongDict=function(e,n){t.setState((function(t){var r=Object.assign({},t.Artists);return r[n].songDict=e.tracks.map((function(t){return t.preview_url})),{Artist:r}}))},t.getTopArtists=function(){b.getMyTopArtists().then((function(e){e.items.forEach((function(e){t.setState((function(t){return{Artists:v({},t.Artists,Object(o.a)({},e.id,{Image:e.images?e.images[0].url:"https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg",Name:e.name,songDict:null,Pop:e.popularity,CurrentPlaying:0,CurrentlyShown:null}))}}))})),t.setState({images:e.items.map((function(t){return{Artist:t.name,Image:t.images?t.images[0].url:"https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg",ID:t.id}}))})}))},t.getRelatedArtists=function(e){console.log(e),b.getArtistRelatedArtists(e).then((function(e){e.artists.forEach((function(e){t.setState((function(t){return{Artists:v({},t.Artists,Object(o.a)({},e.id,{Image:e.images?e.images[0].url:"https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg",Name:e.name,songDict:null,Pop:e.popularity,CurrentPlaying:0,CurrentlyShown:null}))}}))})),t.setState({images:e.artists.map((function(t){return{Artist:t.name,Image:t.images?t.images[0].url:"https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg",ID:t.id}}))})}))},t.playMusic=function(e){if(t.state.Artists[e].songDict){t.state.currentlyPlaying&&t.state.currentlyPlaying.pause();var n=t.state.Artists[e].CurrentPlaying;t.setState({currentlyPlaying:new Audio(t.state.Artists[e].songDict[n])||null},(function(){t.state.currentlyPlaying.play()})),console.log(t.state.Artists)}else b.getArtistTopTracks(e,"US").then((function(n){t.makeSongDict(n,e),t.state.currentlyPlaying&&t.state.currentlyPlaying.pause();var r=t.state.Artists[e].CurrentPlaying;t.setState({currentlyPlaying:new Audio(t.state.Artists[e].songDict[r])||null}),t.state.currentlyPlaying&&t.state.currentlyPlaying.play(),console.log(t.state.Artists)}))},t.saveSong=function(e){b.getArtistTopTracks(e,"US").then((function(n){var r=t.state.Artists[e].CurrentPlaying,a=n.tracks[r].id;b.addToMySavedTracks([a]).then((function(t){return console.log(t)}))}))},t.stopMusic=function(){t.state.currentlyPlaying&&t.state.currentlyPlaying.pause(),t.setState({currentlyPlaying:null})};var n=t.getHashParams().access_token;return n&&b.setAccessToken(n),t.state={loggedIn:!!n,images:!1,currentlyPlaying:null,Artists:{}},t}return Object(m.a)(e,t),Object(l.a)(e,[{key:"getHashParams",value:function(){var t,e={},n=/([^&;=]+)=?([^&;]*)/g,r=window.location.hash.substring(1);for(t=n.exec(r);t;)e[t[1]]=decodeURIComponent(t[2]),t=n.exec(r);return e}},{key:"render",value:function(){var t=this;return a.a.createElement(d.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("button",null,"Login To Spotify "),a.a.createElement(A.a,{clientId:"e5a3b8fc89bc4329808110b17b0ab96e",redirectUri:"https://mherrity.github.io/SpotifyProyectoDos",scope:"user-read-private user-read-email user-library-read user-top-read user-library-modify",buttontext:!0}),a.a.createElement("div",{className:"containerParent"},this.state.images&&this.state.images.map((function(e){return a.a.createElement("div",{key:e.ID,className:"container"},a.a.createElement("img",{key:e.Name,className:"circular--portrait",alt:e.Artist,src:e.Image,onClick:function(){return t.getRelatedArtists(e.ID)},onMouseEnter:function(){return t.playMusic(e.ID)},onMouseOut:function(){return t.stopMusic()}}),a.a.createElement("div",{key:e.Name,className:"centered"},e.Artist),a.a.createElement("h1",{className:"Popularity"},t.state.Artists[e.ID].Pop),a.a.createElement(p.c,{className:"green-plus",size:35,onClick:function(){return t.saveSong(e.ID)}}),a.a.createElement(p.a,{className:"chevron-left",size:20,onClick:function(){return t.decrementSong(e.ID)}}),a.a.createElement(p.b,{className:"chevron-right",size:20,onClick:function(){return t.incrementSong(e.ID)}}))}))),this.state.loggedIn&&a.a.createElement("button",{onClick:function(){return t.getTopArtists()}},"Get Top Artists")))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},98:function(t,e,n){t.exports=n(245)}},[[98,1,2]]]);
//# sourceMappingURL=main.9c5c499f.chunk.js.map
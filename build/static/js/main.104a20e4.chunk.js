(window.webpackJsonpspotifyapp=window.webpackJsonpspotifyapp||[]).push([[0],{233:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),s=n(81),i=n.n(s),o=(n(94),n(23)),c=n(82),l=n(83),u=n(87),g=n(84),m=n(88),p=(n(95),n(24)),y=(n(0),n(85)),f=n.n(y),d=(n(96),n(86)),h=n.n(d);function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(n,!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v=new f.a,b=function(t){function e(){var t;Object(c.a)(this,e),(t=Object(u.a)(this,Object(g.a)(e).call(this))).incrementSong=function(e){var n=t.state.Artists[e].CurrentPlaying,r=t.state.Artist[e].songDict.length;console.log(n),console.log(r),t.setState((function(t){var a=Object.assign({},t.Artists);return a[e].CurrentPlaying=n+1===r?0:n+1,{Artist:a}})),console.log(t.state.Artists[e].CurrentPlaying)},t.decrementSong=function(e){var n=t.state.Artists[e].CurrentPlaying,r=t.state.Artist[e].songDict.length;console.log(n),console.log(r),t.setState((function(t){var a=Object.assign({},t.Artists);return a[e].CurrentPlaying=n-1===-1?r-1:n-1,{Artist:a}})),console.log(t.state.Artists[e].CurrentPlaying)},t.makeSongDict=function(e,n){t.setState((function(t){var r=Object.assign({},t.Artists);return r[n].songDict=e.tracks.map((function(t){return t.preview_url})),{Artist:r}}))},t.getTopArtists=function(){v.getMyTopArtists().then((function(e){e.items.forEach((function(e){t.setState((function(t){return{Artists:P({},t.Artists,Object(o.a)({},e.id,{Image:e.images?e.images[0].url:"https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg",Name:e.name,songDict:null,Pop:e.popularity,CurrentPlaying:0,CurrentlyShown:null}))}}))})),t.setState({images:e.items.map((function(t){return{Artist:t.name,Image:t.images?t.images[0].url:"https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg",ID:t.id}}))})}))},t.getRelatedArtists=function(e){console.log(e),v.getArtistRelatedArtists(e).then((function(e){e.artists.forEach((function(e){t.setState((function(t){return{Artists:P({},t.Artists,Object(o.a)({},e.id,{Image:e.images?e.images[0].url:"https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg",Name:e.name,songDict:null,Pop:e.popularity,CurrentPlaying:0,CurrentlyShown:null}))}}))})),t.setState({images:e.artists.map((function(t){return{Artist:t.name,Image:t.images?t.images[0].url:"https://i1.sndcdn.com/avatars-000047137234-96td0a-t500x500.jpg",ID:t.id}}))})}))},t.playMusic=function(e){if(t.state.Artists[e].songDict){t.state.currentlyPlaying&&t.state.currentlyPlaying.pause();var n=t.state.Artists[e].CurrentPlaying;t.setState({currentlyPlaying:new Audio(t.state.Artists[e].songDict[n])||null},(function(){t.state.currentlyPlaying.play()})),console.log(t.state.Artists)}else v.getArtistTopTracks(e,"US").then((function(n){t.makeSongDict(n,e),t.state.currentlyPlaying&&t.state.currentlyPlaying.pause();var r=t.state.Artists[e].CurrentPlaying;t.setState({currentlyPlaying:new Audio(t.state.Artists[e].songDict[r])||null}),t.state.currentlyPlaying&&t.state.currentlyPlaying.play(),console.log(t.state.Artists)}))},t.saveSong=function(e){v.getArtistTopTracks(e,"US").then((function(n){var r=t.state.Artists[e].CurrentPlaying,a=n.tracks[r].id;v.addToMySavedTracks([a]).then((function(t){return console.log(t)}))}))},t.stopMusic=function(){t.state.currentlyPlaying&&t.state.currentlyPlaying.pause(),t.setState({currentlyPlaying:null})};var n=t.getHashParams().access_token;return n&&(v.setAccessToken(n),t.setState({loggedIn:!0})),t.state={images:!1,currentlyPlaying:null,Artists:{},loggedIn:!1},t}return Object(m.a)(e,t),Object(l.a)(e,[{key:"getHashParams",value:function(){var t,e={},n=/([^&;=]+)=?([^&;]*)/g,r=window.location.hash.substring(1);for(t=n.exec(r);t;)e[t[1]]=decodeURIComponent(t[2]),t=n.exec(r);return e}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"App"},a.a.createElement(h.a,{clientId:"e5a3b8fc89bc4329808110b17b0ab96e",redirectUri:"https://mherrity.github.io/SpotifyProyectoDos",scope:"user-read-private user-read-email user-library-read user-top-read user-library-modify",buttontext:!0}),a.a.createElement("div",{className:"containerParent"},this.state.images&&this.state.images.map((function(e){return a.a.createElement("div",{key:e.ID,className:"container"},a.a.createElement("img",{key:e.Name,className:"circular--portrait",alt:e.Artist,src:e.Image,onClick:function(){return t.getRelatedArtists(e.ID)},onMouseEnter:function(){return t.playMusic(e.ID)},onMouseOut:function(){return t.stopMusic()}}),a.a.createElement("div",{key:e.Name,className:"centered"},e.Artist),a.a.createElement("h1",{className:"Popularity"},t.state.Artists[e.ID].Pop),a.a.createElement(p.c,{className:"green-plus",size:35,onClick:function(){return t.saveSong(e.ID)}}),a.a.createElement(p.a,{className:"chevron-left",size:20,onClick:function(){return t.decrementSong(e.ID)}}),a.a.createElement(p.b,{className:"chevron-right",size:20,onClick:function(){return t.incrementSong(e.ID)}}))}))),this.state.loggedIn&&a.a.createElement("button",{onClick:function(){return t.getTopArtists()}},"Get Top Artists"))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},89:function(t,e,n){t.exports=n(233)},94:function(t,e,n){},95:function(t,e,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.104a20e4.chunk.js.map
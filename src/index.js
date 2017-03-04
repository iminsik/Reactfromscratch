import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/Main';
import SongList from './components/SongList';

//./components/Main.js

// Render the main component into the dom
ReactDOM.render(<SongList />, document.getElementById('app'));

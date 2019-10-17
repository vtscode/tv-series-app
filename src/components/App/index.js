import React, { Component } from 'react';
// import logo from './logo.svg';
import Main from '../Main';
import './App.css';
import 'whatwg-fetch';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <h1 className="App-title">TV Series List</h1>
//       </header>
//       <Intro />
//     </div>
//   );
// }

class App extends Component{

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        <Main />
        </header>
      </div>
    );
  }
}

export default App;

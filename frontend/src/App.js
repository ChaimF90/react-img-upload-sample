import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      img: ''
    }
  }

  changeHandler(e) {
    const fd = new FormData();
    fd.append('sample', e.target.files[0]);
    axios.post('/save-image', fd).then(i => {
      this.setState({img: i.data.filename});
    });
  }

  render() {
    return (
      <div className="App">
       <input type="file" name="file" onChange={this.changeHandler.bind(this)} />
       <br />
       <img alt={''} src={'/images/' + this.state.img} />
      </div>
    );
  }
}

export default App;

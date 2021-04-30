import React, {Component} from "react";
//import ReactDom from 'react-dom';
import axios from 'axios';
import SearchBar from "./search-bar.component";
class App extends Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos',{
    params:{query:term},  
    headers:{ 
        Authorization: 'Client-ID JbFsBbTZ1dtyrUjQ22f8zU-Z-SsVKD7VOamCADLWvFU'
      }
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;


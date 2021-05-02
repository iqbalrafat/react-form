import React, {Component} from "react";
//import ReactDom from 'react-dom';
import ImageList from './imgae-list.component';
import unsplash from '../api/unsplash';
import SearchBar from './search-bar.component';
class App extends Component {
  state={images:[]}

 onSearchSubmit = async (term) => {
  const response =  await unsplash.get('/search/photos',{
    params:{query:term} 
  });
    this.setState({images:response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;


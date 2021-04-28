import React, { Component } from "react";
//import ReactDom from 'react-dom';

class SearchBar extends Component {
 
  render() {
    return (
      <div className="ui system">
        <form className="ui form">
          <div className="field">
            <label>Search Bar</label>
            <input type="text" onChange={(event)=>{console.log(event.target.value)}}/>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;

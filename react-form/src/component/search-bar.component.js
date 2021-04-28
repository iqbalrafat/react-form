import React, { Component } from "react";
//import ReactDom from 'react-dom';

class SearchBar extends Component {
  state = { term: "" };
  render() {
    console.log(this.sate)
    return (
      <div className="ui system">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>

            <input
              type="text"
              value={this.state.term}
              onChange={e=>this.setState({term :e.target.value})}              
            />
           
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;

import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <h3 id="search" >Search</h3>
        <input
          type="text"
          id="search"
          onChange={this.props.handleSearch}
          placeholder="Search for meals..."
        />
      </div>
    );
  }
}

export default Search;
import React from 'react'; //babel will use React.createElement


class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state={ term: ''}
  }

  onInputChange = (e) => {
    console.log(e.target.value)
  }

  render() {
    return(
      <input onChange={this.onInputChange}/>
    )
  }
}


export default SearchBar;

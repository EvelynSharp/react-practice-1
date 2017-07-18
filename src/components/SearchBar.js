import React from 'react'; //babel will use React.createElement


class SearchBar extends React.Component {

  constructor(props) {
    super(props); //the parent component's props passed on
    this.state={ term: ''}
  }


  render() {
    return(
      <div>
        <input
          value = { this.state.term }
          onChange={ event => this.setState({ term: event.target.value }) }
        />
      </div>
    )
  }
}


export default SearchBar;

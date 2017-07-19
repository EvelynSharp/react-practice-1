import React from 'react'; //babel will use React.createElement


class SearchBar extends React.Component {

  constructor(props) {
    super(props); //the parent component's props passed on
    this.state={ term: ''}
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return(
      <div className='search-bar'>
        <input
          value = { this.state.term }
          onChange={ event => this.onInputChange(event.target.value) }
        />
      </div>
    )
  }
}


export default SearchBar;

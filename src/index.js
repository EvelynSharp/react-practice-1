import React from 'react';
import ReactDom from 'react-dom';
//make a component which produce html
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import{ YOUTUBE_DATA_API_KEY } from './keys'
const API_KEY = YOUTUBE_DATA_API_KEY;


//const as will never reassign App
class App extends React.Component {
constructor(props) {
  super(props);
  this.state={ videos: [] };

  YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
    this.setState({ videos })
  });
}

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />

      </div>
    );
  }
}

//take the generated html and put in DOM
//need to tell where -> the second argument
//-> existing index.html element -> it's the root container
ReactDom.render(<App />, document.querySelector('.container'));

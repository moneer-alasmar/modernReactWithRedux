// IMPORTING REACT
import React, { Component } from 'react';

// IMPORTING REACT DOM
import ReactDOM from 'react-dom';

// IMPORT SEARCHBAR
import SearchBar from './components/search_bar';

// IMPORT VIDEO LIST
import VideoList from './components/video_list';

// IMPORT CONFIG
import { myConfig } from './components/config';

// IMPORT YOUTUBE-API-SEARCH
import YTSearch from 'youtube-api-search';

// IMPORT VIDEO DETAIL
import VideoDetail from './components/video_detail';

const API_KEY = myConfig.API_KEY;

// CREATE A NEW COMPONENT. THIS COMPONENT SHOULD PRODUCE HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [], 
      selectedVideo: null
    };

    this.videoSearch('cheetahs');
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render () {
    return (
    <div>
      <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
    </div>
    );
  }
}

// TAKE COMPONENT'S GENERATED HTML AND PUT IT ON THE PAGE(IN THE DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
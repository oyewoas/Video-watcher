
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';




// Youtube API KEY
const API_KEY = 'AIzaSyDD9Mq3x1hClyWoEK2iXqH0IEz3n41iXrA';

class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };


        
        this.videoSearch('surfboards')
    }

    videoSearch(term){
            YTSearch ({key: API_KEY, term: term}, (videos) => {
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
                //Get resolved as this.setState({videos: videos})
            });
        }
    
    render () {
        // Using Loadash to limit the seconds it takes for the searched video to load up
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300 )
        return (
            <div>
                <SearchBar onSearchTermChange = { videoSearch}/>
                <VideoDetail video = { this.state.selectedVideo }/>
                <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos = { this.state.videos }/>

            </div>  
        ) 
    }
   
}

ReactDOM.render(<App />, document.querySelector('.container'));
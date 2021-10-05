import './App.css';
import React from 'react';
import {Grid} from '@mui/material'
import Header from './Components/Header/Header';
import RecommendedVideos from './Components/RecommendedVideos/RecommendedVideos';
import Sidebar from './Components/Sidebar/Sidebar';
import {BrowserRouter as Router , Switch,Route } from 'react-router-dom';
import SearchPage from './Components/SearchPage/SearchPage';
import youtube from './api/Youtube';
import VideoDetail from './Components/VideoDetail/VideoDetail'

class App extends React.Component {
  state={
    video:[],
    selectedVideo:null,
  }
  componentDidMount(){
    this.handleSubmit('JavaScript ES6 and ES7 features')
  }
  handleSubmit=async (searchTerm)=>{
    const response = await youtube.get('search',{
        params:{
            part:'snippet',
            maxResult:5,
            key: '[API KEY]',
            q:searchTerm,
        }
        
    });
    console.log(response.data.items)
  this.setState({video: response.data.items, selectedVideo:response.data.items[0]});
}

onVideoSelect = (v)=>{
  this.setState({selectedVideo:v});
}

  render(){
    const {selectedVideo ,video} = this.state;
    return (
      <div className="app">
        <Router>
          <Header handleSubmit={this.handleSubmit}/>
          <Switch>
            <Route path="/search/:searchTerm">
              <div className="app__page">
                  <Sidebar />
                  <SearchPage />
                </div>
            </Route>
            <Route path="/" exact>
              <div className="app__page">
                <Sidebar />
               
                <Grid   item xs={8}>
                   <VideoDetail  video={selectedVideo}/>
                </Grid>
                <Grid item xs={4}>
                  <RecommendedVideos video={video} onVideoSelect={this.onVideoSelect}/>
                </Grid>
              </div>
            </Route>
          </Switch>
        </Router>
       
      </div>
    );
  }
}

export default App;

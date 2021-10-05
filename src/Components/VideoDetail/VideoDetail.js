import React from 'react'
import {Paper} from '@mui/material';
import {Avatar} from '@mui/material';
import './VideoDetail.css';

function VideoDetail({video}) {
    if(!video) return <h2 style={{margin:"30px 50px"}}> Loading ...</h2>

    const videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="card">
            <Paper elevation={6} className="card-img">
            <iframe frameBorder="0" height="100%" width="100%" title="video" src={videoSrc}   />
        </Paper>
        <Paper className="card-text" elevation={6}>
            <Avatar
             src={video.snippet.thumbnails.default.url}
            />
           <div className="card-desc">
               <h2>{video.snippet.title}</h2>
                <h3>{video.snippet.channelTitle}</h3>
                <p>{video.snippet.description}</p>
           </div>
        </Paper>
        </div>
    )
}

export default VideoDetail

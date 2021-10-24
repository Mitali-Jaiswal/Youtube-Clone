import './VideoCard.css';
import React from 'react';
import Avatar from '@mui/material/Avatar';


function VideoCard({v, onVideoSelect}) {
    
    return (
        <div className="videoCard" onClick={()=>onVideoSelect(v)}>
            <img  className="videoCard__image" src={v.snippet.thumbnails.medium.url} alt="" />
            <div className="videoCard__info">
            <Avatar 
                className="videoCard-avatar"
                alt={v.snippet.channelTittle} 
                src={v.snippet.thumbnails.default.url} 
            />
            <div className="video__text">
                <h4>{v.snippet.title}</h4>
                <p>{v.snippet.channelTitle}</p>
                
            </div>
            </div>
            
        </div>
    )
}

export default VideoCard

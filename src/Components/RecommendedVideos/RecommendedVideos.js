import React from 'react'
import './RecommendedVideo.css';
import VideoCard from './VideoCard';
function RecommendedVideos({video,onVideoSelect}) {
        return (
        <div className="recomendedvideos">
            {video.map((v,id)=><VideoCard onVideoSelect={onVideoSelect} key={id} v={v}/>)}
        </div>
    )
}

export default RecommendedVideos




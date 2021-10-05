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




{/* <h2>Recommended</h2>
            <div className="videos">
                <VideoCard
                    image="https://i.ytimg.com/vi/QFaFIcGhPoM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAcvStMaS1_LxlRglvTj1YxPlVf4w"
                    title="ReactJS Tutorial - 1 - Introduction" 
                    channel="Codevolution" 
                    views="1,650,302 views" 
                    timestamp="Oct 22, 2018" 
                    channelImg="https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s88-c-k-c0x00ffffff-no-rj" 
                 />
                  <VideoCard
                    image="https://i.ytimg.com/vi/QFaFIcGhPoM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAcvStMaS1_LxlRglvTj1YxPlVf4w"
                    title="ReactJS Tutorial - 1 - Introduction" 
                    channel="Codevolution" 
                    views="1,650,302 views" 
                    timestamp="Oct 22, 2018" 
                    channelImg="https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s88-c-k-c0x00ffffff-no-rj" 
                 />
                  <VideoCard
                    image="https://i.ytimg.com/vi/QFaFIcGhPoM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAcvStMaS1_LxlRglvTj1YxPlVf4w"
                    title="ReactJS Tutorial - 1 - Introduction" 
                    channel="Codevolution" 
                    views="1,650,302 views" 
                    timestamp="Oct 22, 2018" 
                    channelImg="https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s88-c-k-c0x00ffffff-no-rj" 
                 />
            </div> */}

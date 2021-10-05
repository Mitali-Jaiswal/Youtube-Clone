import './SearchPage.css';
import React from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://yt3.ggpht.com/os7Yw6RimtysXXpc8NrXraci87TjXgZSUQyAezi0D3RrNL3YP5riIwi1-0al4Wz0XwzH6oBu6g=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Codevolution"
            verified
            subscription="312K subscribers"
            noOfVideos="932"
            description="Tutorials on the latest tech in web development!"
            />
            <hr/>
            <VideoRow 
            views="222"
            description="React Query Tutorial on Fetching Data with useQuery
            useQuery Hook"
            timestamp="Oct 4, 2021"
            channel="Codevolution"
            title="React Query Tutorial - 3 - Fetching Data with useQuery"
            image="https://i.ytimg.com/vi/QFaFIcGhPoM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAcvStMaS1_LxlRglvTj1YxPlVf4w"
            />
             <VideoRow 
            views="222"
            description="React Query Tutorial on Fetching Data with useQuery
            useQuery Hook"
            timestamp="Oct 4, 2021"
            channel="Codevolution"
            title="React Query Tutorial - 3 - Fetching Data with useQuery"
            image="https://i.ytimg.com/vi/QFaFIcGhPoM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAcvStMaS1_LxlRglvTj1YxPlVf4w"
            />
        </div>
    )
}

export default SearchPage

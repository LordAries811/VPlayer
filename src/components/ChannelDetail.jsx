// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import { Box } from '@mui/material'
// import ChannelCard from './ChannelCard';
// import Videos from './Videos';
// import {fetchFromAPI} from "../utils/fetchFromAPI";
// import zIndex from '@mui/material/styles/zIndex';

// const ChannelDetail = () => {
//   const [channelDetail,setchannelDetail]=useState();
//   const [videos,setVideos]=useState([]);
//   const {id} = useParams();

//   useEffect(()=>{
//     fetchFromAPI(`channels?part="snippet&id=${id}`)
//     .then((data)=>setchannelDetail(data?.items[0]));

//     fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
//     .then((data)=>setVideos(data?.items));
//   },[id]);

//   return (
//     <Box
//     minHeight="95vh"
//     alignItems="center"
//     justifyContent="center">
//       <div
//       style={{
//         background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
//         height:"25vh",
//         //zIndex:10
//       }}/>
      
//       <ChannelCard channelDetail={channelDetail}
//       marginTop="-124px"/>

//       <Box>  
//         <Videos videos={videos}/>
//       </Box>
      
//     </Box>
//   )
// }

// export default ChannelDetail

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box 
      minHeight="95vh"
      alignItems="center"
      justifyContent="center">
      <Box>
        <div style={{
          height:'25vh',
          background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
          //zIndex: 10,
        }} />
        <ChannelCard channelDetail={channelDetail} marginTop="-124px" />
      </Box>

      <Box>  
        <Videos videos={videos}/>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
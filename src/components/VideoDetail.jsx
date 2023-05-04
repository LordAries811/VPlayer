import { Box,Stack,Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { CheckCircle } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import {fetchFromAPI} from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail,setVideoDetail]=useState("");
  const [videos,setVideos]=useState([]);
  const {id}=useParams();

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&type=video&relatedToVideoId=${id}`)
    .then((data)=>setVideos(data.items))
  },[id]);

  if(!videoDetail?.snippet)
    return "Pleasewait";

  const {snippet:{title,channelId,channelTitle},statistics:{viewCount,likeCount}}=videoDetail;

  return (
    <Box
    minHeight="95vh">
      <Stack
      direction={{xs:"column",md:"row"}}>
        <Box flex={1}>
          <Box
          sx={{
            width:"100%",
            position:"sticky",
            top:"86px"
          }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player" controls/>

            <Typography
            color="white"
            variant="h5"
            fontWeight="bold"
            p={2}>
              {title}
            </Typography>

            <Stack
            direction="row"
            justifyContent="space-between"
            px={2}
            py={1}
            sx={{
              color:"white"
            }}>
              <Link
              to={`/channel/${channelId}`}>
                <Typography
                variant={{sm:"subtitle1",md:"h6"}}
                sx={{
                  color:"white"
                }}>
                  {channelTitle}
                  <CheckCircle
                  sx={{
                    fontSize:"12px",
                    color:"gray",
                    marginLeft:"5px"
                  }}/>
                </Typography>
              </Link>

              <Stack
              direction="row"
              gap="20px"
              alignItems="center">
                <Typography
                variant="body1"
                sx={{
                  opacity:0.8
                }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                variant="body1"
                sx={{
                  opacity:0.8
                }}>
                  {parseInt(viewCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
        // sx={{
        //   /marginRight:"-20px"
        // }}
        px={2}
        py={{xs:5,md:1}}
        justifyContent="center">
          <Videos videos={videos}
          direction="column"/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
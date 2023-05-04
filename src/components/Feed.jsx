import React,{ useState,useEffect } from "react"
import { Box,Stack,Typography } from "@mui/material"
import Sidebar from "./Sidebar"
import Videos from "./Videos"
import {fetchFromAPI} from "../utils/fetchFromAPI.js";

const Feed = () => {
  const [selectedCategory,setselectedCategory]=useState("New");
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))
  },[selectedCategory])

  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        height: { xs: "100vh", sm: "95vh" },
      }}
    >
      <Box
        sx={{
          background: 'black',
          height: { xs: "40vh", sm: "100%" },
          borderRight: { xs: "none", sm: "1px solid #3d3d3d" },
          px: { xs: 2, sm: 0 },
        }}
      >
          <Sidebar
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}/>

          <Typography className="copyright"
          variant="body2"
          sx={{
            marginTop:2,
            color:'white'
          }}>
            © 2023 Aditya Halder
          </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY:'auto',
          height:'90vh',
          flex:2
        }}
      >
        <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        style={{
          //marginRight:"10px",
          color:'white'
        }}>
          {selectedCategory}
          <span
          style={{
            marginLeft:'7px',
            color:'red'
          }}>Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
import { Stack,Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";


const Videos = ({videos,direction}) => {  
  if(!videos?.length)
    return "Pleasewait"
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      marginLeft="20px"
      justifyContent="center"
      alignItems="start"
      //gap={2}
      spacing={1}
      style={{
        marginBottom:"2px"
      }}
    >
      {
        videos.map((item,idx)=>(
          <Box key={idx}
          style={{
            marginBottom:"15px",
          }}
          >
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
          </Box>
        ))
      }

    </Stack>
  )
}

export default Videos
import React from 'react'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {ChannelCard} from './'
import Videos from './Videos'
import fetchFromAPI from '../utils/fetchFromAPI'

const ChannelDetail = () => {

  const [channelDetail,setChannelDetail] = useState(null)

  const [videos, setVideos] = useState(null)

  const {id} = useParams();

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]))
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideos(data?.items))
  },[id])


  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background:'linear-gradient(0deg, rgba(183,0,0,1) 0%, rgba(200,0,0,1) 20%, rgba(0,0,0,1) 100%)', zIndex:10, height:'300px'}}/>
        <ChannelCard channelDetail={channelDetail} marginTop='-120px'/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}}/>
        <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
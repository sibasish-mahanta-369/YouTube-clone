import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import {SideBar,Videos } from './'

import fetchFromAPI from '../utils/fetchFromAPI'


const Feed = () => {

  const [selectedCategory,setSelectedCategory] = useState('New')

  const [videos,setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data)=>setVideos(data.items))
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection:{sm:'column', md:'row'}}}>
      <Box sx={{height:{sm:'auto', md:'max-height'}, borderRight:'1px solid #3d3d3d', px:{sm:'0',md:'2'}}}>
      <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Typography className='copyright' align="center" variant='body2' sx={{mt:1.5,color:'#fff', }}>
        Just a MUI Project
      </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto', height:'max-height',flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style={{color:'red'}} >
            videos
          </span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
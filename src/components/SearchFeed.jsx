import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import Videos  from './Videos'
import { useParams } from 'react-router-dom'

import fetchFromAPI from '../utils/fetchFromAPI'


const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items))
  }, [searchTerm])

  return (

    <Box p={2} sx={{ overflowY: 'auto', height: 'max-height', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'red' }}>
        <span>
          Search results for: <span style={{color:'white'}}>{searchTerm}</span> 
        </span>
      </Typography>
      <Videos videos={videos} />
    </Box>

  )
}

export default SearchFeed
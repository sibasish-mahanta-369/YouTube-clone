import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'
import { display } from '@mui/system'

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box sx={{ boxShadow: 'none', display:'flex', justifyContent:'center', alignItems:'center',width:{xs:'356px', md:'320px'}, height:'326px', margin:'auto', marginTop}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'coloumn', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
          />
        </CardContent>
        <Typography variant='h6' sx={{ display: 'flex', flexDirection: 'coloumn', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
          {channelDetail?.snippet?.title}
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ display: 'flex', flexDirection: 'coloumn', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )
        }
      </Link>
    </Box>
  )
}

export default ChannelCard
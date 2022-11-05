import React from 'react'
import { Box, Typography } from '@mui/material'
import MenuBar from './MenuBar'

const MainLayout = ({children}) => {
  return (
    <Box sx={{width:"100%"}}>
        <MenuBar/>
        {children}
    </Box>
  )
}

export default MainLayout
import React from 'react'
import Box from '@mui/material/Box';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
    const copyright = String.fromCodePoint(0x00A9);
    const year = '2024';
    const companyName = 'Walter';
  return (
    <div style = {{display:"flex", flexDirection:"column"}}>
        <Box sx={{
                height:"100px",
                backgroundColor: '#42a5f5',
                color: 'white',
                mt:"100px"
      }}
    >
      <FacebookRoundedIcon sx = {{margin:"10px"}}/>
      <InstagramIcon sx = {{margin:"10px"}}/>
      <div style ={{position:"absolute",left: "50%",transform: "translate(-50%)"}}>{`${copyright} ${year} ${companyName}`}</div>

    </Box>
    </div>
  )
}

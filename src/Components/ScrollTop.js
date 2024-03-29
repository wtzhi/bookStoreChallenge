import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
export const ScrollTop = () => {
    const handleScrollTop = () =>{
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    return (
        <div><ArrowCircleUpIcon sx = {{":hover": {
            backgroundColor: "#ececec"
          },cursor: "pointer", borderRadius:"40%"}} color = "primary" fontSize = "large" onClick = {()=>handleScrollTop()}/></div>
    )
}

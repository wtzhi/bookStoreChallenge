import React from'react'
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';
const images =[
"https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip",
"https://assets.teenvogue.com/photos/5e6bffbbdee1770008c6d9bd/16:9/w_2560%2Cc_limit/GettyImages-577674005.jpg",
"https://media.karousell.com/media/photos/products/2018/10/04/one_piece_english_manga_1538616012_d2bc1a27_progressive.jpg"
]
function NewCarousel(){
    return(
        <Box sx={{ maxWidth: "80vw",flexGrow: 1,margin: 'auto', mt: 5 }}>
            <Carousel autoPlay = "true" >
                {images.map((image,i)=>(
                    <Paper key={i} elevation={10}>
                        <Box
                            component= "img"
                            sx={{
                            width:'100%',
                            height: '50vh',
                            objectFit:'cover'
                            }}
                            src={image}
                            alt={`slide ${i}`}
                        />
                    </Paper>
                ))}
            </Carousel>
        </Box>
    )}
export default NewCarousel;

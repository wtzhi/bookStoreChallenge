import React from'react'
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';
const images =[
"https://static.vecteezy.com/system/resources/thumbnails/035/257/473/small_2x/ai-generated-a-vintage-wooden-bookshelf-with-old-books-horizontal-banner-photo.jpg",
"https://assets.teenvogue.com/photos/5e6bffbbdee1770008c6d9bd/16:9/w_2560%2Cc_limit/GettyImages-577674005.jpg",
"https://media.karousell.com/media/photos/products/2018/10/04/one_piece_english_manga_1538616012_d2bc1a27_progressive.jpg"
]
function NewCarousel(){
    return(
        <Box sx={{width:"100%",flexGrow: 1}}>
            <Carousel autoPlay = "true" navButtonsWrapperProps={{ 
        style: {
            bottom: '15%',
            top: 'unset'
        }
    }} >
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

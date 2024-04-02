import React from'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Paper, Box } from '@mui/material';
import { Book } from './Book'
import { useEffect, useContext, useState, useRef } from 'react'
import Grid from '@mui/material/Grid';
import Loading from '../Components/Loading';
import { BookContext } from '../BookContextProvider';

export const RecommendationGrid = () => {
    const {books, booksLoading,refreshBooks,err} = useContext(BookContext);
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5,
          slidesToSlide: 5
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div style = {{marginTop:"50px",position:"relative",left: "50%",transform: "translate(-50%)",width:"90%",position:"relative", backgroundColor:"#f5f5f5",borderRadius:"50px"}}>
            {books ? 
             <Box sx={{flexGrow: 1, position:"relative",left: "50%",transform: "translate(-50%)",justifyContent:"center", alignItems:"center"}}>
                <p style = {{position:"relative",fontFamily: "Georgia, serif",fontSize:"30px"}}>Recommendations</p>
                <Carousel 
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={5000}
                    renderDotsOutside={true}
                    >
                        {/* <div style = {{backgroundColor:"#f5f5f5"}}> */}
                            {books.slice(0,12).map((book,i)=>(
                                <Grid  item sx = {{margin:"60px",cursor:"pointer", display:"flex",flexDirection:"row",alignItems:"center", justifyContent:"center"}} >
                                    <Book props = {book} key = {i}/>
                                </Grid>
                            ))}
                        {/* </div> */}
                    
                    
                </Carousel>
         </Box>: <div style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(0, -50%)'}}><Loading/></div>}
        </div>
    )
}
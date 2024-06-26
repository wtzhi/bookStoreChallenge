import React from 'react'
import { Book } from './Book'
import { useEffect, useContext, useState, useRef } from 'react'
import Grid from '@mui/material/Grid';
import Loading from '../Components/Loading';
import { BookContext } from '../BookContextProvider';
import { borderRadius } from '@mui/system';

export const NewArrivalGrid = () => {
    const {books, booksLoading,refreshBooks,err} = useContext(BookContext);

    
  return (
    <div style = {{position:"relative",left: "50%",transform: "translate(-50%)",marginTop:"20px", backgroundColor:"#f5f5f5", width:"90vw",borderRadius:"50px"}}>
        <p style = {{position:"relative",fontFamily: "Georgia, serif",fontSize:"30px"}}>New Arrival</p>
    {books ? 
        <Grid  sx={{ flexGrow: 1, marginTop:"20px", direction:"row"}} container spacing={1} columns={5}>
          <Grid item xs={5} >
            <Grid container justifyContent="center" spacing={1}>
            {books.slice(-4).map((book,index) => (
              <Grid  item sx = {{marginBottom:"25px",cursor:"pointer",}} >
                 <Book props = {book} key = {index}/>
              </Grid>
            ))}
            </Grid>
          </Grid>
        </Grid>: <div style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(0, -50%)'}}><Loading/></div>}
  </div>
  )
}

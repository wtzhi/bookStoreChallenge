import React, { useEffect, useContext, useState, useRef } from 'react'
import axios from 'axios';
import { BookContext } from '../BookContextProvider';
import { CircularProgress } from '@mui/material';
import { Book } from '../Components/Book';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Loading from '../Components/Loading';
import Button from '@mui/material/Button';
import { ScrollTop } from '../Components/ScrollTop';


const Bookspage = () => {
  // const handleScrollTop = () =>{
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   })
  // }
  const {books, booksLoading,refreshBooks,err} = useContext(BookContext);
  useEffect(()=>{
    refreshBooks()
  },[books])
  return (
    <div>
      {books ? 
      <Grid sx={{ flexGrow: 1, marginTop:"20px"}} container spacing={2}>
        <Grid item xs={books.length}>
          <Grid container justifyContent="center" spacing={2}>
          {books.map((book,index) => (
            <Grid  item sx = {{marginBottom:"25px",cursor:"pointer"}}>
               <Book props = {book} key = {index}/>
            </Grid>
          ))}
          </Grid>
        </Grid>
      </Grid>: <div style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(0, -50%)'}}><Loading/></div>}
      <div style = {{position:"fixed", bottom:0,right:0,}}><ScrollTop/></div>
    </div>
  )
}

export default Bookspage
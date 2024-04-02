import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useState,useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { BookContext } from '../BookContextProvider';
import { CircularProgress } from '@mui/material';
import Typography from '@mui/material/Typography';


export const Book = ({props}) => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [id, setId] = useState("")
    const navigate  = useNavigate()
    useEffect(()=>{
        setTitle(props.title)
        setAuthor(props.author)
        setId(props.id)
        
    },[])
    const handleBookClick=()=> {
        navigate(`/books/:${id}`)
    }
    return (
        <div onClick={handleBookClick}>
            <Card variant="outlined" sx={{ width: "15vw", height:"20vw", maxWidth: 400,maxHeight:450, mx: "50px",boxShadow:"3",borderRadius:"20px",transition: "transform .2s", ":hover": {
              transform: "scale(1.1)"
            }}}>
                    <CardContent>
                        <Typography variant="h7" color="black">
                            {title}
                        </Typography>
                        <Typography variant="h8" color="text.secondary" display = "block">
                            {author}
                        </Typography>
                </CardContent>
            </Card>
        </div>
  )
}

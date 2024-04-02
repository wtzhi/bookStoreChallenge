import React, {useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Loading from '../Components/Loading'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PurchaseModal from '../Components/PurchaseModal';

const Bookpage = () => {
    const [bookInfo,setBookInfo] = useState(null)
    const [openModal, setOpenModal] = useState(false)
    const [needRefresh,setNeedRefresh] = useState(false)
    const id = useParams()
    useEffect(()=>{
      setBookInfo(null)
      fetchBook()
    },[needRefresh])
    
    const fetchBook = async()=>{
      await axios.get(`http://localhost:8000/books/${id.id.slice(1,id.id.length)}`).catch((err)=>{
        console.log(err.message) 
      }).then(response => setBookInfo(response.data.book))
    }
    console.log(bookInfo)
    
    const handlePurchaseClick=()=>{
      setOpenModal(true)
    }

  return (
    <div>
      {openModal?<PurchaseModal isOpen = {openModal} onClose = {()=>{setOpenModal(false)}} name = {bookInfo.title} price = {bookInfo.price} id = {id} refresh = {()=>{setNeedRefresh(!needRefresh)}}/>:<></>}

      {bookInfo?
      <div style = {{width:"100%", height:"100%",backgroundColor:"white"}}>
          <div style = {{display:"flex",flexDirection:"row",paddingTop:"50px"}}>
              <Card variant="outlined" sx={{ width: "20vw", height:"25vw", maxWidth: 400, maxHeight:450, mx: "50px", boxShadow:"3"}}>
                <CardContent>
                  <Typography variant="h5" color="text.secondary">
                      {bookInfo.title}
                  </Typography>
                  <Typography variant="h8" color="text.secondary" display = "block">
                      {bookInfo.author}
                  </Typography>
                </CardContent>
              </Card>
              <div style = {{textAlign: 'left', fontSize:"20px", lineHeight:"40px", }}>
                <p>Title: {bookInfo.title}</p>
                <p>Author: {bookInfo.author}</p>
                <p>Price: ${bookInfo.price}</p>
                <p>Isbn: {bookInfo.isbn}</p>
                <p>Available Stock: {bookInfo.availableStock}</p>
                <Button variant="contained" startIcon={<ShoppingCartOutlinedIcon />} style={{marginTop:"50px"}} onClick = {handlePurchaseClick}>
                  Purchase
                </Button>
              </div>
          </div>
          
        </div>
        :
        <div style={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(0, -50%)'}}>
          <Loading/>
        </div>
      }
      
    </div>
  )
}
export default Bookpage

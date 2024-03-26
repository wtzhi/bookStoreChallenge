import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

const PurchaseModal = ({isOpen, onClose, name, price, id, refresh}) =>{
  const handleCancel = () =>{
    onClose()
  }
  const handlePurchase = async()=>{
    await axios.post(`http://localhost:8000/books/${id.id.slice(1,id.id.length)}/purchase`
    ).catch((err)=>{
      console.log(err.message) 
    }).then(response => {
      console.log(response)
      refresh()
      onClose()
    })
    
  }
  
  return (
    <div>
      <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div style = {{display: "flex", textAlign:"center", whiteSpace:"nowrap"}}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please confirm that you would like to purchase &nbsp;
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 600}} color="error">
            {name}&nbsp;
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            for&nbsp;
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontWeight: 600}} color="error">
            ${price} &nbsp;
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2}} >
            ?
          </Typography>
        </div>
        <div style = {{position:"relative"}}>
          <Button variant="contained"  sx={{marginTop:"50px",mx:"20px"}} color= "success" onClick = {handlePurchase}>
            confirm
          </Button>
          <Button variant="contained" sx={{marginTop:"50px",mx:"20px"}} color= "error" onClick = {handleCancel}>
            cancel
          </Button>
        </div>
      </Box>
    </Modal>
    
      
    </div>
  );
}
export default PurchaseModal
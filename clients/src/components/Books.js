import React, {useState, useEffect} from "react";
import '../App.css';
import  { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from "axios";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Books = (props) => {
    const { removeObj } = props;


    const DeleteItem = ( BookId ) => {
        alert('product deleted')
        axios.delete('http://localhost:8000/api/book/' + BookId)
        .then(res => removeObj(BookId))
        .catch((err) => console.log(err))
}


    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: 'text.secondary' }}>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Book Store
            </Typography>
            <Link to="/new" className="add"><Button color="inherit" sx={{ bgcolor: 'text.secondary', mx: 1 }}>Add Book</Button></Link>
            <Link to="/contact" className="add"><Button color="inherit" sx={{ bgcolor: 'text.secondary' }}>Contact Us</Button></Link>
            </Toolbar>
        </AppBar>
        </Box>
        {props.books.map((reads, index) => (
                <div key={index} className="books">
                    <p>{reads.name}</p>
                    <p>{reads.author}</p>
                    <p>{reads.genre}</p>
                    <p>{reads.description}</p>
                    <p>${reads.price}</p>
                    <button onClick={(e) => {DeleteItem(reads._id)}}>Delete</button>
                </div>
        ))}
        </div>
    )
};

export default Books;
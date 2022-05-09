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



const Books = () => {
    const [books, setBooks] = useState([]);

    const removeObj = BookId => {
        setBooks(books.filter(reads => reads._id != BookId)); 
        }
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/books")
        .then((bookData) => {
            setBooks(bookData.data.books);
            console.log("test", bookData.data.books);
        })
        .catch((err) => console.log(err))
    }, [])



        
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
        {books.map((reads, index) => (
                <div key={index} className="books">
                    <p>Book Name:   <b>{reads.name}</b></p>
                    <p>Author:      <b>{reads.author}</b></p>
                    <p>Genre:       <b>{reads.genre}</b></p>
                    <p>Description: <b>{reads.description}</b></p>
                    <p>Price: $<b>{reads.price}</b></p>
                    <Button onClick={(e) => {DeleteItem(reads._id)}} variant="contained" color="primary" sx={{  mt: 2, ml: 6 }}>Delete</Button >
                    <Link to={`/update/${reads._id}`} className="updating"><Button variant="contained" color="primary" sx={{  mt: 2, ml: 2 }} >Update</Button></Link>
                </div>
        ))}
        </div>
    )
};

export default Books;
import React, {useState, useEffect} from "react";
import '../App.css';
import  { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from "axios";
import { FormControl, Input, Select, MenuItem, Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


const AddBook = (props) => {
    const { books, setBooks } = props
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate("");

    const createBook = (e) => {
        e.preventDefault();
        console.log("Test1")
        axios.post("http://localhost:8000/api/book", {
            name,
            author,
            genre,
            description,
            price,
        })
        .then(res => {
            console.log("Test2")
            setBooks([...books, res.data])
            setName('')
            setAuthor('')
            setGenre('')
            setDescription('')
            setPrice('')
            navigate('/')
        })
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
                <Link to="/" className="add"><Button color="inherit" sx={{ bgcolor: 'text.secondary', mx: 1 }}>Home</Button></Link>
                <Button color="inherit" sx={{ bgcolor: 'text.secondary' }}>Contact Us</Button>
                </Toolbar>
            </AppBar>
        </Box>
            <h1 className="title">Create New Book</h1>
        <form onSubmit={ createBook }>
            <FormControl  sx={{ ml: 85, mt: 1, }} >
                <FormControl>
                    <Input id="name" placeholder="Book Name..." onChange={(e) => setName(e.target.value)}  sx={{ width: 300, mt: 1 }}/>
                </FormControl>
                <FormControl>
                    <Input id="author" placeholder="Author Name..." onChange={(e) => setAuthor(e.target.value)} sx={{  mt: 2, }} />
                </FormControl>
                <FormControl>
                    <Select
                            id="genre"
                            placeholder="Genre..."
                            value={ genre }
                            onChange={(e) => setGenre(e.target.value)}
                            sx={{  mt: 2, }}
                        >
                            <MenuItem value={"Fiction"}>Fiction</MenuItem>
                            <MenuItem value={"Nonfiction"}>Nonfiction</MenuItem>
                            <MenuItem value={"Drama"}>Drama</MenuItem>
                            <MenuItem value={"Poetry"}>Poetry</MenuItem>    
                            <MenuItem value={"Folktale"}>Folktale</MenuItem>
                    </Select>
                    </FormControl>
                    <FormControl>
                        <Input id="descripion" placeholder="Description..." onChange={(e) => setDescription(e.target.value)} sx={{  mt: 2, }} />
                    </FormControl>
                    <FormControl>
                        <Input id="price" placeholder="Price..." onChange={(e) => setPrice(e.target.value)}  sx={{  mt: 2, }}/>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" sx={{  mt: 2, }}>Submit</Button >
                    {/* <Link to="/" className="link"><Button  variant="outlined" color="primary" sx={{  mt: 2, ml: 14 }} >Home</Button ></Link> */}
            </FormControl>
        </form>
        </div>
    )
}

export default AddBook;
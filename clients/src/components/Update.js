import React, {useState, useEffect} from "react";
import '../App.css';
import { useNavigate, useParams} from "react-router-dom";
import {Link} from 'react-router-dom';
import axios from "axios";
import { FormControl, Input, Select, MenuItem, Button } from '@mui/material';

const Update = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/book/${id}`)
            .then((res) => {
                setName(res.data.oneSingleBook.name);
                setAuthor(res.data.oneSingleBook.author);
                setGenre(res.data.oneSingleBook.genre);
                setDescription(res.data.oneSingleBook.description);
                setPrice(res.data.oneSingleBook.price);
            })
            .catch(err => console.log(err))
            }, [])

            const updateBook = (e) => {
                e.preventDefault();
                axios.put(`http://localhost:8000/api/book/${id}`, {
                    name,
                    author,
                    genre,
                    description,
                    price,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {console.log(err)})
            }

    return (
    <div>
        <h1 className="bookies">Update Book Information</h1>
        <form onSubmit={ updateBook }>
            <FormControl  sx={{ ml: 85, mt: 1, }} >
                <FormControl>
                    <Input id="name" placeholder="Book Name..." onChange={(e) => setName(e.target.value)}  sx={{ width: 300, mt: 1 }} value={name}/>
                </FormControl>
                <FormControl>
                    <Input id="author" placeholder="Author Name..." onChange={(e) => setAuthor(e.target.value)} sx={{  mt: 2, }} value={author}/>
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
                        <Input id="descripion" placeholder="Description..." onChange={(e) => setDescription(e.target.value)} sx={{  mt: 2, }} value={description} />
                    </FormControl>
                    <FormControl>
                        <Input id="price" placeholder="Price..." onChange={(e) => setPrice(e.target.value)}  sx={{  mt: 2, }} value={price}/>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" sx={{  mt: 2, }}>Update</Button >
                    <Link to="/" className="updating"><Button type="submit" variant="contained" color="primary" sx={{  mt: 2, ml: 14 }}>Home</Button ></Link>
            </FormControl>
        </form>
    </div>
)
}

export default Update;
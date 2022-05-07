import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';

const Contact = () => {
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
                <Link to="/contact" className="add"><Button color="inherit" sx={{ bgcolor: 'text.secondary' }}>Contact Us</Button></Link>
                </Toolbar>
            </AppBar>
        </Box>
        <h1>We are currently building our contact page, come back later!</h1>
    </div>
    )
}

export default Contact;
// Navbar.js
// Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import { Height } from '@mui/icons-material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AppBar position="sticky" className="navHeader">
      <Container maxWidth="lg">
        <Toolbar className>
          <Typography variant="h6" className="navLogo" color="primary" >
            <Link to="/"  color='#fff' className="navLink" >TRIVIA</Link>
          </Typography>
          <Box className="navListsItems" sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <Button component={Link} to="/" color="inherit">HOME</Button>
            <Button component={Link} to="/shop" color="inherit">SHOP</Button>
           
            {/* Add more navigation links as needed */}
          </Box>
          <Box className="navUserItems" sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" startIcon={<SearchIcon />}>Login</Button>
            <Button color="inherit" startIcon={<ShoppingCartIcon />}>Cart</Button>
          </Box>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { md: 'none' } }} onClick={toggleMenu}>
            <MenuIcon />
          </IconButton> {/** <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left'
            }}

            sx={{height:'400px' , background:'orange'}}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            style={{height:'400px'}}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>HOME</MenuItem>
            <MenuItem component={Link} to="/shop" onClick={handleClose}>SHOP</MenuItem>
            {/* Add more navigation links as needed *
            </Menu>*/}
          
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

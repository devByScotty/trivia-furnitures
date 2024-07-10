import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Drawer,
    Divider,
    Button,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = ({ cartItems, removeFromCart, toggleCart, cartOpen, total }) => {
    return (
        <Drawer anchor="right" open={cartOpen} onClose={toggleCart}>
            <Box sx={{ width: 300, padding: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Shopping Cart
                </Typography>
                <Divider />
                <List sx={{ marginTop: 2 }}>
                    {cartItems.map((item) => (
                        <ListItem key={item.id} disableGutters sx={{ paddingBottom: 1 }}>
                            <ListItemText primary={item.name} secondary={`$${item.price.toFixed(2)}`} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                    <Typography variant="h6">Total:</Typography>
                    <Typography variant="h6">${total.toFixed(2)}</Typography>
                </Box>
                <Button variant="contained" color="primary" sx={{
                    width: '100%',
                    marginTop: 2,
                    fontSize: '1rem',
                    fontWeight: '600',
                    backgroundColor: '#5C8659',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#4a6d47',
                        color: '#fff',
                    }
                }} >
                    Checkout
                </Button>
            </Box>
        </Drawer >
    );
};

export default Cart;

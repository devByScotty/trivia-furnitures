import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, Pagination } from '@mui/material';

const ProductBanner = ({ addToCart, toggleCart }) => {
  const products = [
    { id: 1, type: 'Chairs', name: 'Wishbone Chair', price: 249.99, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, type: 'Sofas', name: 'Mid-Century Sofa', price: 799.99, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, type: 'Beds', name: 'Four-Poster Bed', price: 1299.99, image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, type: 'Others', name: 'Rattan Side Table', price: 129.99, image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, type: 'Chairs', name: 'Wishbone Chair', price: 249.99, image: 'https://plus.unsplash.com/premium_photo-1681980019667-96baeb36fc33?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, type: 'Sofas', name: 'Mid-Century Sofa', price: 799.99, image: 'https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 7, type: 'Beds', name: 'Four-Poster Bed', price: 1299.99, image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 8, type: 'Others', name: 'Rattan Side Table', price: 129.99, image: 'https://plus.unsplash.com/premium_photo-1673548917423-073963e7afc9?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const displayedProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box sx={{ backgroundColor: '#FFFFFF', padding: 2, cursor: 'pointer', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 2, marginBottom: 2, borderBottom: '1px solid gold' }}>
        <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, color: '#5C8659', fontFamily: 'Menlo', opacity: 0.9, textAlign: 'center' }}>
          Our Featured Products
        </Typography>
        <Button variant="contained" color="primary" sx={{ width: '100%', fontSize: '1rem', fontWeight: '600', backgroundColor: '#5C8659', color: '#fff', '&:hover': { backgroundColor: '#4a6d47', color: '#fff' } }} onClick={toggleCart}>
          Open Cart
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: 2 }}>
        {displayedProducts.map(product => (
          <Card key={product.id} sx={{ width: 350, margin: 1 }}>
            <CardMedia
              component="img"
              height="350"
              image={product.image}
              alt={product.name}
              sx={{ objectFit: 'cover', borderRadius: 2, transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'translateY(-5px)' } }}
            />
            <CardContent>
              <Typography variant="h2" sx={{ fontSize: '1.2rem', marginBottom: 1, color: '#333' }}>
                {product.name}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 1, borderTop: '1px solid gold', borderBottom: '1px solid gold' }}>
                <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 'bold', color: '#666' }}>
                  ${product.price}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => addToCart(product)}
                  sx={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    backgroundColor: '#5C8659',
                    color: '#fff',
                    '&:hover': {
                      backgroundColor: '#4a6d47',
                      color: '#fff',
                    },
                  }}
                >
                  Add To Cart
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
        <Pagination
          count={Math.ceil(products.length / itemsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
          sx={{ '& .MuiPaginationItem-root': { color: '#5C8659' ,backgroundColor: '#fff' }, '& .Mui-selected': { color: '#fff', backgroundColor: '#5C8659' } }}
        />
      </Box>
    </Box>
  );
};

export default ProductBanner;

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

interface Product {
  product: {
    brand: string;
    title: string;
    imagesUrl: string[];
    price: string;
    id: string;
  };
}

export default function ProductCard(props: Product) {
  const { brand, title, imagesUrl, price, id } = props.product;

  return (
    <Box
      sx={{
        maxWidth: 345,
        height: '100%',
        minHeight: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        marginX: 'auto',
      }}
    >
      <Image
        src={imagesUrl[0]}
        alt={title}
        width={300}
        height={300}
        style={{ borderRadius: '12px', width: '100%' }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }} mt={1}>
        <Typography gutterBottom variant="h6" component="h6">
          {title}
        </Typography>
        <Typography variant="body1" fontWeight={700}>
          ${price}
        </Typography>
      </Box>

      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          cursor: 'pointer',
          backgroundColor: 'whitesmoke',
          color: 'secondary.main',
          ':hover': {
            backgroundColor: 'white',
          },
        }}
      >
        <FavoriteBorderOutlinedIcon />
      </Button>
    </Box>
  );
}

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 300 }} image={imagesUrl[0]} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{brand}</Button>
        <Button size="small">{price}</Button>
      </CardActions>
    </Card>
  );
}

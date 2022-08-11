import React from 'react';

import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';

import './style.scss';

const CardComponent = () => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
      <CardMedia component="img" className="q1" alt="Paella dish" />
    </Card>
  );
};

export default CardComponent;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { Types } from '../../models/types';

interface Props {
  id: number;
  name: string;
  image: string;
  types: Types[];
}

export default function PokemonCard({ id, name, image, types }: Props) {

  const typeHandler = () => {
    if (types[1])
      return types[0].type.name + ' | ' + types[1].type.name;
    return types[0].type.name;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="caption" textAlign="left" component="div" >
              {'#' + id}
            </Typography>
            <Typography gutterBottom variant="caption" textAlign="right" component="div" >
              {typeHandler()}
            </Typography>
          </Box>
        </CardContent>
        <CardMedia
          component="img"
          width="200"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </Box>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}

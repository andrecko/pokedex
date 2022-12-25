import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { Types } from '../../models/types';
import { PokemonSprites } from '../../models/pokemon-sprites';
import { PokemonStats } from '../../models/pokemon-stats';
import { Pokemon } from '../../models/pokemon';

interface Props {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {

  const typeHandler = () => {
    const primaryType = pokemon.types[0].type.name;

    if (pokemon.types[1]) {
      const secondaryType = pokemon.types[1].type.name;

      return primaryType.replace(primaryType[0], primaryType[0].toUpperCase()) + ' | ' + 
      secondaryType.replace(secondaryType[0], secondaryType[0].toUpperCase());
    }

    return primaryType.replace(primaryType[0], primaryType[0].toUpperCase());
  }

  // console.log(stats)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="caption" textAlign="left" component="div" >
              {'#' + pokemon.id}
            </Typography>
            <Typography gutterBottom variant="caption" textAlign="right" component="div" >
              {typeHandler()}
            </Typography>
          </Box>
        </CardContent>
        <CardMedia
          component="img"
          width="200"
          image={pokemon.sprites.front_default}
          alt="green iguana"
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h5" component="div">
              {pokemon.name.replace(pokemon.name[0], pokemon.name[0].toUpperCase())}
            </Typography>
          </Box>
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

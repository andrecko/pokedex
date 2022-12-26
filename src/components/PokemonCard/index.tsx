import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SecurityIcon from '@mui/icons-material/Security';
import BoltIcon from '@mui/icons-material/Bolt';
import { Box, Button, CardActionArea, CardActions, Modal } from '@mui/material';
import { Pokemon } from '../../models/pokemon';
import React from 'react';
import Favorite from '@mui/icons-material/Favorite';
import FitnessCenter from '@mui/icons-material/FitnessCenter';

interface Props {
  pokemon: Pokemon;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 700,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PokemonCard({ pokemon }: Props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <CardActionArea onClick={handleOpen}>
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
          // image={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {pokemon.name.replace(pokemon.name[0], pokemon.name[0].toUpperCase())}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <CardMedia
              component="img"
              image={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
              alt="green iguana"
            />
            <Typography variant="body1" paddingTop={3} textAlign='center'>
              <Favorite color='error' /> HP: {pokemon.stats[0].base_stat}
            </Typography>

            <Typography variant="body1" textAlign='center'>
              <FitnessCenter color='success' /> Attack: {pokemon.stats[1].base_stat}
            </Typography>

            <Typography variant="body1" textAlign='center'>
              <SecurityIcon color='primary' /> Defense: {pokemon.stats[2].base_stat}
            </Typography>

            <Typography variant="body1" textAlign='center'>
              <BoltIcon color='warning' /> Speed: {pokemon.stats[5].base_stat}
            </Typography>
          </Typography>
        </Box>
      </Modal>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}

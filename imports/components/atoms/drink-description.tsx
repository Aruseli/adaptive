import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Typography } from './typography';


const useStyles = makeStyles(theme => ({
  drinkDescriptionArea: {
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: 6,
  }
}))

export const DrinkDescription = React.memo<any>(({
  country,
  region,
  zone,
  wineColor,
  degreeOfSweetness,
  grapeSort,
}:{
  country?: string;
  region?: string;
  zone?: string;
  wineColor?: string;
  degreeOfSweetness?: string;
  grapeSort?: string;
}) => {
  const classes = useStyles();
  return (<nav className={classes.drinkDescriptionArea}>
    <Typography customVariant='subtitle'>{country}</Typography>
    <img src='./dot.svg' alt='dot' />
    <Typography customVariant='subtitle'>{region}</Typography>
    <img src='./dot.svg' alt='dot' />
    <Typography customVariant='subtitle'>{zone}</Typography>
    <img src='./dot.svg' alt='dot' />
    <Typography customVariant='subtitle'>{wineColor}</Typography>
    <img src='./dot.svg' alt='dot' />
    <Typography customVariant='subtitle'>{degreeOfSweetness}</Typography>
    <img src='./dot.svg' alt='dot' />
    <Typography customVariant='subtitle'>{grapeSort}</Typography>
  </nav>)
})
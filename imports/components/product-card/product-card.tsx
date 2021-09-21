import React, { ReactNode, useMemo, useState } from 'react';
import Image from 'next/image'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    width: '100%',
		height: 'auto',
		border: '4px dashed #da08ec',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
		gridColumnGap: 64,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '0.5fr 1fr',
      gridColumnGap: 24,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    }
  },
  verticalSection: {
    display: 'grid',
    gridRowGap: 24,
  },
	infoSection: {
		backgroundColor: '#fdff54',
		width: '100%',
		height: 76,
		textAlign: 'center',
	},
  originSection: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#0000ff',
		width: '100%',
		height: 76,
  },
	priceSection: {
		backgroundColor: '#4ff14f',
		width: '100%',
		height: 164,
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignContent: 'center',
	},
  ratingSection: {
    backgroundColor: '#633d04',
		width: '100%',
		height: 126,
  },
  valueSection : {
    backgroundColor: '#bc3cf1',
		width: '100%',
		height: 76,
  },
}))

export const ProductCard = React.memo<any>(({productImages}:{productImages: React.ReactNode}) => {
  const classes = useStyles();
  
  return (<section className={classes.mainContainer}>
      <aside style={{textAlign: 'center', position: 'relative'}}>
        {productImages}
      </aside>
      <section className={classes.verticalSection}>
        <section className={classes.infoSection}>Title</section>
        <section className={classes.originSection}>Origin</section>
				<Box component='div' display={{ xs: 'block', lg: 'none' }}>
          <section className={classes.priceSection}>
            <Typography component='div' variant='h4' align='center'>{Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(2500)}</Typography>
            <Button fullWidth variant='contained' color='secondary'>Buy</Button>
          </section>
				</Box>
        <section className={classes.ratingSection}>product's info</section>
        <section className={classes.valueSection}>product's info</section>
        <section className={classes.valueSection}>product's info</section>
      </section>
      <Box component='article' display={{ xs: 'none', lg: 'block' }}>
        <section className={classes.priceSection} style={{marginBottom: '2rem'}}>
					<Typography component='div' variant='h4' align='center'>{Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(2500)}</Typography>
					<Button fullWidth variant='contained' color='secondary'>Buy</Button>
        </section>
        <section style={{backgroundColor: 'red', height: 148, width: '100%'}} />
      </Box>
    </section>
  );
});

import React, { ReactNode, useMemo, useState, useCallback } from 'react';
import Image from 'next/image'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { BadgeSale, BadgeSaleVolumeQuantity } from './badge';
import { ExpertRating } from '../atoms/expert-rating';
import { CustomeRating } from '../atoms/clients-rating';
import _ from 'lodash';
import { PriceCard } from './price-card';


const useStyles = makeStyles(theme => ({
  mainContainerProductCard: {
    backgroundColor: '#F9F5F3',
  },
  gridContainerProductCard: {
    width: '100%',
		height: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
		gridColumnGap: 64,
    paddingLeft: '1.75rem',
    paddingRight: '1.75rem',
    paddingTop: '3.75rem',
    paddingBottom: '2.5rem',
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
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  bestseller: {
    color: theme.palette.info.main,
  },
	infoSection: {
		// backgroundColor: '#fdff54',
		// width: '100%',
		// height: 76,
		// textAlign: 'center',
	},
  originSection: {
    // color: 'white',
    // textAlign: 'center',
    // backgroundColor: '#0000ff',
		// width: '100%',
		// height: 76,
  },
	priceSection: {
		// backgroundColor: '#4ff14f',
		// width: '100%',
		// height: 164,
		// display: 'flex',
		// flexDirection: 'column',
		// flexWrap: 'wrap',
		// justifyContent: 'center',
		// alignContent: 'center',
	},
  ratingSection: {
    backgroundColor: '#633d04',
		width: '100%',
		height: 126,
  },
  valueSectionBadge : {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 0.5fr)',
    alignItems: 'center',
    gridColumnGap: '2rem',
  },
}))

export const ProductCard = React.memo<any>(({
  productImages,
  title,
  countryOrigin = 'Вкус вина щедрый, хорошо структурированный, с нотами ванили, кофе и дуба, фруктовыми акцентами и долгим, округлым послевкусием.',
}:{
  productImages: React.ReactNode;
  title: string;
  countryOrigin?: string;
}) => {
  const classes = useStyles();
  const [horizontalBadge, setHorizontalBadge] = useState(false);

  const onClickRatingBadge = useCallback(
    () => {
      setHorizontalBadge(!horizontalBadge);
      console.log({horizontalBadge});
    },[horizontalBadge]
  );
  
  return (<section className={classes.mainContainerProductCard}>
        <section className={classes.gridContainerProductCard}>

        <aside style={{textAlign: 'center', position: 'relative'}}>
          {productImages}
        </aside>

        <section className={classes.verticalSection}>
          <section className={classes.infoSection}>
            <Typography variant='body1' className={classes.bestseller}>Бестселлер</Typography>
            <Typography component='div' variant='h1' color='textPrimary' align='left'>{title}</Typography>
            <CustomeRating value={2.7} />
            {/* <BadgeSaleVolumeQuantity /> */}
            <BadgeSale />
          </section>
          <section className={classes.valueSectionBadge}>
            <ExpertRating rating={4.2} horizontalBadge={horizontalBadge} />
            <Button variant='outlined' onClick={onClickRatingBadge}>Change badge</Button>
          </section>
          <section className={classes.originSection}>
            <Typography component='div' variant='body1' align='left'>{countryOrigin}</Typography>
          </section>
          <Box component='div' display={{ xs: 'block', lg: 'none' }}>
            <section className={classes.priceSection}>
              <Typography component='div' variant='h4' align='center'>{Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(2500)}</Typography>
              <Button fullWidth variant='contained' color='secondary'>Buy</Button>
            </section>
          </Box>
          {/* <section className={classes.ratingSection}>product's info</section> */}
          <section>
            
            
          </section>
          <section>
            <Button variant='outlined' >Развернуть</Button>
          </section>
        </section>

        <Box component='article' display={{ xs: 'none', lg: 'block' }} position='relative'>
          <section className={classes.priceSection} style={{marginBottom: '2rem'}}>
            <PriceCard />
          </section>
          {/* <section style={{backgroundColor: 'red', height: 148, width: '100%'}} /> */}
          
        </Box>
      </section>
    </section>
  );
}, _.isEquel);

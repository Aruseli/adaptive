import React, { ReactNode, useMemo, useState, useCallback } from 'react';
import Image from 'next/image'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { SaleBadge } from './badge';
import { ExpertRating } from '../atoms/expert-rating';
import { ClientRating } from '../atoms/clients-rating';
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
    paddingLeft: '1.75rem',
    paddingRight: '1.75rem',
    paddingTop: '3.75rem',
    paddingBottom: '2.5rem',
    boxSizing: 'border-box',
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
  productGalleryArea: {
    textAlign: 'center', 
    position: 'relative',
    boxSizing: 'border-box',
    marginRight: '2rem',
  },
  infoProductArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginRight: '1.5rem',
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
  priceProductArea: {
    justifySelf: 'flex-end',
  },
}))

export const ProductCardGrid = React.memo<any>(({
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

        <aside className={classes.productGalleryArea}>
          {productImages}
        </aside>

        <section className={classes.infoProductArea}>
          <section className={classes.infoSection}>
            <Typography variant='body1' className={classes.bestseller}>Бестселлер</Typography>
            <Typography component='div' variant='h1' color='textPrimary' align='left'>{title}</Typography>
            <ClientRating value={2.7} />
            <SaleBadge />
          </section>
          <Box component='section' display={{ xs: 'block', lg: 'none' }}>
            <PriceCard />
          </Box>
          <section className={classes.valueSectionBadge}>
            <ExpertRating rating={4.2} horizontalBadge={horizontalBadge} />
            <Button variant='outlined' onClick={onClickRatingBadge}>Change badge</Button>
          </section>
          <section className={classes.originSection}>
            <Typography component='div' variant='body1' align='left'>{countryOrigin}</Typography>
          </section>
          {/* <section className={classes.ratingSection}>product's info</section> */}
          <section>
            
            
          </section>
          <section>
            <Button variant='outlined' >Развернуть</Button>
          </section>
        </section>

        <Box component='section' display={{ xs: 'none', lg: 'block' }} position='relative' className={classes.priceProductArea}>
          <PriceCard />
          {/* <section style={{backgroundColor: 'red', height: 148, width: '100%'}} /> */}
        </Box>
      </section>
    </section>
  );
}, _.isEquel);

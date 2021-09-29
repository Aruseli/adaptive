import React, { ReactNode, useMemo, useState, useCallback } from 'react';
import Image from 'next/image'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ExpertRating } from '../atoms/expert-rating';
import { ClientRating } from '../atoms/clients-rating';
import _ from 'lodash';
import { PriceCard } from './price-card';


const useStyles = makeStyles(theme => ({
  productCardMainContainer: {
    backgroundColor: '#F9F5F3',
  },
  productCardGridContainer: {
    width: '100%',
		height: 'auto',
    display: 'grid',
    gridTemplateColumns: 'minmax(231px, 1.2fr) minmax(339px, 1.3fr) minmax(316px, 1fr)',
    paddingLeft: '1.75rem',
    paddingRight: '1.75rem',
    paddingTop: '3.75rem',
    paddingBottom: '2.5rem',
    boxSizing: 'border-box',
    '@media (max-width: 1024px)': {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
    }
  },
  productCardGalleryArea: {
    textAlign: 'center', 
    position: 'relative',
    boxSizing: 'border-box',
    marginRight: '2rem',
  },
  productCardInfoArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    marginRight: '1.5rem',
  },
  productCardPriceArea: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  bestseller: {
    color: theme.palette.info.main,
  },
  ratingSection: {
    backgroundColor: '#633d04',
		width: '100%',
		height: 126,
  },
  expertsRatingBadge : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reviewText: {
    marginBottom: '1.5rem',
  },
}))

export const ProductCard = React.memo<any>(({
  productImages,
  title,
  reviewText = 'Вкус вина щедрый, хорошо структурированный, с нотами ванили, кофе и дуба, фруктовыми акцентами и долгим, округлым послевкусием.',
}:{
  productImages: React.ReactNode;
  title: string;
  reviewText?: string;
}) => {
  const classes = useStyles();
  const [horizontalBadge, setHorizontalBadge] = useState(false);

  const onClickRatingBadge = useCallback(
    () => {
      setHorizontalBadge(!horizontalBadge);
      console.log({horizontalBadge});
    },[horizontalBadge]
  );
  
  return (<article className={classes.productCardMainContainer}>
        <section className={classes.productCardGridContainer}>

        <aside className={classes.productCardGalleryArea}>
          {productImages}
        </aside>

        <section className={classes.productCardInfoArea}>
          <section>
            <Typography variant='body1' className={classes.bestseller}>Бестселлер</Typography>
            <Typography component='div' variant='h1' color='textPrimary' align='left'>{title}</Typography>
            <ClientRating value={2.7} />
          </section>
          <section className={classes.expertsRatingBadge}>
            <ExpertRating rating={4.2} horizontalBadge={horizontalBadge} />
          </section>
          <section>
            <Typography component='div' variant='body1' align='left' className={classes.reviewText}>{reviewText}</Typography>
            <Button variant='outlined' >Развернуть</Button>
          </section>
        </section>

        <section className={classes.productCardPriceArea}>
          <PriceCard />
          <Button variant='outlined' onClick={onClickRatingBadge}>Change badge</Button>
        </section>
      </section>
    </article>
  );
}, _.isEqual);

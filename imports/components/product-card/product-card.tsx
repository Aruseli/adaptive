import { useMediaQuery } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import React, { useEffect } from 'react';
import { ClientRating } from '../atoms/clients-rating';
import { ExpertRating } from '../atoms/expert-rating';
import { ProductImagesGallery } from '../product-images-gallery';
import { SaleBadge } from './badge';
import { PriceCard } from './price-card';
import { PREFIX } from '../api/env';
import cn from 'classnames';


const images = [
	{
		id: 'a',
		src: `${PREFIX}/wine.png`,
		alt: 'red wine',
	},
	{
		id: 'b',
		src: `${PREFIX}/wine_n.jpeg`,
		alt: 'red wine',
	},
	{
		id: 'c',
		src: `${PREFIX}/wine_nn.jpeg`,
		alt: 'red wine',
	}
]

export function isSmaller1024() {
  return useMediaQuery('(max-width: 1023px)');
}

const useStyles = makeStyles(theme => ({
  productCardMainContainerNude: {
    backgroundColor: '#F9F5F3',
  },
  productCardMainContainerWhite: {
    backgroundColor: '#FFF',
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
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    }
  },
  productCardGalleryArea: {
    textAlign: 'center', 
    position: 'relative',
    boxSizing: 'border-box',
    marginRight: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    }
  },
  productCardInfoArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
    marginRight: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      gap: '0.5rem',
    }
  },
  productCardPriceArea: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  productCardSaleBadgePositioning: {
    position: 'absolute',
    top: 0, right: 0,
    [theme.breakpoints.down('sm')]: {
      top: 'calc(100% - 12px)',
      left: '1rem',
    }
  },
  productCardInfo: {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#fff',
      padding: '1rem',
      borderRadius: '0.5rem',
    }
  },
  bestseller: {
    color: theme.palette.info.main,
  },
  expertsRatingBadgeReview : {
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#fff',
      padding: '1.5rem 1rem',
      borderRadius: '0.5rem',
    },
  },
  expertRatingBadge: {
    marginBottom: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.5rem',
    }
  },
  buttonMoreInfoExpertReview: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
      justifyContent: 'flex-start',
    }
  },
  reviewText: {
    marginBottom: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0.5rem',
    }
  },
}))

const ProductInfoAndPrice = React.memo<any>(({ data }: { data: any; }) => {
  return <>{data}</>;
});

export const ProductCard = React.memo<any>(({
  title,
  reviewText = 'Вкус вина щедрый, хорошо структурированный, с нотами ванили, кофе и дуба, фруктовыми акцентами и долгим, округлым послевкусием.',
  backgroundColorSwitch = false,
}:{
  title: string;
  reviewText?: string;
  backgroundColorSwitch?: boolean;
}) => {
  const classes = useStyles();
  const smaller1024 = isSmaller1024();
  
  return (<article className={backgroundColorSwitch ? classes.productCardMainContainerNude : classes.productCardMainContainerWhite}>
        <section className={classes.productCardGridContainer}>

        <aside className={classes.productCardGalleryArea}>
          <ProductImagesGallery 
            images={images} 
            saleBadge={
              <SaleBadge saleBadgeStyle={classes.productCardSaleBadgePositioning} />}
          />
        </aside>

        <ProductInfoAndPrice data={<>
          <section className={classes.productCardInfoArea}>
            <section className={classes.productCardInfo}>
              <Typography variant='body1' className={classes.bestseller}>Бестселлер</Typography>
              <Typography component='div' variant='h1' color='textPrimary' align='left'>{title}</Typography>
              <ClientRating value={2.7} />
             {smaller1024 && <PriceCard />}
            </section>
            <section className={classes.expertsRatingBadgeReview}>
              <ExpertRating rating={4.2} horizontalBadge={smaller1024 === true ? true : false} expertRatingBadgeStyle={classes.expertRatingBadge} />
              <Typography component='div' variant='body1' align='left' className={classes.reviewText}>{reviewText}</Typography>
              <Button variant={smaller1024 === true ? 'text' : 'outlined'} className={classes.buttonMoreInfoExpertReview}>{smaller1024 === true ? 'Еще' : 'Развернуть'}</Button>
            </section>
          </section>
          <section className={classes.productCardPriceArea}>
            <PriceCard />
          </section>
        </>}/>
      </section>
    </article>
  );
}, _.isEqual);

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import React, { useCallback, useState } from 'react';
import { useTranslation } from '../../i18n';
import { PREFIX } from '../api/env';
import { SaleBadge } from '../atoms/badge';
import { ExpertRating } from '../atoms/expert-rating';
import { Typography } from '../atoms/typography';
import { PriceForList } from '../product-card/price-card';
import { DrinkDescription } from '../atoms/drink-description';
import { ClientRating } from '../atoms/clients-rating';
import { Displacement } from '../atoms/displacement';


const useStyles = makeStyles(theme => ({
  productSnippetArea: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  imageProductSnippetArea: {
    position: 'relative',
    top: 0, left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  badgesLocation: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  expertRatingRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  imgBox: {
    paddingBottom: 12,
    position: 'relative',
  },
  imgStyle: {
    display: 'block',
    width: '100%',
  },
  infoProductSnippetArea: {

  },
  bestseller: {
    color: theme.palette.info.main,
  },
}))

export const ProductSnippet = React.memo<any>(({
  src = `${PREFIX}/bottle.png`,
  alt,
  title,
  country,
  region,
  zone,
  wineColor,
  degreeOfSweetness,
  grapeSort,
  valueClientRating,
  numberClientReviews,
  displacements,
}:{
  src?: string;
  alt?: string;
  title: string;
  country?: string;
  region?: string;
  zone?: string;
  wineColor?: string;
  degreeOfSweetness?: string;
  grapeSort?: string;
  valueClientRating?: number;
  numberClientReviews?: number;
  displacements?: {
    id: string;
    displacement: number;
  }[];
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (<section className={classes.productSnippetArea}>
    <div style={{position: 'relative', width: 'auto', height: '100%'}}>
      <div className={classes.imageProductSnippetArea}>
        <BadgesLocation />
        <div className={classes.imgBox}>
          <img src={src} alt={alt} className={classes.imgStyle} />
        </div>
      </div>
    </div>
      <List className={classes.infoProductSnippetArea}>
        <PriceForList 
          customVariantTypographySale='priceCard' 
          customVariantTypographyPrice='sale'
          unitPrice={49} 
        />
        <ListItem disableGutters>
          <ListItemText primary={<Typography customVariant='subtitle' additionalClasses={classes.bestseller}>{t('best-seller')}</Typography>} />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText primary={<Typography customVariant='body3' colorTextPrimary='primary'>{title}</Typography>} />
        </ListItem>
        <ListItem disableGutters>
          <DrinkDescription 
            country={country}
            region={region}
            zone={zone}
            wineColor={wineColor}
            degreeOfSweetness={degreeOfSweetness}
            grapeSort={grapeSort}
          />
        </ListItem>
        <ListItem disableGutters>
          <ClientRating size='small' value={valueClientRating} numberReviews={numberClientReviews} />
        </ListItem>
        <ListItem disableGutters>
          <Displacement displacements={displacements} />
        </ListItem>
      </List>
    </section>
  )
})  

const BadgesLocation = React.memo<any>(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [favorite, setFavorite] = useState(false);

  const onClickFavorite = useCallback(() => {
    return setFavorite(!favorite);
  }, [favorite])
  
  return (<div className={classes.badgesLocation}>
      <div className={classes.expertRatingRow}>
        <div>
          <ExpertRating rating={4.3} />
          <ExpertRating num1={93} badgeBorderColor='#C4B4E7' />
          <ExpertRating num2={98} badgeBorderColor='#BEE0C9' />
        </div>
        <IconButton onClick={onClickFavorite}>
          {!favorite ? <FavoriteBorderOutlinedIcon color='primary' titleAccess={t('add-to-favorite')} /> : <FavoriteOutlinedIcon color='secondary' titleAccess={t('added-to-favorite')} />}
        </IconButton>
      </div>
      <div>
        <SaleBadge />
      </div>
    </div>
  )
})
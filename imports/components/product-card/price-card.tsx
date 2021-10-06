import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import cn from 'classnames';
import React from 'react';
import { useTranslation } from '../../i18n';
import { Typography } from '../atoms/typography';
import { useSeparatorNumber } from '../number-separator';
import { ListItemText } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  priceCard: {
    backgroundColor: '#fff',
    boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.05)', 
    borderRadius: 20,
    width: '100%', 
    height: 'min-content',
    maxWidth: 336,
    [theme.breakpoints.down('sm')]: {
      boxShadow: 'none', 
      maxWidth: '100%',
      borderRadius: 0,
    }
  },
  priceArea: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    marginBottom: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1.5rem',
    }
  },
  priceStyle: {
    marginLeft: 12,
  },
  marginButton: {
    marginBottom: '0.5rem',
  },
}))

export const PriceCard = React.memo<any>(() =>{
  const classes = useStyles();

  return <section className={classes.priceCard}>
      <Box pt={{xs: 0, md: 3}} px={{xs: 0, md: 3}} pb={{xs: 0, md: 5}} width={'100%'} display='flex' flexDirection='column'>
        <Price price={2990} />
        <Box display='flex' flexDirection='column'>
          <Button variant='outlined' fullWidth className={classes.marginButton}>Смотреть похожие</Button>
          <Button variant='contained' color='primary' fullWidth>Узнать о поступлении</Button>
        </Box>
      </Box>
    </section>
})

export const Price = React.memo<any>(({
  salePrice = 1890,
  currency = '₽',
  price = 2990,
  sale = true,
  unitPrice = 49,
  color,
}:{
  salePrice?: number;
  currency?: any;
  price: number;
  sale?: boolean;
  unitPrice?: number;
  color?: string;
}) => {
  const classes = useStyles();

  return (<div className={classes.priceArea}>
      <Typography 
        customVariant='priceCard' 
        color={color}>{useSeparatorNumber(salePrice)} {currency}</Typography>
      {sale === true ? <Typography customVariant='sale' additionalClasses={classes.priceStyle}>{useSeparatorNumber(price)} {currency}</Typography> : null}
    </div>
  )
})

export const PriceForList = React.memo<any>(({
  salePrice = 1890,
  currency = '₽',
  price = 2990,
  sale = true,
  unitPrice,
  color = 'primary',
  customVariantTypographySale = 'priceCard',
  customVariantTypographyPrice = 'h5',
}:{
  salePrice?: number;
  currency?: any;
  price: number;
  sale?: boolean;
  unitPrice?: number;
  color?: string;
  customVariantTypographySale?: string;
  customVariantTypographyPrice?: string;
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (<ListItem disableGutters>
      <ListItemText 
        primary={<div className={classes.priceArea}>
          <Typography 
            customVariant={customVariantTypographySale} 
            color={color}
          >{useSeparatorNumber(salePrice)} {currency}</Typography>
          {sale === true 
          ? <Typography customVariant={customVariantTypographyPrice} additionalClasses={classes.priceStyle}>{useSeparatorNumber(price)} {currency}</Typography> 
          : null}
        </div>}
        secondary={!!unitPrice && `${unitPrice} / ${t('price-unit')}`}
      />
    </ListItem>
  )
})
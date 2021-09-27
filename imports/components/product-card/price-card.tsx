import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import cn from 'classnames';
import React, { ReactNode } from 'react';

import { Typography } from '../atoms/typography';
import {useSeparatorNumber} from '../number-separator';


const useStyles = makeStyles(theme => ({
  priceArea: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'baseline',
    marginBottom: 40,
  },
  priceStyle: {
    textDecoration: 'line-through',
  },
  marginButton: {
    marginBottom: 8,
  },
  buttonStyles: {
    paddingTop: 12,
    paddingBottom: 12,
  },
}))

export const PriceCard = React.memo(() =>{
  const classes = useStyles();

  return <Box boxShadow='0px 4px 7px rgba(0, 0, 0, 0.05)' borderRadius={20} maxWidth={336} minWidth={316}>
      <Box pt={3} px={3} pb={5} width={'100%'} display='flex' flexDirection='column'>
        <Price price={2990} />
        <Box display='flex' flexDirection='column'>
          <Button variant='outlined' fullWidth className={cn(classes.marginButton, classes.buttonStyles)}>Смотреть похожие</Button>
          <Button variant='contained' color='primary' fullWidth className={classes.buttonStyles}>Узнать о поступлении</Button>
        </Box>
      </Box>
    </Box>
})

export const Price = React.memo(({
  salePrice = 1890,
  currency = '₽',
  price,
  sale = true,
}:{
  salePrice?: number;
  currency?: any;
  price: number;
  sale?: boolean;
}) => {
  const classes = useStyles();
  return (<div className={classes.priceArea}>
      <Typography customVariant='priceCard'>{useSeparatorNumber(salePrice)} {currency}</Typography>
      {sale === true ? <Typography customVariant='h5' TypographyProps={{className: classes.priceStyle, style: {marginLeft: 12}}}>{useSeparatorNumber(price)} {currency}</Typography> : null}
    </div>
  )
})
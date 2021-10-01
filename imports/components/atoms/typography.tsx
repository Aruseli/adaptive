import { makeStyles, Typography as MUITypography } from '@material-ui/core';
import React from 'react';
import { fontFamilyDisplay, fontFamily } from '../../theme';


const useStyles = makeStyles(theme => ({
  rating: {
    color: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  banner: {
    color: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  priceCard: {
    color: '#6D6865',
    fontFamily: fontFamilyDisplay,
    fontSize: '2rem',
    fontWeight: 900,
    letterSpacing: 0,
    lineHeight: '2.25rem',
  },
  body3: {
    color: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  body4: {
    color: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  button1: {
    color: '#fff',
    fontFamily: fontFamily,
    fontSize: '1rem',
    fontWeight: 700,
    letterSpacing: '-0.023rem',
    lineHeight: '1.5rem',
    // extend: theme.typography.button 
  },
  button2: {
    color: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  button3: {
    color: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  caption2: {
    color: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  caption3: {
    color: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  caption4: {
    color: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  link2: {
    color: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  sale: {
    color: '',
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  sale2: {
    color: '#fff',
    fontFamily: fontFamilyDisplay,
    fontSize: '1.5rem',
    fontWeight: 700,
    letterSpacing: '-0.025rem',
    lineHeight: '1.75rem',
    fontStyle: 'italic',
  },
  sale3: {
    color: '#fff',
    fontFamily: fontFamilyDisplay,
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '0.025rem',
    lineHeight: '1.25rem',
    fontStyle: 'italic',
  },
  note: {
    color: '',
    fontFamily: '',
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '-0.094rem',
    lineHeight: '0.75rem',
  },
}))

const customVariants = [
  'rating', 
  'banner', 
  'priceCard', 
  'body3', 
  'body4', 
  'button1',
  'button2',
  'button3',
  'caption2',
  'caption3',
  'caption4',
  'link2',
  'sale',
  'sale2',
  'sale3',
  'note'];

export const Typography = React.memo<any>(({
  customVariant, 
  children,
  TypographyProps,
}:{
  customVariant?: any; 
  children: any;
  TypographyProps?: any;
}) => {
  const classes = useStyles();

  return <MUITypography 
    variant={customVariants.includes(customVariant) ? 'body1' : customVariant} 
    className={
      customVariant === 'priceCard'
      ? classes.priceCard
      : customVariant === 'rating'
      ? classes.rating
      : customVariant === 'banner'
      ? classes.banner
      : customVariant === 'body3'
      ? classes.body3
      : customVariant === 'body4'
      ? classes.body4
      : customVariant === 'button1'
      ? classes.button1
      : customVariant === 'button2'
      ? classes.button2
      : customVariant === 'button3'
      ? classes.button3
      : customVariant === 'caption2'
      ? classes.caption2
      : customVariant === 'caption3'
      ? classes.caption3
      : customVariant === 'caption4'
      ? classes.caption4
      : customVariant === 'link2'
      ? classes.link2
      : customVariant === 'sale'
      ? classes.sale
      : customVariant === 'sale2'
      ? classes.sale2
      : customVariant === 'sale3'
      ? classes.sale3
      : customVariant === 'note'
      ? classes.note
      : null }
      {...TypographyProps}
    >{children}</MUITypography>
})
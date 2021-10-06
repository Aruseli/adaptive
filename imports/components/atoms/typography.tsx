import { Typography as MUITypography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import cn from 'classnames';
import React from 'react';
import { fontFamilyDisplay, fontFamily } from '../../theme';


const useStyles = makeStyles(theme => ({
  rating: {
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  banner: {
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  priceCard: {
    color: '#FF2525',
    fontFamily: fontFamilyDisplay,
    fontSize: 'calc((112.5% + 2vw) / 2)', //'2rem',
    fontWeight: 900,
    letterSpacing: 0,
    lineHeight: '2.25rem',
  },
  body3: {
    fontFamily: fontFamily,
    fontSize: 'calc((112.5% + 1vw) / 2)',
    fontWeight: 500,
    letterSpacing: '-0.023rem',
    lineHeight: '1.25rem',
  },
  body4: {
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
  },
  button2: {
    color: '#fff',
    fontFamily: fontFamily,
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: '-0.023rem',
    lineHeight: '1.25rem',
  },
  button3: {
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  subtitle: {
    fontFamily: fontFamily,
    color: '#969290',
    fontSize: '1rem', //'calc((112.5% + 0.5vw) / 2)',
    fontWeight: 500,
    letterSpacing: '-0.023rem',
  },
  caption3: {
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  caption4: {
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  link2: {
    fontFamily: '',
    fontSize: '',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '',
    fontStyle: '',
  },
  sale: {
    color: '#969290',
    textDecoration: 'line-through',
    fontFamily: fontFamilyDisplay,
    fontSize: 'calc((112.5% + 1vw) / 2)',
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: '1.5rem',
  },
  sale2: {
    color: '#fff',
    fontFamily: fontFamilyDisplay,
    fontSize: '1.2rem',
    fontWeight: 700,
    letterSpacing: '-0.025rem',
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
  'subtitle',
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
  color,
  TypographyProps,
  additionalClasses,
}:{
  customVariant?: any; 
  children: any;
  color?: string;
  TypographyProps?: any;
  additionalClasses?: any;
}) => {
  const classes = useStyles();

  return <MUITypography 
    variant={customVariants.includes(customVariant) ? 'body1' : customVariant} 
    color={color}
    className={cn(
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
      : customVariant === 'subtitle'
      ? classes.subtitle
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
      : null, additionalClasses )}
      {...TypographyProps}
    >{children}</MUITypography>
})
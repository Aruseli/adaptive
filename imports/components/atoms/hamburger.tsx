import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import cn from 'classnames';
import _ from 'lodash';


const useStyles = makeStyles(theme => ({
  container: {
	position: 'relative',
	width: '1.5rem',
	height: '1.5rem',
  },
  hamburger: {
	display: 'block',
	position: 'absolute',
	left: 0,
	width: '1.5rem',
	height: 2,
	backgroundColor: 'rgba(0, 0, 0, .85)',
	opacity: 1,
	transform: 'rotate(0deg)',
	transition: 'opacity 100ms linear, top 100ms ease, transform 500ms ease-in-out',
  },
  hamburgerTop: {
	top: 4,
  },
  hamburgerTopActive: {
	top: 11,
	transform: 'rotate(315deg)',
  },
  hamburgerMid: {
	top: 11,
	transition: 'opacity 20ms linear',
  },
  hamburgerMidActive: {
	opacity: 0,
	top: 11,
  },
  hamburgerBottom: {
	top: 18,
  },
  hamburgerBottomActive: {
	top: 11,
	transform: 'rotate(-315deg)',
  },
}));

export const Hamburger = React.memo<any>(({
  activation,
  onClick = () => {},
  IconButtonStyle = {},
}:{
  activation: boolean;
  onClick?: () => any;
  IconButtonStyle?: any;
}) => {
  const classes = useStyles();

  return(
	<IconButton style={IconButtonStyle} component='div' onClick={() => onClick()}>
	  <div className={classes.container}>
		<span className={cn(classes.hamburger, !activation ? classes.hamburgerTop : classes.hamburgerTopActive)} />
		<span className={cn(classes.hamburger, !activation ? classes.hamburgerMid : classes.hamburgerMidActive)} />
		<span className={cn(classes.hamburger, !activation ? classes.hamburgerBottom : classes.hamburgerBottomActive)} />
	  </div>
	</IconButton>
  )
}, _.isEqual);
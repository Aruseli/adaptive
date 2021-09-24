import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { BadgeWithBorder } from '../../icons/badge-with-border';


const useStyles = makeStyles(theme => ({
	badgeArea: {
		position: 'relative',
		width: '2rem',
		height: '1.5rem',
		background: '#aa00ff',
		'&:after': {
			content: '"/badge-edge.svg"',
			position: 'absolute',
			right: -20,
		}
	},
}))

export const BadgeSaleVolumeQuantity = React.memo(({
	sale,
	volume,
	quantity,
}:{
	sale?: any;
	volume?: any;
	quantity?: any;
}) => {
	const classes = useStyles();
	return (<div className={classes.badgeArea}>
		<Typography variant='h2' style={{zIndex: 2, color: '#000', position: 'absolute'}}>{sale}</Typography>
		
	</div>)
})

export const BadgeBestSeller = React.memo(() => {
	const classes = useStyles();
	return <Typography variant='body1'>Бестселлер</Typography>
})
import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const img = require('../../../public/badge-edge.svg')

const useStyles = makeStyles(theme => ({
	badgeArea: {
		backgroundImage: 'url("../../../public/badge.svg")',
		backgroundPosition: 'center',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		width: '6vw', height: '4vh',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'flex-end',
		alignItems: 'center',
	}
}))

export const BadgeSaleVolumeQuantity = React.memo(({
	sale = 20,
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

export const BadgeSale = React.memo(() => {
	const classes = useStyles();
	return <div className={classes.badgeArea}>
		<Typography variant='h3' component='div' align='center' style={{zIndex: 2, color: '#fff', fontStyle: 'italic', width: '100%'}}>-24%</Typography>
	</div>
})
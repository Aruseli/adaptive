import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { BadgeWithBorder } from '../../icons/badge-with-border';


const useStyles = makeStyles(theme => ({
	badgeArea: {
		position: 'relative',
		width: '2rem',
	}
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
		<Typography variant='h2' style={{zIndex: 2, color: '#fff'}}>{sale}</Typography>
		<BadgeWithBorder 
			fill='#ffaa12'
			svgProps={{
				style: {position: 'absolute', top: 0, left: 0}
			}}
		/>
	</div>)
})
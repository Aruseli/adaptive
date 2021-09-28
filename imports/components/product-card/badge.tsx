import { makeStyles } from '@material-ui/core';
import { Typography } from '../atoms/typography';
import React from 'react';


const PREFIX = process.env.NEXT_PUBLIC_GH || '';

const useStyles = makeStyles(theme => ({
	badgeArea: {
		backgroundImage: `url("${PREFIX}/badge.svg")`,
		backgroundPosition: 'center',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		width: '6vw', height: '4vh',
		maxWidth: 76,
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'flex-end',
		alignItems: 'center',
	}
}))

export const BadgeBestSeller = React.memo(() => {
	const classes = useStyles();
	return <Typography customVariant='body1'>Бестселлер</Typography>
})

export const SaleBadge = React.memo(({SaleBadgeProps}:{SaleBadgeProps?: any;}) => {
	const classes = useStyles();
	return <div className={classes.badgeArea} {...SaleBadgeProps}>
		<Typography 
			customVariant='sale2' 
			TypographyProps={{
				component: 'div', 
				align: 'center',
				style: {zIndex: 2, width: '100%'},
			}}>-24%</Typography>
	</div>
})
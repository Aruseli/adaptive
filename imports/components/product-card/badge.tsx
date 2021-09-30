import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Typography } from '../atoms/typography';
import cn from 'classnames';
import { isSmaller1024 } from './product-card';


const PREFIX = process.env.NEXT_PUBLIC_GH || '';

const useStyles = makeStyles(theme => ({
	badgeArea: {
		backgroundImage: `url("${PREFIX}/badge.svg")`,
		backgroundPosition: 'center',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		width: '6vh', height: '3vh',
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

export const SaleBadge = React.memo(({SaleBadgeProps, saleBadgeStyle}:{SaleBadgeProps?: any; saleBadgeStyle?: any;}) => {
	const classes = useStyles();
	const smaller1024 = isSmaller1024();

	return <div className={cn(classes.badgeArea, saleBadgeStyle)} {...SaleBadgeProps}>
		<Typography 
			customVariant={smaller1024 === true ? 'sale3' : 'sale2' }
			TypographyProps={{
				component: 'div', 
				align: 'center',
				style: {zIndex: 2, width: '100%'},
			}}>-24%</Typography>
	</div>
})
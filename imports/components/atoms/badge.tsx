import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Typography } from './typography';
import cn from 'classnames';
import { isSmaller1024 } from '../product-card/product-card';
import { PREFIX } from '../api/env';
import { useTranslation } from '../../i18n';


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
	},
	badgeVolumeQuantityArea: {
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

export const BadgeBestSeller = React.memo<any>(() => {
	const classes = useStyles();
	return <Typography customVariant='body1'>Бестселлер</Typography>
})

export const SaleBadge = React.memo<any>(({
	SaleBadgeProps, 
	saleBadgeStyle,
	percent = '-24%'
}:{
	SaleBadgeProps?: any; 
	saleBadgeStyle?: any;
	percent?: any;
}) => {
	const classes = useStyles();
	const smaller1024 = isSmaller1024();

	return <div className={cn(classes.badgeArea, saleBadgeStyle)} {...SaleBadgeProps}>
		<Typography 
			customVariant={smaller1024 === true ? 'sale3' : 'sale2' }
			TypographyProps={{
				component: 'div', 
				align: 'center',
				style: {zIndex: 2, width: '100%'},
			}}>{percent}</Typography>
	</div>
})

export const VolumeQuantityBadge = React.memo<any>(({
	VolumeQuantityBadgeProps, 
	volumeQuantityBadgeStyle,
	volume = 6,
	quantity = 0.5,
}:{
	VolumeQuantityBadgeProps?: any; 
	volumeQuantityBadgeStyle?: any;
	volume?: number;
	quantity?: number;
}) => {
	const classes = useStyles();
	const { t } = useTranslation();

	return <div className={cn(classes.badgeVolumeQuantityArea, volumeQuantityBadgeStyle)} {...VolumeQuantityBadgeProps}>
		<Typography 
			customVariant='button2'
			TypographyProps={{
				component: 'div', 
				align: 'center',
				style: {zIndex: 2, width: '100%'},
			}}>{volume}&#120;{quantity}{t('liter')}</Typography>
	</div>
})
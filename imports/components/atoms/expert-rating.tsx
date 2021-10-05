import { Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import cn from 'classnames';
import React from 'react';


const useStyles = makeStyles(theme => ({
	badge: {
		borderRadius: 25,
		width: '2rem',
		height: '2rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	horizontalBadge: {
		width: 'max-content',
		height: '1.5rem',
	},
	typographyArea: {
		padding: '0 8px',
	}
}))

export const ExpertRating = React.memo<any>(({
	badgeBorderColor = '#ceb1b1',
	rating, 
	num1 = 98,
	num2 = 95,
	horizontalBadge = false,
	ExpertRatingBadgeProps,
	expertRatingBadgeStyle,
}:{
	badgeBorderColor?: string;
	rating?: number; 
	num1?: number;
	num2?: number;
	horizontalBadge?: boolean;
	ExpertRatingBadgeProps?: any;
	expertRatingBadgeStyle?: any;
}) => {
	const classes = useStyles();

	return <div style={{border: `2px solid ${badgeBorderColor}`,}} className={cn(classes.badge, !horizontalBadge && classes.horizontalBadge,expertRatingBadgeStyle)} {...ExpertRatingBadgeProps} aria-labelledby={`оценка сомелье ${rating}`}>
			<Typography variant='caption' className={!horizontalBadge && classes.typographyArea} component='div'>{horizontalBadge ? rating : (rating ? `Vivini ${rating}` : num1 ? `DC ${num1}` : num2 ? `RP ${num2}` : null)}</Typography>
		</div>
})

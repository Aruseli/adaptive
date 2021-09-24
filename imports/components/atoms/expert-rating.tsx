import { Chip, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import cn from 'classnames';
import React from 'react';


const useStyles = makeStyles(theme => ({
	badge: {
		border: '1px solid #ceb1b1',
		borderRadius: 25,
		width: '2rem',
		height: '1.75rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	horizontalBadge: {
		width: '4.563rem',
		height: '1.5rem',
	}
}))

export const ExpertRating = React.memo<any>(({
	rating, 
	horizontalBadge = false,
}:{
	rating: number; 
	horizontalBadge?: boolean;
}) => {
	const classes = useStyles();

	return <div className={cn(classes.badge, !horizontalBadge && classes.horizontalBadge)} aria-labelledby={`оценка сомелье ${rating}`}>
			<Typography variant='caption' component='div'>{horizontalBadge ? rating : `Vivini ${rating}`}</Typography>
		</div>
})
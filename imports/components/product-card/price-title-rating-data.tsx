import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';

const useStyles = makeStyles(theme => ({
	dataGrid: {
		display: 'flex',
		flexDirection: 'column',
		columnGap: '0.5rem',
	},
	badgeSection: {
		
	}
}))
export const PriceTitleRating = React.memo<any>(() => {
	const classes = useStyles();

	return (<section className={classes.dataGrid}>
		<div className={classes.badgeSection}></div>
	</section>)
})
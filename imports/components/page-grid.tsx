import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { useStateSwitcherCatalogView } from './api/use-query-store';
import { CatalogPlaceholder } from './catalog-placeholder';
import { Filter } from './filters/desktop-filter';
import { Navigation } from './header/navigation';


const useStyles = makeStyles(theme => ({
	page: {
		display:'flex',
    flexDirection: 'column',
    width: '100%', 
		minHeight: '100vh',
		maxWidth: 1920,
		margin: '0 auto',
		padding: '0 28px',
		boxSizing: 'border-box',
	},
	mainPageArea: {
		display: 'flex',
		zIndex: 1,
	},
	header: {
		width: '100%', 
		height: 'auto', 
		position: 'sticky',
		top: 0,
		zIndex: 2,
		padding: '12px 0',
		boxSizing: 'border-box',
	},
	mainContentArea: {
		position: 'relative',
		width: '100%',
	},
	asideContentArea: {
		display: 'flex',
		flexDirection: 'column',
		gap: 28,
	},
}))

export const MainGrid = React.memo<any>(() => {
	const classes = useStyles();

	const [stateSwitcher, setStateSwitcher] = useStateSwitcherCatalogView();
	
	return (<div className={classes.page}>
			<Paper component='header' elevation={0} className={classes.header}><Navigation /></Paper>
			<main className={classes.mainPageArea}>
				<aside className={classes.asideContentArea}>
					<Filter />
				</aside>
				<main className={classes.mainContentArea }>
					<CatalogPlaceholder />
				</main>
			</main>
			<footer></footer>
		</div>
	)
});
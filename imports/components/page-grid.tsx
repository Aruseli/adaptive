import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import cn from 'classnames';
import React, { ReactNode } from 'react';
import { useStateDrawerFilter, useStateSwitcher } from './api/use-query-store';
import { CatalogPlaceholder } from './catalog-placeholder';
import { CheckboxesGroup, drawerWidth } from './filter';
import { ProductCard } from './product-card/product-card';


const useStyles = makeStyles(theme => ({
	page: {
		display:'grid',
    gridTemplateRows: 'min-content auto',
    width: '100%', 
		height: '100vh',
		maxWidth: 1920,
		margin: '0 auto',
	},
	mainPageArea: {
		display: 'flex',
		zIndex: 1,
	},
	content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
	drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },


	header: {
		width: '100%', 
		height: '15vh', 
		backgroundColor: '#54a0ff',
		position: 'sticky',
		top: 0,
		zIndex: 2,
	},
	zoneForScroll: {
		position: 'relative',
		overflowY: 'scroll',
	},
	scrollableZone: {
		width: '100%', 
		height: '2000px', 
		backgroundColor: '#f5f3f3',
		display:'grid',
		gridTemplateColumns: 'max-content 1fr',
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			flexWrap: 'wrap',
		}
	},
	asideBlock: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		}
	},
	articleBlocCatalogArea: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		gap: 32,
	},
	articleBlockGrid: {
		display: 'grid',
		flexDirection: 'column',
		gap: 32,
	},
}))

export const MainGrid = React.memo<any>(({
	header
}:{
	header?: ReactNode;
}) => {
	const classes = useStyles();
	const [stateSwitcher, setStateSwitcher] = useStateSwitcher();
	const [drawerFilter, setDrawerFilter] = useStateDrawerFilter();
	
	return (<div className={classes.page}>
			<Paper component='header' elevation={1} className={classes.header}>{header}</Paper>
			<main className={classes.mainPageArea}>
				<CheckboxesGroup />
				<main
					className={cn(classes.content, {
						[classes.contentShift]: drawerFilter,
					})}
				>
					<CatalogPlaceholder />
				</main>
			</main>
			<footer></footer>
		</div>
	)
});
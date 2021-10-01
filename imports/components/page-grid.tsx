import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { ReactNode } from 'react';
import { useStateSwitcher } from './api/use-query-store';
import { CatalogPlaceholder } from './catalog-placeholder';
import { CheckboxesGroup } from './filter';
import { ProductCard } from './product-card/product-card';


const useStyles = makeStyles(theme => ({
	page: {
		display:'grid',
    gridTemplateRows: 'min-content auto',
    width: '100%', 
		height: '100vh',
		maxWidth: 1472,
		margin: '0 auto',
	},
	header: {
		width: '100%', 
		height: '15vh', 
		backgroundColor: '#54a0ff',
		position: 'static',
		top: 0,
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
	
	return (<div className={classes.page}>
			<Paper component='header' elevation={3} className={classes.header}>{header}</Paper>
			<div className={classes.zoneForScroll}>
				<main className={classes.scrollableZone}>
					<aside className={classes.asideBlock}>
						<CheckboxesGroup />
					</aside>
					<article className={classes.articleBlocCatalogArea}>
						<CatalogPlaceholder />
						{/* <ProductCard 
							title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
						/> */}
					</article>
				</main>
			</div>
			<footer></footer>
		</div>
	)
});
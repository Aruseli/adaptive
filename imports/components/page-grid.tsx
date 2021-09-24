import React, { ReactNode } from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { CheckboxesGroup } from './filter';
import { ProductCard } from './product-card/product-card';
import { ProductImagesGallery } from './product-images-gallery';


const useStyles = makeStyles(theme => ({
	page: {
		display:'grid',
    gridTemplateRows: 'min-content auto',
    width: '100%', 
		height: '100vh',
		maxWidth: 1472,
		margin: '0 auto',
		border: '2px solid #000',
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
		// padding: 16,
		border: '1px dashed #000',
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		}
	},
	articleBlock: {
		display: 'flex',
		flexDirection: 'column',
		gap: 32,
		padding: '0 1.75rem',
		'@media(max-width: 1023px)': {
			padding: '0 1rem',
		}
	},
}))

const PREFIX = process.env.NEXT_PUBLIC_GH || '';
const images = [
	{
		id: 'a',
		src: `${PREFIX}/wine.png`,
		alt: 'red wine',
	},
	{
		id: 'b',
		src: `${PREFIX}/wine_n.jpeg`,
		alt: 'red wine',
	},
	{
		id: 'c',
		src: `${PREFIX}/wine_nn.jpeg`,
		alt: 'red wine',
	}
]

export const MainGrid = React.memo<any>(({
	header
}:{
	header?: ReactNode;
}) => {
	const classes = useStyles();

	return (<div className={classes.page}>
			<Paper component='header' elevation={3} className={classes.header}>{header}</Paper>
			<div className={classes.zoneForScroll}>
				<main className={classes.scrollableZone}>
					<aside className={classes.asideBlock}>
						{/* <CheckboxesGroup /> */}
					</aside>
					<article className={classes.articleBlock}>
						<ProductCard 
							productImages={<ProductImagesGallery images={images} />}
							title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
						/>
						<ProductCard 
							productImages={<ProductImagesGallery images={images} />}
							title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
						/>
					</article>
				</main>
			</div>
			<footer></footer>
		</div>
	)
});
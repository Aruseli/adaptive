import React, { ReactNode } from 'react';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { CheckboxesGroup } from './filter';
import { ProductCard } from './product-card/product-card';
import { ProductCardGrid } from './product-card/product-card-grid';
import { ProductImagesGallery } from './product-images-gallery';
import { SaleBadge } from './product-card/badge';


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
		[theme.breakpoints.down('md')]: {
			display: 'flex',
			flexDirection: 'column',
			flexWrap: 'wrap',
		}
	},
	asideBlock: {
		[theme.breakpoints.down('md')]: {
			display: 'none',
		}
	},
	articleBlock: {
		display: 'flex',
		flexDirection: 'column',
		gap: 32,
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
							productImages={
								<ProductImagesGallery 
									images={images} 
									saleBadge={
										<SaleBadge SaleBadgeProps={{
											style: {
												position: 'absolute',
												top: 0, right: 0,
											}
										}} />}
								/>
							}
							title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
						/>
						{/* <ProductCardGrid 
							productImages={<ProductImagesGallery images={images} />}
							title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
						/> */}
					</article>
				</main>
			</div>
			<footer></footer>
		</div>
	)
});
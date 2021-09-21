import makeStyles from '@material-ui/core/styles/makeStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';
import React, { useState } from 'react';
import cn from 'classnames';


const useStyles = makeStyles(theme => ({
	galleryGrid: {
		width: '100%', 
		minWidth: '15rem',
		display: 'grid',
		gridTemplateColumns: 'min-content auto',
		gridTemplateRows: '50vh',
		gridColumnGap: '1rem',
		flexDirection: 'column',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column-reverse',
			display: 'flex',
			'& > :nth-child(2)': {
				height: '50vh',
			}
		},
	},
	wrapperImg: {
		position: 'relative',
	},
	image: {
		position: 'absolute',
		top: 0, left: 0,
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		display: 'block',
	},

	itemsArrangement: {
		display: 'flex',
		flexDirection: 'column',
		rowGap: '1rem',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'row',
			columnGap: '1rem',
		}
	},
	blockAreaForSmallImages: {
		position: 'relative',
		width: '4rem',
		height: '5rem',
		backgroundColor: '#fff',
    borderRadius: '25%',
    boxShadow: '0 0 0px 1px rgb(0 0 0 / 9%), 0 0 1px 2px rgb(0 0 0 / 12%)',
		overflow: 'hidden',
	},
	'@keyframes mountImage': {
		'0%': {opacity: 0},
		'25%': {opacity: 0.25},
		'50%': {opacity: 0.5},
		'75%': {opacity: 0.75},
		'100%': {opacity: 1},
	},
	activeImageMount: {
		animationName: '$mountImage',
		animation: '1s alternate slidein',
	}
}));

const GalleryGrid = React.memo<any>(({children}:{children: any}) => {
	const theme = useTheme();
	const classes = useStyles();
	
	return <div className={classes.galleryGrid}>
			{children}
		</div>;
})

const GalleryImage = React.memo<any>(({
	imageClasses = {},
	src = '',
	alt = '',
	ImagesProps = {},
}:{
	imageClasses?: any;
	src?: any;
	alt?: any
	ImagesProps?: any;
}) => {
	return <img 
			src={src} 
			alt={alt} 
			className={imageClasses} 
			{...ImagesProps} 
		/>
}, )

export const  ProductImagesGallery = React.memo(({
		images,
		ImageProps,
		nonActiveImagesProps,
	}:{
		images: { id: any; src: any; alt: string; }[];
		ImageProps?: any;
		nonActiveImagesProps?: any;
	}) => {
	const classes = useStyles();
	
	const [activeImage, setActiveImage] = useState(0);
	const [prevImage, setPrevImage] = useState(0);

	const theme = useTheme();
	const xsDownSize = useMediaQuery(theme.breakpoints.down('xs'));

	return (<GalleryGrid>
			{images.length < 1 || <div className={classes.itemsArrangement}>{images.map((img, i) => (
				
				<div 
					key={img.id} 
					className={classes.blockAreaForSmallImages}
					onClick={() => {
						setPrevImage(activeImage);
						setActiveImage(i);
					}}
				>
					<GalleryImage 
						src={img.src} 
						alt={img.alt} 
						imageClasses={classes.image} 
						ImageProps={ImageProps}
					/>
				</div>
				))}
			</div>}
			<div className={classes.wrapperImg}>
				{[<GalleryImage 
					key={activeImage} 
					src={images[activeImage]?.src} 
					alt={images[activeImage]?.alt} 
					imageClasses={cn(classes.image, classes.activeImageMount)} 
					ImageProps={ImageProps} 
				/>]}
			</div>
		</GalleryGrid>
	);	
})
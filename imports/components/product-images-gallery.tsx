import makeStyles from '@material-ui/core/styles/makeStyles';
import cn from 'classnames';
import React, { useState } from 'react';


const useStyles = makeStyles(theme => ({
	galleryGrid: {
		width: '100%', 
		height: 'auto',
		display: 'grid',
		gridTemplateColumns: 'min-content auto',
		boxSizing: 'border-box',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column-reverse',
			display: 'flex',
			'& > :nth-child(2)': {
				height: '50vh',
			}
		},
	},
	wrapperImagesViewer: {
		position: 'relative',
		height: 'calc(100vh - 500px)',
	},
	image: {
		position: 'absolute',
		top: 0, left: 0,
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		display: 'block',
	},

	imagesArrangement: {
		display: 'flex',
		flexDirection: 'column',
		boxSizing: 'border-box',
		marginRight: '0.75rem',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'row',
			columnGap: '1rem',
		}
	},
	notActiveImage: {
		position: 'relative',
		width: '3.5rem',
		height: '3.5rem',
		backgroundColor: '#fff',
		borderRadius: 8,
		overflow: 'hidden',
		marginBottom: 4,
		'&:hover': {
			boxSizing: 'border-box',
			border: '1px solid #FCF3ED',
		},
	},
	'@keyframes mountImage': {
		'0%': {opacity: 0},
		'25%': {opacity: 0.25},
		'50%': {opacity: 0.5},
		'75%': {opacity: 0.75},
		'100%': {opacity: 1},
	},
	mainActiveImageMount: {
		animationName: '$mountImage',
		animation: '1s alternate slide-in',
	},
	activeImage: {
		border: '1px solid #F55760',
		boxSizing: 'border-box',
		borderRadius: 8,
	}
}));

const GalleryGrid = React.memo<any>(({children}:{children: any}) => {
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
		saleBadge,
	}:{
		images: { id: any; src: any; alt: string; }[];
		ImageProps?: any;
		nonActiveImagesProps?: any;
		saleBadge?: any;
	}) => {
	const classes = useStyles();
	
	const [activeImage, setActiveImage] = useState(0);
	const [prevImage, setPrevImage] = useState(0);
	
	return (<GalleryGrid>
			{images.length < 1 || <div className={classes.imagesArrangement}>{images.map((img, i) => (
				<div 
					key={img.id} 
					className={cn(classes.notActiveImage, activeImage === i && classes.activeImage)}
					onClick={() => {
						setPrevImage(activeImage);
						setActiveImage(i);
					}}
					{...nonActiveImagesProps}
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
			<div className={classes.wrapperImagesViewer}>
				{saleBadge}
				{[<GalleryImage 
					key={activeImage} 
					src={images[activeImage]?.src} 
					alt={images[activeImage]?.alt} 
					imageClasses={cn(classes.image, classes.mainActiveImageMount)} 
					ImageProps={ImageProps} 
				/>]}
			</div>
		</GalleryGrid>
	);	
})
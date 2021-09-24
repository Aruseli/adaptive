import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Rating from '@material-ui/lab/Rating';
import React from 'react';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.5rem',
    },
    badge: {
        border: '1px solid #ceb1b1',
        borderRadius: 25,
        width: 'max-content',
        height: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.2rem',
        [theme.breakpoints.down('sm')]: {
            width: '2rem',
        }
    }
}))

export const CustomeRating = React.memo<any>(({value, numberReviews=15}:{value: number; numberReviews?: number}) => {
    const classes = useStyles();

    return (<div className={classes.root}>
            <Rating name="client-rating" value={value} readOnly />
            <Button variant='text'>{numberReviews} отзывов</Button>
        </div>
    )
})
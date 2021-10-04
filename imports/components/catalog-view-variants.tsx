import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import cn from 'classnames';
import React, { useCallback } from 'react';
import { GridView } from '../icons/grid-view';
import { ListView } from '../icons/list-view';
import { useStateSwitcherCatalogView } from './api/use-query-store';
import { Typography } from './atoms/typography';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
  }
}))

export const CatalogViewVariants = React.memo<any>(({
  additionalClasses, 
  buttonGroupProps, 
}:{
  additionalClasses?: any; 
  buttonGroupProps?: any; 
}) => {
  const classes = useStyles();
  const [stateSwitcher, setStateSwitcher] = useStateSwitcherCatalogView();

  return (<div className={cn(classes.root, additionalClasses)}>
    <Typography customVariant='body2' TypographyProps={{style: {textTransform: 'none'}}}>Вид</Typography>
    <ButtonGroup variant="text" color="primary" {...buttonGroupProps}>
      <IconButton aria-label="catalog-list-view" onClick={useCallback(() => setStateSwitcher('list'), [])}>
        <ListView fill={stateSwitcher === 'list' ? "#f55760" : "#AFACA9"} />
      </IconButton>
      <IconButton aria-label="catalog-grid-view" size='small' onClick={useCallback(() => setStateSwitcher('grid'), [])}>
        <GridView fill={stateSwitcher === 'grid' ? "#f55760" : "#AFACA9"} />
      </IconButton>
    </ButtonGroup>
  </div>
  )
})
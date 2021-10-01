import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import cn from 'classnames';
import { Typography } from './atoms/typography';
import { useStateSwitcher } from './api/use-query-store';

import { ListView } from '../icons/list-view';
import { GridView } from '../icons/grid-view';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 0.1fr)',
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
  const [stateSwitcher, setStateSwitcher] = useStateSwitcher();

  return (<div className={cn(classes.root, additionalClasses)}>
    <Typography customVariant='body2' TypographyProps={{style: {textTransform: 'none'}}}>Вид</Typography>
    <ButtonGroup variant="text" color="primary" {...buttonGroupProps}>
      <IconButton aria-label="catalog-list-view" onClick={() => setStateSwitcher('list')}>
        <ListView fill={stateSwitcher === 'list' || '"#AFACA9"'} />
      </IconButton>
      <IconButton aria-label="catalog-grid-view" size='small' onClick={() => setStateSwitcher('grid')}>
        <GridView fill={stateSwitcher === 'grid' || '"#AFACA9"'} />
      </IconButton>
    </ButtonGroup>
  </div>
  )
})
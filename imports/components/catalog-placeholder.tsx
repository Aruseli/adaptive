import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useStateSwitcherCatalogView } from './api/use-query-store';
import { AppBarDisplayOptionsBar } from './header/app-bar-display-options';
import { ProductCard } from './product-card/product-card';


const useStyles = makeStyles(theme => ({
  productCardStyle: {
    backgroundColor: '#fff',
  },
  catalogListView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  catalogGridView: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, minmax(20vw, 1fr))',
  },
})) 

export const CatalogPlaceholder = React.memo<any>(() => {
  const classes = useStyles();
  const [stateSwitcher, setStateSwitcher] = useStateSwitcherCatalogView();
  const chips = [
    {
      id:'a',
      title: 'красное',
    },
    {
      id:'b',
      title: 'Италия',
    }
  ]

  const CardComponent = stateSwitcher === 'list' ? ProductCard : ProductCard;

  return (<><AppBarDisplayOptionsBar selectedFilterOptions={chips}/>
      <Box component='section' className={stateSwitcher === 'list' ? classes.catalogListView : classes.catalogGridView}>
        <CardComponent backgroundColor={false}
          title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
        />
        <CardComponent 
          title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
        />
        <CardComponent 
          title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
        />
        <CardComponent 
          title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
        />
        <CardComponent 
          title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
        />
        <CardComponent 
          title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
        />
      </Box>
    </>
  )
})
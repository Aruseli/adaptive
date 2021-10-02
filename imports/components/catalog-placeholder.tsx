import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { AppBarDisplayOptionsBar } from './header/app-bar-display-options';
import { ProductCard } from './product-card/product-card';


const useStyles = makeStyles(theme => ({

})) 

export const CatalogPlaceholder = React.memo<any>(() => {

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

  return (<><AppBarDisplayOptionsBar selectedFilterOptions={chips}/>
      <Box component='section'>
        <ProductCard 
          title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
        />
        <ProductCard 
          title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
        />
      </Box>
    </>
  )
})
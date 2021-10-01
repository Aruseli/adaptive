import Box from '@material-ui/core/Box';
import React from 'react';
import { CatalogViewVariants } from './catalog-view-variants';
import { DisplayOptionsBar } from './header/app-bar-display-options';
import { ProductCard } from './product-card/product-card';


export const CatalogPlaceholder = React.memo(() => {
  return (<><DisplayOptionsBar>
        <CatalogViewVariants />
      </DisplayOptionsBar>
      <Box component='section'>
        <ProductCard 
          title='Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015'	
        />
      </Box>
    </>
  )
})
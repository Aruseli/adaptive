import { Divider } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useStateSwitcherCatalogView } from './api/use-query-store';
import { Displacement } from './atoms/displacement';
import { AppBarDisplayOptionsBar } from './header/app-bar-display-options';
import { ProductCard } from './product-card/product-card';
import { ProductSnippet } from './product-snippet/product-snippet';


const useStyles = makeStyles(theme => ({
  navStyles: {
    marginBottom: 24,
  },
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
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: 'minmax(auto, 648px)',
    columnGap: '1vw',
    rowGap: '5vh',
    // '&::nth-child(4)': {

    // }
  },
  productCardInCatalogList: {
    paddingTop: '0.75rem',
    paddingLeft: 0,
    paddingRight: 0,
    gridTemplateColumns: '1.2fr 1.3fr minmax(max-content, 1fr)',
  }
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

  const product=[
    {
      id: 'a',
      title: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',	
      alt: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',
      country: 'Италия',
      region: 'Тоскана',
      zone: 'Кьянти Коллинези',
      wineColor: 'Красное',
      degreeOfSweetness: 'Сухое',
      grapeSort: 'Каберне Совиньон',
      valueClientRating: 3.2,
      numberClientReviews: 1,
      displacements: [
        {
          id: 'a',
          displacement: 0.2,
        },
        {
          id: 'b',
          displacement: 0.5,
        },
        {
          id: 'e',
          displacement: 0.75,
        },
        {
          id: 't',
          displacement: 1,
        }
      ]
    },
    {
      id: 's',
      title: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',	
      alt: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',
      country: 'Италия',
      region: 'Тоскана',
      zone: 'Кьянти Коллинези',
      wineColor: 'Красное',
      degreeOfSweetness: 'Сухое',
      grapeSort: 'Каберне Совиньон',
      valueClientRating: 3.2,
      numberClientReviews: 5,
      displacements: [
        {
          id: 'a',
          displacement: 0.2,
        },
        {
          id: 'b',
          displacement: 0.5,
        },
        {
          id: 'e',
          displacement: 0.75,
        },
        {
          id: 't',
          displacement: 1,
        }
      ]
    },
    {
      id: 'f',
      title: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',	
      alt: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',
      country: 'Италия',
      region: 'Тоскана',
      zone: 'Кьянти Коллинези',
      wineColor: 'Красное',
      degreeOfSweetness: 'Сухое',
      grapeSort: 'Каберне Совиньон',
      valueClientRating: 3.2,
      numberClientReviews: 10,
      displacements: [
        {
          id: 'a',
          displacement: 0.2,
        },
        {
          id: 'b',
          displacement: 0.5,
        },
        {
          id: 'e',
          displacement: 0.75,
        },
        {
          id: 't',
          displacement: 1,
        }
      ]
    },
    {
      id: 'q',
      title: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',	
      alt: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',
      country: 'Италия',
      region: 'Тоскана',
      zone: 'Кьянти Коллинези',
      wineColor: 'Красное',
      degreeOfSweetness: 'Сухое',
      grapeSort: 'Каберне Совиньон',
      valueClientRating: 3.2,
      numberClientReviews: 2,
      displacements: [
        {
          id: 'a',
          displacement: 0.2,
        },
        {
          id: 'b',
          displacement: 0.5,
        },
        {
          id: 'e',
          displacement: 0.75,
        },
        {
          id: 't',
          displacement: 1,
        }
      ]
    },
    {
      id: 'w',
      title: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',	
      alt: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',
      country: 'Италия',
      region: 'Тоскана',
      zone: 'Кьянти Коллинези',
      wineColor: 'Красное',
      degreeOfSweetness: 'Сухое',
      grapeSort: 'Каберне Совиньон',
      valueClientRating: 3.2,
      numberClientReviews: 23,
      displacements: [
        {
          id: 'a',
          displacement: 0.2,
        },
        {
          id: 'b',
          displacement: 0.5,
        },
        {
          id: 'e',
          displacement: 0.75,
        },
        {
          id: 't',
          displacement: 1,
        }
      ]
    },
    {
      id: 't',
      title: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',	
      alt: 'Вино Tenuta di Trecciano, "Terra Rossa" Senesi Riserva DOCG, 2015',
      country: 'Италия',
      region: 'Тоскана',
      zone: 'Кьянти Коллинези',
      wineColor: 'Красное',
      degreeOfSweetness: 'Сухое',
      grapeSort: 'Каберне Совиньон',
      valueClientRating: 3.2,
      numberClientReviews: 11,
      displacements: [
        {
          id: 'a',
          displacement: 0.2,
        },
        {
          id: 'b',
          displacement: 0.5,
        },
        {
          id: 'e',
          displacement: 0.75,
        },
        {
          id: 't',
          displacement: 1,
        }
      ]
    }
  ]

  const CardComponent = stateSwitcher === 'list' ? ProductCard : ProductSnippet;

  return (<><AppBarDisplayOptionsBar selectedFilterOptions={chips} additionalNavClasses={classes.navStyles} />
      <Divider style={{marginBottom: 32}} />
      <Box component='section' className={stateSwitcher === 'list' ? classes.catalogListView : classes.catalogGridView}>
        {product.map(i => (<>
            <CardComponent backgroundColor={false} key={i.id}
              additionalproductCardGridContainerClasses={classes.productCardInCatalogList}
              title={i.title}
              divider
              alt={i.alt}
              country={i.country}
              region={i.region}
              zone={i.zone}
              wineColor={i.wineColor}
              degreeOfSweetness={i.degreeOfSweetness}
              grapeSort={i.grapeSort}
              valueClientRating={i.valueClientRating}
              numberClientReviews={i.numberClientReviews}
              displacements={i.displacements}
            />
          </>
        ))}
      </Box>
    </>
  )
})
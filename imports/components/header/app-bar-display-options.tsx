import makeStyles from '@material-ui/core/styles/makeStyles';
import cn from 'classnames';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FilterSelectedOptionChip } from '../atoms/filters-selected-option-chip';
import { OptionsSelector } from '../atoms/options-selector';
import { CatalogViewVariants } from '../catalog-view-variants';



const useStyles = makeStyles(theme => ({
  displayOptionsBarArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    backgroundColor: '#fff',
  },
  selectedFiltersOptionsAndViewArea: {
    display: 'grid',
    gridTemplateColumns: '1fr 0.1fr',
  },
  selectedFiltersOptionsChips: {
    display: 'grid',
    gridColumnGap: 8,
    gridTemplateColumns: 'repeat( auto-fit, minmax(112px, 0.08fr) )',
    alignContent: 'center',
  }
}));

export const AppBarDisplayOptionsBar = React.memo<any>(({
  children,
  selectedFilterOptions,
  additionalNavClasses,
}:{
  children: any;
  selectedFilterOptions?: {
    id: string;
    title: string;
  }[];
  additionalNavClasses?: any;
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleDelete = useCallback((id) => {
    alert('delete '+id);
  }, []);

  return (<nav className={cn(classes.displayOptionsBarArea, additionalNavClasses)}>
      <OptionsSelector />
      <div className={classes.selectedFiltersOptionsAndViewArea}>
        <div className={classes.selectedFiltersOptionsChips}>
          {selectedFilterOptions.map(chip => (
            <FilterSelectedOptionChip key={chip.id} id={chip.id} title={chip.title} handleDelete={handleDelete} />
          ))}
        </div>
        <CatalogViewVariants />
      </div>
    </nav>
  );
})








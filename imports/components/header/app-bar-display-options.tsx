import Select from '@material-ui/core/Select';
import makeStyles from '@material-ui/core/styles/makeStyles';

import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useStateSelectOptions } from '../api/use-query-store';
import { OptionsSelector } from '../atoms/options-selector';


const useStyles = makeStyles(theme => ({
  displayOptionsBarArea: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  sectionSelectedFiltersOptions: {
    display: 'grid',
    gridTemplateColumns: '1fr 0.1fr',
  }
}));

export const AppBarDisplayOptionsBar = React.memo<any>(({children}:{children: any;}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (<nav className={classes.displayOptionsBarArea}>
      <OptionsSelector />
      <div className={classes.sectionSelectedFiltersOptions}>

      </div>
    </nav>
  );
})








import { Button, IconButton, InputBase, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { useTranslation } from '../../i18n';


const useStyles = makeStyles(theme => ({
	navigationArea: {
		width: '100%', 
	},
  upperNavigationSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  upperNavigationButtonsBlock: {
    display: 'flex',
    gap: '1vw',
  },
  middleSection: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoSearchSection: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1vw',
  },
  catalogButton: {
    padding: '0 14px',
  },
  searchSection: {
    width: '40vw',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #DDDBD8',
    borderRadius: 8,
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));


export const Navigation = React.memo<any>(() => {
  const classes = useStyles();
  
  return (<Box component='header' className={classes.navigationArea}>
      <UpperNavigationSection />
      <SearchNavigationSection />
    </Box>
  )
});

const UpperNavigationSection = React.memo<any>(({
  geolocation = 'Москва',
}:{
  geolocation: string;
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (<div className={classes.upperNavigationSection}>
      <Button
        startIcon={<img src='./geolocation.svg' alt={t('navigation--geolocation')} />}
        onClick={() => alert('Moscowneversleep')}>{geolocation}</Button>
      <div className={classes.upperNavigationButtonsBlock}>
        <Button onClick={() => alert('Wedding')}>{t('navigation--wedding')}</Button>
        <Button onClick={() => alert('Business')}>{t('navigation--for-business')}</Button>
        <Button onClick={() => alert('Your order is arriving')}>{t('navigation--order-status')}</Button>
        <Button
          startIcon={<img src='./map-point.svg' alt={t('navigation--shops')} />}
          onClick={() => alert('List of shops')}>{t('navigation--shops')}</Button>
        <Button
          // startIcon={<img src='./geolocation.svg' alt={t('navigation--geolocation')} />}
          onClick={() => alert('FAQ')}>{t('navigation--help-consulting')}</Button>
        <Button
          variant='outlined'
          onClick={() => alert('Change you favorite language')} aria-labelledby={t('navigation--switch-site-to', {language: 'английский'})}>EN</Button>
      </div>
    </div>
  )
});

const SearchNavigationSection = React.memo<any>(() =>{
  const classes = useStyles();
  const { t } = useTranslation();

  return (<div className={classes.middleSection}>
      <div className={classes.logoSearchSection}>
        <div>
          <img src='./logo.svg' alt='logo' width='100%' height='100%' />
        </div>
        <Button 
          classes={{label: classes.catalogButton}}
          startIcon={<img src='./catalog-icon.svg' alt={t('navigation--catalog')} />}
          variant='contained' color='primary' onClick={() => alert('open catalog')}>{t('navigation--catalog')}</Button>
        <SearchInput />
      </div>
      <div>

      </div>
    </div>
  )
});

const SearchInput = React.memo<any>(() => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (<Box component="form" className={classes.searchSection}>
      <InputBase
        className={classes.searchInput}
        placeholder={t('navigation--search-input')}
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Button 
        color='primary' 
        variant='contained'
        type="submit" 
        aria-label="search"
      ><img src='./search-icon.svg' alt={t('navigation--search-icon')} /></Button>
    </Box>
  )
});

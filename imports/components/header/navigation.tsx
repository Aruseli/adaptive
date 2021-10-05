import { ButtonBase } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoodRoundedIcon from '@material-ui/icons/MoodRounded';
import React, { useCallback } from 'react';
import { useTranslation } from '../../i18n';
import { useTabsMenuSectionsNavigation } from '../api/use-query-store';


const useStyles = makeStyles(theme => ({
	navigationArea: {
		width: '100%', 
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuItemsTabs: {
   
  },
  logoSearchSection: {
    display: 'flex',
    // justifyContent: 'space-between',
    gap: '1.3vw',
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
  searchButton: {
    height: '100%',
  },
  loginFavBinContainer: {
    display: 'flex',
    gap: '1.5vw',
  },
  buttonWithIcons: {
    flexDirection: 'column',
  },
  startIconButtons: {
    marginRight: 0,
  },
  tabsStyles:{
    '& > *:first-child, & > *:last-child': {
      transition: 'width 0.3s ease',
      '&[class*=disabled]': {
        width: 0
      }
    }
  },
  imgStyle: {
    display: 'block',
    width: '100%',
  },
}));


export const Navigation = React.memo<any>(() => {
  const classes = useStyles();
  
  return (<Box component='div' className={classes.navigationArea}>
      <UpperNavigationSection />
      <SearchNavigationSection />
      <DownTabsMenuNavigation />
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
        startIcon={<img className={classes.imgStyle} src='./geolocation.svg' alt={t('navigation--geolocation')} />}
        onClick={() => alert('Moscowneversleep')}>{geolocation}</Button>
      <div className={classes.upperNavigationButtonsBlock}>
        <Button onClick={() => alert('Wedding')}>{t('navigation--wedding')}</Button>
        <Button onClick={() => alert('Business')}>{t('navigation--for-business')}</Button>
        <Button onClick={() => alert('Your order is arriving')}>{t('navigation--order-status')}</Button>
        <Button
          startIcon={<img className={classes.imgStyle} src='./map-point.svg' alt={t('navigation--shops')} />}
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
          <img className={classes.imgStyle} src='./logo.svg' alt='logo' width='100%' height='100%' />
        </div>
        <Button 
          classes={{label: classes.catalogButton}}
          startIcon={<img className={classes.imgStyle} src='./catalog-icon.svg' alt={t('navigation--catalog')} />}
          variant='contained' color='primary' onClick={() => alert('open catalog')}>{t('navigation--catalog')}</Button>
        <SearchInput />
      </div>
      <div className={classes.loginFavBinContainer}>
      <Button 
          classes={{
            label: classes.buttonWithIcons,
            startIcon: classes.startIconButtons,
          }}
          startIcon={<MoodRoundedIcon />}
        >
          {t('navigation--login')}
      </Button>
      <Button 
          classes={{
            label: classes.buttonWithIcons,
            startIcon: classes.startIconButtons,
          }}
          startIcon={<FavoriteBorderOutlinedIcon />}
        >
          {t('navigation--favorites')}
        </Button>
        <Button 
          classes={{
            label: classes.buttonWithIcons,
            startIcon: classes.startIconButtons,
          }}
          startIcon={<img className={classes.imgStyle} src='./bin.svg' alt={t('navigation--bin')} />}
        >
          {t('navigation--bin')}
        </Button>
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
        className={classes.searchButton}
      ><img className={classes.imgStyle} src='./search-icon.svg' alt={t('navigation--search-icon')} /></Button>
    </Box>
  )
});

const DownTabsMenuNavigation = React.memo<any>(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [menuItem, setMenuItem] = useTabsMenuSectionsNavigation();

  const handleChangeMenuItems = useCallback(() => {
    return 
  }, [])

  return (<Tabs
      value={menuItem}
      onChange={handleChangeMenuItems}
      variant="scrollable"
      scrollButtons="on"
      indicatorColor="primary"
      textColor="primary"
      aria-label={t('navigation--menu-items')}
      className={classes.tabsStyles}
    >
      <Tab label={t('navigation--menu-item-promotion')} />
      <Tab label={t('navigation--menu-item-wine')} />
      <Tab label={t('navigation--menu-item-champagne')} />
      <Tab label={t('navigation--menu-item-whiskey')} />
      <Tab label={t('navigation--menu-item-beer-cider')} />
      <Tab label={t('navigation--menu-item-water-juices')} />
      <Tab label={t('navigation--menu-item-delicacies')} />
      <Tab label={t('navigation--menu-item-sets-gifts')} />
      <Tab label={t('navigation--menu-item-dishes-accessories')} />
    </Tabs>
  )
})
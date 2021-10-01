import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';


const useStyles = makeStyles(theme => ({
  rootAppBar: {
    backgroundColor: '#fff',
  }
}));

const HideOnScroll = React.memo<any>(({children}:{children: any;}) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
})

export const DisplayOptionsBar = React.memo<any>(({children}:{children: any;}) => {
  const classes = useStyles();

  return (<>
      <HideOnScroll>
        <AppBar classes={{root: classes.rootAppBar}}>
          <Toolbar>
            {children}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
})

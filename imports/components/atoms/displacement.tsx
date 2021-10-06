import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React, { useCallback, useState } from 'react';
import { Typography } from './typography';
import { useTranslation } from '../../i18n';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const DisplacementsTabs = withStyles({
  flexContainer: {
    flexDirection: "row"
  },
  indicator: {
    display: "flex",
    gap: 24,
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "transparent"
    }
  }
})((props: any) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const DisplacementTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#000",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:hover": {
      borderRadius: 4,
      backgroundColor: "#F5F5F5"
    },
    "&:focus": {
      backgroundColor: "#F5F5F5"
    }
  },
  selected: {
    borderRadius: 4,
    backgroundColor: "#F5F5F5"
  },
}))((props: any) => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  displacementTabStyle: {
    '& > *:first-child, & > *:last-child': {
      transition: 'width 0.3s ease',
      '&[class*=disabled]': {
        width: 0
      }
    },
  }
}))

export const Displacement = React.memo<any>(({
  displacements,
}:{
  displacements: {
    id: string;
    displacement: number;
  }[];
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const [value, setValue] = useState(0);

  const handleChangeValue = useCallback((event, newValue) => {
    setValue(newValue);
  },[value]);

  return (
    <DisplacementsTabs 
      value={value} 
      onChange={handleChangeValue} 
      variant="scrollable"
      scrollButtons="on"
      aria-label={t('displacement--tabs-aria-label')}
      className={classes.displacementTabStyle}
    >
      {displacements.map(i => (<DisplacementTab key={i.id} label={<Typography customVariant='body2'>{i.displacement}</Typography>} aria-label={'i.displacement'} className={classes.displacementTabStyle} />))}
    </DisplacementsTabs>
  )
})
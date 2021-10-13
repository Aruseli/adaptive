import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';

import React from 'react';


const useStyles = makeStyles(theme => ({

}))

const CheckboxMethod = React.memo<any>(({
  checked,
  checkName,
  checkLabel,
  handleChangeFilterCheck,
}:{
  checked: boolean;
  checkName?: string;
  checkLabel?: string;
  handleChangeFilterCheck: (event: any) => any;
}) => {
  return <FormControlLabel
    control={<Checkbox checked={checked} onChange={handleChangeFilterCheck} name={checkName} />}
    label={checkLabel}
  />
})

const SwitchMethod = React.memo<any>(({
  switched,
  switchName,
  switchLabel,
  handleChangeFilterSwitch,
}:{
  switched: boolean;
  switchName?: string;
  switchLabel?: string;
  handleChangeFilterSwitch: (event: any) => any;
}) => {
  return <FormControlLabel
    value="start"
    control={<Switch checked={switched} onChange={handleChangeFilterSwitch} name={switchName} color="primary" />}
    label={switchLabel}
    labelPlacement="start"
  />
})


export const CheckboxMethodFilter = React.memo<any>(({
  dataForFilterMethod,
  formLabel,
  handleChangeFilterCheck,
  filterMethod = 'checkbox',
}:{
  dataForFilterMethod: {
    id: string,
    checked: boolean;
    checkName?: string;
    checkLabel?: string;
  }[];
  formLabel: string;
  handleChangeFilterCheck: (event: any) => any;
  filterMethod?: string;
}) => {
  const classes = useStyles;

  const FilterMethod = filterMethod === 'checkbox' ? CheckboxMethod : SwitchMethod;

  return (<FormControl component="fieldset">
      <FormLabel component="legend">{formLabel}</FormLabel>
      <FormGroup>
        {dataForFilterMethod.map(i => (<FilterMethod />))}
      </FormGroup>
    </FormControl>
  ) 
})


export const RadioMethodFilter = React.memo<any>(({
  dataForFilterMethod,
  formLabel,
  ariaLabel,
  radioGroupValue,
  handleChangeFilterRadio,
}:{
  dataForFilterMethod: {
    id: string,
    checked: boolean;
    checkName?: string;
    radioValue: string;
    radioLabel?: string;
  }[];
  formLabel: string;
  ariaLabel?: string;
  radioGroupValue: string;
  handleChangeFilterRadio: (event: any) => any;
}) => {
  const classes = useStyles;

  return (<FormControl component="fieldset">
      <FormLabel component="legend">{formLabel}</FormLabel>
      <RadioGroup aria-label={ariaLabel} name={formLabel} value={radioGroupValue} onChange={handleChangeFilterRadio}>
        {dataForFilterMethod.map(i => (<FormControlLabel value={i.radioValue} control={<Radio />} label={i.radioLabel} />))}
      </RadioGroup>
    </FormControl>
  ) 
})

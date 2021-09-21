import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
	display: 'flex',
  },
  formControl: {
	margin: theme.spacing(3),
  },
}));

export const CheckboxesGroup = React.memo<any>(() => {
  const classes = useStyles();
  const [state, setState] = React.useState({
	white: true,
	red: false,
	pink: false,
  });

  const handleChange = (event) => {
	setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { white, red, pink } = state;

  return (<div className={classes.root}>
			<FormControl component="fieldset" className={classes.formControl}>
				<FormLabel component="legend">Фильтр</FormLabel>
				<FormGroup>
					<FormControlLabel
					control={<Checkbox checked={white} onChange={handleChange} name="white" />}
					label="белое"
					/>
					<FormControlLabel
					control={<Checkbox checked={red} onChange={handleChange} name="red" />}
					label="красное"
					/>
					<FormControlLabel
					control={<Checkbox checked={pink} onChange={handleChange} name="pink" />}
					label="розовое"
					/>
				</FormGroup>
			</FormControl>
		</div>
  );
})
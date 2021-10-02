import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useCallback, useState } from 'react';

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
		display: 'flex',
		width: drawerWidth,
    flexShrink: 0,
  },
  formControl: {
		margin: theme.spacing(3),
  },
}));

export const CheckboxesGroup = React.memo<any>(() => {
  const classes = useStyles();
  const [state, setState] = useState({
		white: true,
		red: false,
		pink: false,
  });

  const handleChange = useCallback((event) => {
	setState({ ...state, [event.target.name]: event.target.checked });
  }, [state]);

  const { white, red, pink } = state;

  return (<div 
			className={classes.root}
		>
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
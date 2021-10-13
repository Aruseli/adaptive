import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { bridge as schema } from '../api/filter-schema';
import { AutoField, AutoForm, RadioField } from 'uniforms-material';
import useAxios from 'axios-hooks';

import { CheckboxMethodFilter, RadioMethodFilter } from './filter-methods';


const useStyles = makeStyles(theme => ({

}))

export const FilterDesktop = React.memo<any>(() => {
  const classes = useStyles();

  return (<>
      <CheckboxMethodFilter />
      <RadioMethodFilter />
    </>
  )
}, () => false)


export const Filter = React.memo<any>(function Filter() {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://wine-style.vercel.app/api/filters?filters=rose'
  );
  console.log({ data, loading, error });
  return <AutoForm schema={schema} onSubmit={console.log} />
})


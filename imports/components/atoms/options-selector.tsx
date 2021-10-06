import Select from '@material-ui/core/Select';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React, { useCallback } from 'react';
import { useTranslation } from '../../i18n';
import { useStateSelectOptions } from '../api/use-query-store';

import { OPERATION_SYSTEM } from '../api/env';
const os = require("os"); // Comes with node.js

console.log({'os.platform': os.platform()});


const useStyles = makeStyles(theme => ({
  outlinedInputRoot: {
    width: '100%',
    maxWidth: '25vw',
    maxHeight: 40,
    overflow: 'hidden',
  }
}));

export const OptionsSelector = React.memo<any>(() => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [selectOption, setSelectOption] = useStateSelectOptions();

  const handleChangeOptions = useCallback((e) => {
    const option = e.target.value;
    setSelectOption(option);
  }, []);

  console.log({OPERATION_SYSTEM});

  return (<Select
      native
      className={classes.outlinedInputRoot}
      value={selectOption}
      onChange={handleChangeOptions}
      variant='outlined'
      inputProps={{
        id: 'select-options',
      }}
    >
      <option aria-label={t("select--popular")} value="popular">{t("select--popular")}</option>
      <option aria-label={t("select--ascending price")} value="ascending price">{t("select--ascending price")}</option>
      <option aria-label={t("select--descending price")} value="descending price">{t("select--descending price")}</option>
      <option aria-label={t("select--according to buyers")} value="according to buyers">{t("select--according to buyers")}</option>
      <option aria-label={t("select--according to the rating of experts")} value="according to the rating of experts">{t("select--according to the rating of experts")}</option>
      <option aria-label={t("select--new items")} value="new items">{t("select--new items")}</option>
      <option aria-label={t("select--discount")} value="discount">{t("select--discount")}</option>
      <option aria-label={t("select--vintage from old to new")} value="vintage from old to new">{t("select--vintage from old to new")}</option>
      <option aria-label={t("select--vintage from new to old")} value="vintage from new to old">{t("select--vintage from new to old")}</option>
    </Select>
  );
})








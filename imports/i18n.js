import i18n from 'i18next';
import {initReactI18next, useTranslation as _useTranslation} from 'react-i18next';
import {pluralize as _pluralize} from 'numeralize-ru';
import React from 'react';

i18n.addResources('ru', 'translation', {
  'catalog-view-variants': 'Вид',
});

export default i18n;

function useTranslation(){
  const r = _useTranslation();
  const t = useCallback((v, o) => {
    return r.t(v, { ...o, 'variable-currency-rub': '\u20BD' });
  }, []);
  return { ...r, t };
}

export {useTranslation};
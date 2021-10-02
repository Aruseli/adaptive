import i18n from 'i18next';
import {initReactI18next, useTranslation as _useTranslation} from 'react-i18next';
import {pluralize as _pluralize} from 'numeralize-ru';
import { useCallback } from 'react';


const resources = {
  ru: { 
    translation: {
      'catalog-view-variants': 'Вид',
      'select--popular': 'Популярные',
      'select--ascending price': 'По возрастанию цены',
      'select--descending price': 'По убыванию цены ',
      'select--according to buyers': 'По оценке покупателей',
      'select--according to the rating of experts': 'По рейтингу экспертов',
      'select--new items': 'Новинки',
      'select--discount': 'По скидке',
      'select--vintage from old to new': 'Винтаж от старого к новому',
      'select--vintage from new to old': 'Винтаж от нового к старому',
      "-of-review-1": "отзыв",
      "-of-review-2": "отзыва",
      "-of-review-5": "отзывов",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ru", 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;

function useTranslation(){
  const r = _useTranslation();
  const t = useCallback((v: string, o?: any) => {
    return r.t(v, { ...o, 'variable-currency-rub': '\u20BD' });
  }, []);
  return { ...r, t };
}

export const tnum = (count: number, key: string, t: (key: string) => string) => {
  return _pluralize(count, t(`${key}-1`), t(`${key}-2`), t(`${key}-5`));
};

export {useTranslation};
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
      
      'navigation--geolocation': 'геолокация',
      'navigation--wedding': 'Свадьба и банкет',
      'navigation--for-business': 'Для бизнеса',
      'navigation--order-status': 'Статус заказа',
      'navigation--shops': 'Магазины',
      'navigation--help-consulting': 'Помощь и консультация',
      'navigation--switch-site-to': 'Переключить сайт на {{language}}',
      'navigation--catalog': 'Каталог',
      'navigation--search-icon': 'Поиск',
      'navigation--search-input': 'Поиск по сайту',
      'navigation--menu-items': 'Пункты меню',
      'navigation--menu-item-promotion': 'Акции',
      'navigation--menu-item-wine': 'Вино',
      'navigation--menu-item-champagne': 'Шампанское',
      'navigation--menu-item-whiskey': 'Виски',
      'navigation--menu-item-beer-cider': 'Пиво и сидр',
      'navigation--menu-item-water-juices': 'Вода и соки',
      'navigation--menu-item-delicacies': 'Деликатесы',
      'navigation--menu-item-sets-gifts': 'Наборы и подарки',
      'navigation--menu-item-dishes-accessories': 'Посуда и аксессуары',
      'navigation--login': 'Войти',
      'navigation--favorites': 'Избранное',
      'navigation--bin': 'Корзина',

      '-of-review-1': 'отзыв',
      '-of-review-2': 'отзыва',
      '-of-review-5': 'отзывов',

      'liter': 'л',
      'best-seller': 'Бестселлер',
      'price-unit': 'шт',
      'year': 'год',
      'years': 'лет',
      'add-to-favorite': 'Кнопка добавленя товара в избранное',
      'added-to-favorite': 'Товара добавленн в избранное',
      'displacement--tabs-aria-label': 'Литраж бутылки',
      'more': 'Еще',
      'from': 'От',
      'to': 'До',

      'filter--color': 'Цвет',
      'filter--price': 'Цена',
      'filter--rating': 'Рейтинг',
      'filter--country-origin': 'Страна',
      'filter--region': 'Регион',
      'filter--sugar': 'Сахар',
      'filter--grape': 'Виноград',
      'filter--type': 'Тип',
      'filter--reason': 'Повод',
      'filter--with-discount': 'Со скидкой',
      'filter--new-items': 'Новинки',
      'filter--pick-up-today': 'Забрать сегодня',
      'filter--volume': 'Объем',
      'filter--strength': 'Крепость',
      'filter--package': 'Упаковка',
      'filter--capacity': 'Ёмкость',
      'filter--taste': 'Вкус',
      'filter--manufacturer': 'Производитель',
      'filter--brand': 'Бренд',
      'filter--storage-potential': 'Потенциал хранения',
      'filter--vintage': 'Винтаж',
      'filter--raw-material': 'Сырьё',
      'filter--expert-rating-type': 'Эксперт, тип рейтинга',
      'filter--expert-assessment': 'Оценка эксперта',
      'filter--collections': 'Подборки',
      'filter--combinations': 'Сочетания',
      'filter--availability-in-storepackage': 'Наличие в магазине',
      
      'filter--rating--stars-and-upper': '{{stars}} и выше',
      'filter--rating--best-sellers': 'Бестселлеры',
      'filter--rating--best-on-vivino': 'Лучшие на Vivino',
      'filter--rating--rating-wines': 'Рейтинговые вина',
      'filter--rating--any-rating': 'Любой рейтинг',

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
import { useQueryStore } from '@deepcase/store/query';

export function useStateSwitcher() {
  return useQueryStore('catalog', 'list');
};

export function useStateDrawerFilter() {
  return useQueryStore('filter', true);
};

export function useStateSelectOptions() {
  return useQueryStore('select-option', 'popular');
   
};


import { useQueryStore } from '@deepcase/store/query';

export function useStateSwitcher() {
  return useQueryStore('catalog', 'list');
};
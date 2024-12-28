import { useContext } from 'react';

import { DnDContext } from '@/context/DnDContext';

export const useDnD = () => {
  return useContext(DnDContext);
};

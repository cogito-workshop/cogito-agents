import { useContext } from 'react';

import { WidgetControllerContext } from '@/widgets/BaseWidget/WidgetControllerContext';

export const useControllerContext = () => {
  return useContext(WidgetControllerContext);
};

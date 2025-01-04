import React, { createContext } from 'react';
import type { AvailableWidgetTypes } from '@/constants';

export const DnDContext = createContext<{
  type: AvailableWidgetTypes | null;
  setType: React.Dispatch<React.SetStateAction<AvailableWidgetTypes | null>>;
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  type: null,
  setType: () => {},
  isDragging: false,
  setIsDragging: () => {},
});

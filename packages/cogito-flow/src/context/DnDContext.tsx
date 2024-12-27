import React, { createContext } from 'react';
import type { AvailableWidgetTypes } from '@/constants';

export const DnDContext = createContext<
  [
    AvailableWidgetTypes | null,
    React.Dispatch<React.SetStateAction<AvailableWidgetTypes | null>>,
  ]
>([null, () => {}]);

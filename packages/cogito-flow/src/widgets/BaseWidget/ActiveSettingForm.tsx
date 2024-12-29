import { createContext } from 'react';
import type { AvailableWidgetTypes } from '@/constants';

export const ActiveSettingFormContext = createContext<{
  type?: AvailableWidgetTypes;
  widgetId: string | null;
  onFormChanged: () => void;
}>({
  type: undefined,
  widgetId: null,
  onFormChanged: () => {},
});

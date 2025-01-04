import { createContext } from 'react';
import type { AvailableWidgetTypes } from '@/constants';

export const WidgetControllerContext = createContext<{
  type?: AvailableWidgetTypes;
  widgetId: string | null;
  onFormChanged: (values: Record<string, unknown>) => void;
  initialValues?: Record<string, unknown>;
}>({
  type: undefined,
  widgetId: null,
  initialValues: undefined,
  onFormChanged: () => {},
});

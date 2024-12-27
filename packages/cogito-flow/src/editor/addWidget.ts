import { genUUID } from '../utils';
import { type AvailableWidgetTypes } from '../constants';

export const addWidgetViaWidgetType = (
  options: AddWidgetOptions,
): CustomWidgetNode => {
  const { type, position, data } = options;

  const widgetId = genUUID();
  const newWidget = {
    id: widgetId,
    type,
    position,
    data,
  } as CustomWidgetNode;

  return newWidget;
};

export interface AddWidgetOptions {
  type: AvailableWidgetTypes;
  position: {
    x: number;
    y: number;
  };
  data: Record<string, unknown>;
}

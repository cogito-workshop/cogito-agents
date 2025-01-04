import { GripVertical, Settings } from 'lucide-react';
import { PropsWithChildren } from 'react';

export const WidgetHeader: React.FC<PropsWithChildren<WidgetHeaderProps>> = (
  props,
) => {
  const { name, onWidgetSetting, widgetId } = props;
  return (
    <div className="flex justify-between min-h-14 bg-white border-b">
      <div className="flex items-center">
        <GripVertical size={18} className="text-gray-500" />
        <div className="text-xs">
          <div>{name}</div>
          <div className="text-gray-500">ID: {widgetId}</div>
        </div>
      </div>
      <div className="flex items-center mr-2">
        <div onClick={onWidgetSetting}>
          <Settings size={18} />
        </div>
      </div>
    </div>
  );
};

export interface WidgetHeaderProps {
  name: string;
  widgetId: string;
  onWidgetSetting: DIVClickFunction;
}

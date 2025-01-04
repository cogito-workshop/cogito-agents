import { WidgetHeader } from '@/components/widgets/WidgetHeader';
import { DEFAULT_CONFIG } from './config';

export const TextInputWidget = ({
  id,
  defaultValue,
  onChange,
  onWidgetSetting,
}: TextInputProps) => {
  const { widgetName } = DEFAULT_CONFIG;

  const handleChanged: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;

    onChange?.(value);
  };

  return (
    <div
      className="w-full h-full box-border flex flex-col shadow-inner"
      data-widget-id={id}
    >
      <WidgetHeader
        name={widgetName}
        onWidgetSetting={onWidgetSetting}
        widgetId={id}
      />
      <div className="flex-1">
        <input
          className="w-full h-full box-border px-2 border rounded-sm min-h-8 min-w-24"
          onChange={handleChanged}
          defaultValue={defaultValue}
          placeholder="enter text..."
        />
      </div>
    </div>
  );
};

export interface TextInputProps {
  id: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onWidgetSetting: DIVClickFunction;
}

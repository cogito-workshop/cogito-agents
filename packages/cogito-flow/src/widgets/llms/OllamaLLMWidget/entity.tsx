import { WidgetHeader } from '@/components/widgets/WidgetHeader';
import { DEFAULT_CONFIG } from './config';

export const OllamaLLMWidget: React.FC<OllamaLLMProps> = (props) => {
  const { id, onWidgetSetting } = props;
  const { widgetName } = DEFAULT_CONFIG;

  return (
    <div
      data-test-id={id}
      className="w-[360px] h-[560px] flex flex-col shadow-md bg-white"
    >
      <WidgetHeader
        name={widgetName}
        onWidgetSetting={onWidgetSetting}
        widgetId={id}
      />
      <div className="">
        <div></div>
      </div>
    </div>
  );
};

export interface OllamaLLMProps {
  id: string;
  onWidgetSetting: DIVClickFunction;
}

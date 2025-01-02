import { WidgetHeader } from '@/components/widgets/WidgetHeader';
import { defaultConfig } from './config';

export const OllamaLLMWidget: React.FC<OllamaLLMProps> = (props) => {
  const { id, onWidgetSetting } = props;
  const { displayName } = defaultConfig;

  return (
    <div
      id={id}
      data-test-id={id}
      className="w-[360px] h-[560px] flex flex-col shadow-md bg-white"
    >
      <WidgetHeader
        name={displayName}
        onWidgetSetting={onWidgetSetting}
        id={id}
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

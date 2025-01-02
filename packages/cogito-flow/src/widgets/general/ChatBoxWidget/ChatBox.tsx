import { WidgetHeader } from '@/components/widgets/WidgetHeader';
import { defaultConfig } from './config';
import { MyThread } from '@/components/assistant-ui/thread';
import { LLMRuntimeProvider } from './LLMRuntimeProvider';

export const ChatBoxWidget = ({ id, onWidgetSetting }: ChatBoxProps) => {
  const { displayName } = defaultConfig;

  return (
    <div
      className="w-[560px] h-[720px] bg-white box-border flex flex-col shadow-lg"
      data-widget-id={id}
    >
      <WidgetHeader
        name={displayName}
        onWidgetSetting={onWidgetSetting}
        id={id}
      />
      <LLMRuntimeProvider>
        <div className="flex-1 overflow-y-auto">
          <MyThread />
        </div>
      </LLMRuntimeProvider>
    </div>
  );
};

export interface ChatBoxProps {
  id: string;
  onWidgetSetting: DIVClickFunction;
}

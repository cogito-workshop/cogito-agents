import { WidgetHeader } from '@/components/widgets/WidgetHeader';
import { defaultConfig } from './config';
// import { MyThread } from '@/components/assistant-ui/thread';
// import { LLMRuntimeProvider } from './LLMRuntimeProvider';

export const ChatBox = ({ id, onWidgetSetting }: ChatBoxProps) => {
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
      {/* <LLMRuntimeProvider>
        <div className="flex-1 overflow-y-auto">
          <MyThread />
        </div>
      </LLMRuntimeProvider> */}
      <div className="flex-1 h-full !overflow-y-scroll">
        <div className="h-[300px] bg-yellow-500">1</div>
        <div className="h-[300px] bg-yellow-500">2</div>
        <div className="h-[300px] bg-yellow-500">3</div>
        <div className="h-[300px] bg-yellow-500">4</div>
      </div>
    </div>
  );
};

export interface ChatBoxProps {
  id: string;
  onWidgetSetting: DIVClickFunction;
}

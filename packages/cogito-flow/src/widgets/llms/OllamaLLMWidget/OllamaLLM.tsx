import { WidgetHeader } from '@/components/widgets/WidgetHeader';
import { defaultConfig, handleLablePosition } from './config';
import { Handle } from '@xyflow/react';

export const OllamaLLM: React.FC<OllamaLLMProps> = (props) => {
  const { id, onWidgetSetting } = props;
  const { displayName, handels } = defaultConfig;

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
      {handels.map((handle) => (
        <Handle
          type={handle.type}
          position={handle.position}
          style={{
            transform: `translateY(${handle.offsetY}px)`,
          }}
          id={handle.id}
          className="!w-2 !h-2"
        >
          <span className={handleLablePosition({ position: handle.position })}>
            {handle.label}
          </span>
        </Handle>
      ))}
    </div>
  );
};

export interface OllamaLLMProps {
  id: string;
  onWidgetSetting: DIVClickFunction;
}

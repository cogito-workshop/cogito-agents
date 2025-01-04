import { PropsWithChildren } from 'react';
// import { NodeResizer } from '@xyflow/react';

// import { nodeResizerDefaultConfigurations } from '../constants';
import { AvailableWidgetTypes } from '@/constants';

export const BaseWidget: React.FC<PropsWithChildren<BaseWidgetProps>> = ({
  id,
  // selected = false,
  children,
  // type,
}) => {
  // const { minWidgth, minHeight, maxWidth, maxHeight } =
  //   nodeResizerDefaultConfigurations[type]! || {};
  return (
    <div className="w-full h-full" id={id} data-test-id={id}>
      {/* <NodeResizer
        color="#165dff"
        isVisible={selected}
        handleClassName="p-1"
        // minWidth={100}
        // minHeight={30}
        minWidth={minWidgth}

        minHeight={minHeight}

        maxWidth={maxWidth}
        maxHeight={maxHeight}
      /> */}
      {children}
    </div>
  );
};

interface BaseWidgetProps {
  id: string;
  selected?: boolean;
  type: AvailableWidgetTypes;
}

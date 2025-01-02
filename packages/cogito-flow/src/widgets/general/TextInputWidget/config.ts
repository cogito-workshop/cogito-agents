import { Position } from '@xyflow/react';

import type { WidgetCommonDefaultConfig } from '@/widgets/interface';

export const defaultConfig: WidgetCommonDefaultConfig = {
  displayName: 'TextInput',
  handles: [
    {
      type: 'source',
      offsetY: 0,
      position: Position.Left,
      id: 'text_input_source_input',
      label: 'INPUT',
    },
    {
      type: 'target',
      offsetY: 0,
      position: Position.Right,
      id: 'text_input_source_output',
      label: 'OUTPUT',
    },
  ],
};

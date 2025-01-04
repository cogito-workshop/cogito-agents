import { Position } from '@xyflow/react';

import type { WidgetCommonDefaultConfig } from '@/widgets/interface';

export const DEFAULT_CONFIG: WidgetCommonDefaultConfig = {
  widgetName: 'TextInput',
  version: '0.1.0',
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

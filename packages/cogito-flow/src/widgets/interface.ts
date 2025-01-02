import { HandleType, Position } from '@xyflow/react';

export interface WidgetHandle {
  id: string;
  label: string;
  type: HandleType;
  offsetY: number;
  position: Position;
}

export interface WidgetCommonDefaultConfig {
  displayName: string;
  handles: Array<WidgetHandle>;
}

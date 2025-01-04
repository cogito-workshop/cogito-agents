import type { WidgetCommonDefaultConfig } from '@/widgets/interface';
import { Position } from '@xyflow/react';

export const DEFAULT_CONFIG: WidgetCommonDefaultConfig = {
  widgetName: 'ChatBox',
  version: '0.1.0',
  handles: [
    {
      type: 'source',
      offsetY: 0,
      position: Position.Left,
      id: 'chat_box_source_chat_llm',
      label: 'CHAT LLM',
    },
    {
      type: 'source',
      offsetY: 60,
      position: Position.Left,
      id: 'ollama_llm_source_messages',
      label: 'MESSAGES',
    },
    {
      type: 'target',
      offsetY: 0,
      position: Position.Right,
      id: 'ollama_llm_target_ouput',
      label: 'OUTPUT',
    },
    {
      type: 'target',
      offsetY: 60,
      position: Position.Right,
      id: 'ollama_llm_target_message_send',
      label: 'MESSAGE SEND',
    },
    {
      type: 'target',
      offsetY: 120,
      position: Position.Right,
      id: 'ollama_llm_target_all_messages',
      label: 'ALL MESSAGES',
    },
  ],
};

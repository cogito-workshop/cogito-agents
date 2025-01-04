import { Position } from '@xyflow/react';

import type { WidgetCommonDefaultConfig } from '@/widgets/interface';

export const DEFAULT_CONFIG: WidgetCommonDefaultConfig &
  OllamaLLMDefaultConfig = {
  widgetName: 'OllamaLLM',
  version: '0.1.0',
  host: 'http://127.0.0.1:11434',
  handles: [
    {
      type: 'source',
      offsetY: 0,
      position: Position.Left,
      id: 'ollama_llm_source_system_prompt',
      label: 'SYSTEM PROMPT',
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
} as const;

export interface OllamaLLMDefaultConfig {
  host?: string;
}

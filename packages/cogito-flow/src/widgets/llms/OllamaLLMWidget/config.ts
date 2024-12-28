import { Position } from '@xyflow/react';
import { cva } from 'class-variance-authority';

export const handleLablePosition = cva(
  'text-xs text-gray-400 whitespace-nowrap inline-block',
  {
    variants: {
      position: {
        left: '-translate-x-full -ml-1.5',
        top: '',
        right: 'ml-3',
        bottom: '',
      },
    },
    defaultVariants: {
      position: 'left',
    },
  },
);

export const defaultConfig = {
  displayName: 'OllamaLLM',
  host: 'http://127.0.0.1:11434',
  handels: [
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

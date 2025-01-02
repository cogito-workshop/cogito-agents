import {
  OllamaSettingForm,
  OLLAMA_LLM_HANDLES,
} from '@/widgets/llms/OllamaLLMWidget';

import { WidgetHandle } from '../interface';
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

export const WIDGET_SETTING_FORM_MAP: Record<
  AvailableWidgetTypes,
  React.ReactNode
> = {
  text_input: null,
  weather_agent: null,
  openai_classifier: null,
  web_search: null,
  memory_store: null,
  ollama_llm: <OllamaSettingForm />,
  weather_query_tool: null,
  chat_box: null,
};

export const WIDGET_SETTING_HANDLE_MAP: Record<
  AvailableWidgetTypes,
  Array<WidgetHandle>
> = {
  text_input: [],
  weather_agent: [],
  openai_classifier: [],
  web_search: [],
  memory_store: [],
  ollama_llm: OLLAMA_LLM_HANDLES,
  weather_query_tool: [],
  chat_box: [],
};

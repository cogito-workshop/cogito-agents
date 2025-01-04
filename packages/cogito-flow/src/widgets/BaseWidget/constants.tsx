import OllamaLLMWidget from '@/widgets/llms/OllamaLLMWidget';
import TextInputWidget from '../general/TextInputWidget';
import ChatBoxWidget from '../general/ChatBoxWidget';

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

export const WIDGET_CONTROLLER_CONFIG_MAP: Record<
  AvailableWidgetTypes,
  {
    controller: (props: Record<string, unknown>) => React.ReactNode;
    widgetName: string;
  }
> = {
  text_input: {
    widgetName: TextInputWidget.config.widgetName,
    controller: (props: Record<string, unknown>) => (
      <TextInputWidget.controller {...props} />
    ),
  },
  weather_agent: {
    widgetName: '',
    controller: () => null,
  },
  openai_classifier: {
    widgetName: '',
    controller: () => null,
  },
  web_search: {
    widgetName: '',
    controller: () => null,
  },
  memory_store: {
    widgetName: '',
    controller: () => null,
  },
  ollama_llm: {
    widgetName: OllamaLLMWidget.config.widgetName,
    controller: (props: Record<string, unknown>) => (
      <OllamaLLMWidget.controller {...props} />
    ),
  },
  weather_query_tool: {
    widgetName: '',
    controller: () => null,
  },
  chat_box: {
    widgetName: ChatBoxWidget.config.widgetName,
    controller: (props: Record<string, unknown>) => (
      <ChatBoxWidget.controller {...props} />
    ),
  },
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
  ollama_llm: OllamaLLMWidget.config.handles,
  weather_query_tool: [],
  chat_box: [],
};

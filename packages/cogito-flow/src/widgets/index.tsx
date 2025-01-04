import React from 'react';

import { AvailableWidgetTypes } from '@/constants';
import TextInputWidget from './general/TextInputWidget';
import OllamaLLMWidget from './llms/OllamaLLMWidget';
import ChatBoxWidget from './general/ChatBoxWidget';
import withBase from './BaseWidget/withBase';

export const WIDGET_MAP = {
  // general
  text_input: withBase(TextInputWidget.entity),
  chat_box: withBase(ChatBoxWidget.entity),
  // agents
  weather_agent: () => null,
  // classifiers
  openai_classifier: () => null,
  // retrievers
  web_search: () => null,
  // stores
  memory_store: () => null,
  // LLMs
  ollama_llm: withBase(OllamaLLMWidget.entity),
  // tools
  weather_query_tool: () => null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Record<AvailableWidgetTypes, (props?: any) => React.ReactNode>;

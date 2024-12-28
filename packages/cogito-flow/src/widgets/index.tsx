import React from 'react';
import TextInputWidget from './general/TextInputWidget';
import OllamaLLMWidget from './llms/OllamaLLMWidget';
import { AvailableWidgetTypes } from '@/constants';

export const WIDGET_MAP = {
  // general
  text_input: (props) => <TextInputWidget {...props} />,
  // agents
  weather_agent: () => null,
  // classifiers
  openai_classifier: () => null,
  // retrievers
  web_search: () => null,
  // stores
  memory_store: () => null,
  // LLMs
  ollama_llm: (props) => <OllamaLLMWidget {...props} />,
  // tools
  weather_query_tool: () => null,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Record<AvailableWidgetTypes, (props?: any) => React.ReactNode>;

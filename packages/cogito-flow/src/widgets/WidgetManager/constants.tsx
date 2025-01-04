import { Bot, SquareTerminal } from 'lucide-react';
import { keys } from 'lodash-es';

import ChatBoxWidget from '@/widgets/general/ChatBoxWidget';
import TextInputWidget from '@/widgets/general/TextInputWidget';
import OllamaLLMWidget from '@/widgets/llms/OllamaLLMWidget';
import { WidgetCategories } from '@/constants';
import type { WidgetCategoryItem } from './interface';

export const DEFAULT_WIDGET_CATEGORIES: WidgetCategoryItem[] = [
  {
    title: WidgetCategories.General,
    category: WidgetCategories.General,
    icon: SquareTerminal,
    isActive: true,
    items: [],
  },
  {
    title: WidgetCategories.Agents,
    category: WidgetCategories.Agents,
    icon: SquareTerminal,
    isActive: true,
    items: [],
  },
  {
    title: WidgetCategories.Classifiers,
    category: WidgetCategories.Classifiers,
    icon: Bot,
    items: [],
  },
  {
    title: WidgetCategories.Retrievers,
    category: WidgetCategories.Retrievers,
    icon: Bot,
    items: [],
  },
  {
    title: WidgetCategories.Storers,
    category: WidgetCategories.Storers,
    icon: Bot,
    items: [],
  },
  {
    title: WidgetCategories.LLMs,
    category: WidgetCategories.LLMs,
    icon: Bot,
    items: [],
  },
  {
    title: WidgetCategories.Tools,
    category: WidgetCategories.Tools,
    icon: Bot,
    items: [],
  },
];

export const DEFAULT_WIDGET_MAP = {
  // general
  text_input: TextInputWidget.entity,
  chat_box: ChatBoxWidget.entity,
  // agents
  weather_agent: null,
  // classifiers
  openai_classifier: null,
  // retrievers
  web_search: null,
  // stores
  memory_store: null,
  // LLMs
  ollama_llm: OllamaLLMWidget.entity,
  // tools
  weather_query_tool: null,
} as const;

export const DEFAULT_WIDGET_KEYS = keys(
  DEFAULT_WIDGET_MAP,
) as AvailableWidgetTypes[];

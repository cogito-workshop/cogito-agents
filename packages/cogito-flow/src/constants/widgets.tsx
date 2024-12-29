import { values } from 'lodash-es';
import { RiInputField, RiChatAiLine } from 'react-icons/ri';
import { SiOllama, SiOpenai } from 'react-icons/si';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FcGoogle } from 'react-icons/fc';
import { MdMemory } from 'react-icons/md';
import { TiWeatherWindyCloudy } from 'react-icons/ti';

export const enum WidgetCategories {
  General = 'General',
  Agents = 'Agents',
  Classifiers = 'Classifiers',
  Retrievers = 'Retrievers',
  Storers = 'Storers',
  LLMs = 'LLMs',
  Tools = 'Tools',
}

export const GENERAL_WIDGETS = {
  text_input: {
    icon: <RiInputField />,
    entity: 'TextInput',
    title: 'Text Input',
    type: 'text_input', // unique key
    category: WidgetCategories.General,
    description: 'One simple input widget', // for AI use
  },
  chat_box: {
    icon: <RiChatAiLine />,
    entity: 'ChatBox',
    title: 'Chat Box',
    type: 'chat_box', // unique key
    category: WidgetCategories.General,
    description: '', // for AI use
  },
} satisfies Record<string, WidgetItem>;

export type GeneralWidgetTypes = keyof typeof GENERAL_WIDGETS;

export const AGENT_WIDGETS = {
  weather_agent: {
    icon: <TiWeatherPartlySunny />,
    entity: 'WeatherAgent',
    title: 'Weather',
    type: 'weather_agent',
    category: WidgetCategories.Agents,
    description: '', // for AI use
  },
} satisfies Record<string, WidgetItem>;

export type AgentWidgetTypes = keyof typeof AGENT_WIDGETS;

export const CLASSIFIER_WIDGETS = {
  openai_classifier: {
    icon: <SiOpenai />,
    entity: 'OpenaiClassifier',
    title: 'OpenAI',
    type: 'openai_classifier',
    category: WidgetCategories.Classifiers,
    description: '', // for AI use
  },
} satisfies Record<string, WidgetItem>;

export type ClassifierWidgetTypes = keyof typeof CLASSIFIER_WIDGETS;

export const RETRIEVER_WIDGETS = {
  web_search: {
    icon: <FcGoogle />,
    entity: 'WebSearchRetriever',
    title: 'Web Search',
    type: 'web_search_retriever',
    category: WidgetCategories.Retrievers,
    description: '', // for AI use
  },
} satisfies Record<string, WidgetItem>;

export type RetrieverWidgetTypes = keyof typeof RETRIEVER_WIDGETS;

export const STORE_WIDGETS = {
  memory_store: {
    icon: <MdMemory />,
    entity: 'MemoryStore',
    title: 'Memory Store',
    type: 'memory_store',
    category: WidgetCategories.Storers,
    description: '', // for AI use
  },
} satisfies Record<string, WidgetItem>;

export type StoreWidgetTypes = keyof typeof STORE_WIDGETS;

export const LLM_WIDGETS = {
  ollama_llm: {
    icon: <SiOllama />,
    entity: 'OllamaLLM',
    title: 'Ollama',
    type: 'ollama_llm',
    category: WidgetCategories.LLMs,
    description: '', // for AI use
  },
} satisfies Record<string, WidgetItem>;

export type LLMWidgetTypes = keyof typeof LLM_WIDGETS;

export const TOOL_WIDGETS = {
  weather_query_tool: {
    icon: <TiWeatherWindyCloudy />,
    entity: 'WeatherQueryTool',
    title: 'Weather',
    type: 'weather_query_tool',
    category: WidgetCategories.Tools,
    description: '', // for AI use
  },
} satisfies Record<string, WidgetItem>;

export type ToolWidgetTypes = keyof typeof TOOL_WIDGETS;

export const AVAILABLE_GENERAL_LIST = values(GENERAL_WIDGETS);
export const AVAILABLE_AGENT_LIST = values(AGENT_WIDGETS);
export const AVAILABLE_CLASSIFIER_LIST = values(CLASSIFIER_WIDGETS);
export const AVAILABLE_RETRIEVER_LIST = values(RETRIEVER_WIDGETS);
export const AVAILABLE_STORE_LIST = values(STORE_WIDGETS);
export const AVAILABLE_LLM_LIST = values(LLM_WIDGETS);
export const AVAILABLE_TOOL_LIST = values(TOOL_WIDGETS);

export const AVAILABLE_WIDGET_LIST = [
  ...AVAILABLE_GENERAL_LIST,
  ...AVAILABLE_AGENT_LIST,
  ...AVAILABLE_CLASSIFIER_LIST,
  ...AVAILABLE_RETRIEVER_LIST,
  ...AVAILABLE_STORE_LIST,
  ...AVAILABLE_LLM_LIST,
  ...AVAILABLE_TOOL_LIST,
];

export type AvailableWidgetTypes =
  | GeneralWidgetTypes
  | AgentWidgetTypes
  | ClassifierWidgetTypes
  | RetrieverWidgetTypes
  | StoreWidgetTypes
  | LLMWidgetTypes
  | ToolWidgetTypes;

export interface WidgetItem {
  icon: React.ReactNode;
  entity: string;
  title: string;
  type: string;
  category: WidgetCategories;
  description: string;
  engine?: WebSearchEngine;
}

export type WebSearchEngine = 'google' | 'bing';

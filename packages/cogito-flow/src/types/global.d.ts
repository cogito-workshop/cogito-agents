import { type Node } from '@xyflow/react';
import { AvailableWidgetTypes as AvailableWidgetTypesAlias } from '../constants';

declare global {
  type BaseNode = Node<Record<string, unknown>, AvailableWidgetTypes>;

  type CustomWidgetNode = {
    [K in AvailableWidgetTypes]: BaseNode & {
      type: K;
      data: NodeDataTypes[K extends keyof NodeDataTypes ? K : never];
    };
  }[AvailableWidgetTypes];

  interface NodeDataTypes {
    text_input: unknown;
    weather_agent: unknown;
    openai_classifier: unknown;
    web_search_retriever: unknown;
    memory_store: unknown;
    ollama_llm: unknown;
    weather_query_tool: unknown;
  }

  type DIVClickFunction = React.MouseEventHandler<HTMLDivElement>;

  type AvailableWidgetTypes = AvailableWidgetTypesAlias;
}

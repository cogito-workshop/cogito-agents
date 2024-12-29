import OllamaSettingForm from '../llms/OllamaLLMWidget/OllamaSettingForm';

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
};

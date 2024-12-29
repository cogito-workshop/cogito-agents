'use client';

import type { ReactNode } from 'react';
import {
  AssistantRuntimeProvider,
  useLocalRuntime,
  type ChatModelAdapter,
} from '@assistant-ui/react';

const CustomModelAdapter: ChatModelAdapter = {
  // async run({ messages, abortSignal }) {
  //   // TODO replace with your own API
  //   const result = await fetch("<YOUR_API_ENDPOINT>", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     // forward the messages in the chat to the API
  //     body: JSON.stringify({
  //       messages,
  //     }),
  //     // if the user hits the "cancel" button or escape keyboard key, cancel the request
  //     signal: abortSignal,
  //   });

  //   const data = await result.json();
  //   return {
  //     content: [
  //       {
  //         type: "text",
  //         text: data.text,
  //       },
  //     ],
  //   };
  // },

  async *run({ messages, abortSignal, config }) {
    console.log(config);

    async function* sseStreamIterator() {
      try {
        const response = await fetch('https://burn.hair/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer sk-aXdGKtoriWaJqX8A0011Fd2d059a41AdAcB449B23075D57b`,
          },
          // forward the messages in the chat to the API
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages,
            stream: true,
            stream_options: {
              include_usage: true,
            },
          }),
          // if the user hits the "cancel" button or escape keyboard key, cancel the request
          signal: abortSignal,
        });

        if (!response.body) {
          throw new Error(`Response Empty Error!`);
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let text = '';

        while (true) {
          const { done, value } = await reader.read();

          if (done) break; // value is always undefined is done is true

          // stream: true ensures multi-byte characters are handled correctly
          text += decoder.decode(value, { stream: true });
          const events = text.split(/\r?\n\r?\n/);
          text = events.pop() || '';

          for (const event of events) {
            const lines = event.split(/\r?\n/);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const parsedEvent: any = {};

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const dataContent = line.slice(6);
                try {
                  parsedEvent.data = JSON.parse(dataContent);
                } catch (err) {
                  parsedEvent.data = null;
                  parsedEvent.data_raw = dataContent;
                  console.log(err);
                }
              } else if (line.includes(': ')) {
                const [key, value] = line.split(': ', 2);
                parsedEvent[key] = value;
              }
            }

            if (Object.keys(parsedEvent).length > 0) {
              yield parsedEvent;
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    let content = '';
    for await (const event of sseStreamIterator()) {
      const detalText = event.data.choices[0]?.delta?.content || '';
      content += detalText;

      yield {
        content: [{ type: 'text', text: content }],
      };
    }
  },
};

export function LLMRuntimeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const runtime = useLocalRuntime(CustomModelAdapter);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}

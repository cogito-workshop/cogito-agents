export async function* sseStreamIterator(
  url: string,
  data: Record<string, unknown> = {},
  extraHeaders?: HeadersInit,
) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        ...{ 'Content-Type': 'application/json' },
        ...(extraHeaders || {}),
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (!response.body) {
      throw new Error(`Response Empty Error!`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break; // value is always undefined is done is true

      // stream: true ensures multi-byte characters are handled correctly
      buffer += decoder.decode(value, { stream: true });
      const events = buffer.split(/\r?\n\r?\n/);
      buffer = events.pop() || '';

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

async function handleSSE() {
  const apiUrl = 'https://api.openai.com/v1/chat/completions';
  const requestBody = {
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: 'Tell me a joke' }],
    stream: true,
    stream_options: {
      include_usage: true,
    },
  };
  for await (const event of sseStreamIterator(apiUrl, requestBody, {
    Authorization: 'Bearer sk-...',
  })) {
    console.log(event);
  }
}

handleSSE();

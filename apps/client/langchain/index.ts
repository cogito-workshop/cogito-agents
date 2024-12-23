import {
  Runnable,
  RunnableConfig,
  RunnableRetry,
  RunnableWithFallbacks,
  RunnableRetryFailedAttemptHandler,
} from '@langchain/core/runnables';

export class TextClassificationRunnable {
  lc_runnable: boolean = true;
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  getName(): string {
    return 'text_classification';
  }

  withRetry(fields?: {
    stopAfterAttempt?: number;
    onFailedAttempt?: RunnableRetryFailedAttemptHandler;
  }): RunnableRetry<any, any, RunnableConfig> {
    return this as any;
  }

  withFallbacks<Input, Output>(fields: {
    fallbacks: Runnable<Input, Output>[];
  }): RunnableWithFallbacks<Input, Output> {
    return this as any;
  }

  _getOptionsList<O extends RunnableConfig>(): Partial<O>[] {
    return [];
  }

  async invoke(
    input: string,
    options?: Partial<RunnableConfig<Record<string, any>>> | undefined
  ): Promise<string> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    });
    const data = await response.json();

    return data.category;
  }

  batch(
    inputs: any[],
    options?: Partial<RunnableConfig<Record<string, any>>> | undefined
  ): Promise<any[]> {
    return Promise.resolve(inputs);
  }

  async *_streamIterator(
    input: any,
    options?: Partial<RunnableConfig<Record<string, any>>> | undefined
  ): AsyncGenerator<any> {
    yield await this.invoke(input, options);
  }

  stream(
    input: any,
    options?: Partial<RunnableConfig<Record<string, any>>> | undefined
  ): any {
    return this._streamIterator(input, options);
  }
}

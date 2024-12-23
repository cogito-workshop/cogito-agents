import { fromPreTrained } from '@lenml/tokenizer-llama3';

const tokenizer = fromPreTrained();

const tokens = tokenizer.apply_chat_template([
  {
    role: 'system',
    content: '你是一个有趣的ai助手',
  },
  {
    role: 'user',
    content: '好好，请问怎么去月球?',
  },
]) as number[];

// convert to array of token
console.log(tokens);
const chat_content = tokenizer.decode(tokens);
// restore raw content
console.log(chat_content);

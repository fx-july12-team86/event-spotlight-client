import OpenAI from 'openai';

async function translate(stringToTranslete: string, apiKey: string) {
  const client = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true,
  });

  const chatCompletion = await client.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `translate into ukrainian word: ${stringToTranslete}. Return only translated words`,
      },
    ],
    model: 'gpt-4o',
  });

  return chatCompletion;
}

export { translate };

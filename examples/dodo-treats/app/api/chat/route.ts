import OpenAI from 'openai';
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { message } = await req.json();
  const completion = await client.chat.completions.create({
    model: 'gpt-5-mini',
    messages: [{ role: 'system', content: 'You are the Dodo Treats shop assistant. Decide if a customer qualifies for credit (pay later) based on their order history.' }, { role: 'user', content: message }],
  });
  return Response.json({ reply: completion.choices[0].message.content });
}

import type { Handler } from '@netlify/functions';

const GROQ_KEY = process.env.GROQ_API_KEY || '';
const MODEL = 'llama-3.3-70b-versatile';

const SYSTEM_PROMPT = `You are Aarav, the smart and friendly assistant for Head Held High (HOC).

RULES:
- Keep replies SHORT (2-4 lines max for simple questions)
- For lists, use clean plain text like "1. Item" — no markdown symbols like * or **
- Never use asterisks or hashtags
- Be direct and conversational
- Only give more detail if specifically asked

Head Held High Info:
- Free for clients, verified vendors, quotes in 24hrs
- Services: Construction Material Supply, Event Management, Fabrication, Financial Services (incl. Income Tax Filing), Industrial Visit (in-house), Interior Designers, Para Legal Assistance, Pet Industry Services (in-house), Property Consultants, Travel Consultants, Turnkey Constructions
- Industrial Visit and Pet Industry Services are managed fully in-house by HOC
- All specialists are In-House HOC Approved
- B2B only — enterprise and business clients
- HOC manages end-to-end delivery
- Contact: care@headheldhigh.in | +91 94482 00842`;

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages } = JSON.parse(event.body || '{}');

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_KEY}`,
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 200,
        temperature: 0.5,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return { statusCode: response.status, body: err };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { statusCode: 500, body: 'Internal server error' };
  }
};

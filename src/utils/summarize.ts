export const summarizeText = async (text: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_HUGGINGFACE_API_TOKEN;
  const response = await fetch(
    'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: text,
        parameters: {
          max_length: 130,
          min_length: 30,
          do_sample: false,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to summarize: ${response.statusText}`);
  }

  const result = await response.json();
  return result[0]?.summary_text || 'No summary available.';
};

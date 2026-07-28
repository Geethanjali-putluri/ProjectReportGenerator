/**
 * AI Service calling server-side Gemini API proxy
 */

export async function generateAIContent(prompt: string, systemInstruction?: string): Promise<string> {
  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, systemInstruction }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server responded with status ${response.status}`);
    }

    const data = await response.json();
    return data.text || '';
  } catch (err: any) {
    console.error('AI Service Error:', err);
    throw err;
  }
}

export async function improveSectionWithAI(sectionName: string, currentText: string, projectTitle: string, subject: string): Promise<string> {
  const systemInstruction = `You are an expert academic advisor and technical writer. Enhance academic report sections into formal, highly articulate, and technically sound paragraphs suitable for university-level project submissions. Maintain professional engineering tone without flowery promotional hype.`;

  const prompt = `Project Title: "${projectTitle || 'Software Engineering Project'}"
Subject: "${subject || 'Computer Science'}"
Section: "${sectionName}"

Current Content:
"""
${currentText || 'No text provided. Generate a comprehensive starter paragraph.'}
"""

Instructions:
1. Rewrite and expand this section to be comprehensive, technical, well-structured, and suitable for a formal academic report.
2. Use bullet points or numbered lists where appropriate for clarity.
3. Do not include introductory conversational text like "Here is the improved section". Return ONLY the refined academic text itself.`;

  return generateAIContent(prompt, systemInstruction);
}

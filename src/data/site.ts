// Central place for all the "who am I / where do people find me" facts.
// Edit this file to update contact links or the tagline site-wide.
export const SITE = {
  name: 'Kamish Upadhyay',
  // Shown in the terminal title bar and prompt: `${handle}@${host}`.
  handle: 'kamish',
  host: 'blr',
  role: 'Senior GenAI / AI Architect',
  years: '9 years',
  tagline:
    'LLMs · Agentic AI · RAG · MCP · Enterprise AI & Financial Services',
  location: 'Bengaluru, India',
  relocation: 'Open to relocation',
  email: 'tagdadatascientist@gmail.com',
  github: 'https://github.com/kavya8755',
  linkedin: 'https://www.linkedin.com/in/1000kavya/',
  huggingface: 'https://huggingface.co/1000kavya',
  resumeHref: '/resume/Resume_Kamish_9Yrs_GenAI.pdf',
  description:
    'Personal site of Kamish Upadhyay, Senior GenAI / AI Architect with 9 years building LLM, RAG, and agentic AI systems for enterprise and financial services.',
};

// Top-level pages, in nav order. `dir` is how each page appears in the terminal.
export const PAGES = [
  { href: '/work/', dir: 'work/', label: 'Work', note: 'experience, skills, awards' },
  { href: '/books/', dir: 'books/', label: 'Books', note: '3 free technical books' },
  { href: '/courses/', dir: 'mini-courses/', label: 'Mini Courses', note: '6 slide-deck courses' },
  { href: '/blog/', dir: 'blog/', label: 'Blog', note: 'notes on GenAI in production' },
  { href: '/contact/', dir: 'contact/', label: 'Contact', note: 'email, LinkedIn, GitHub' },
];

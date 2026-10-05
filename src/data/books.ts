// Add a new book by adding an object here and dropping the PDF in /public/books/.
// No other code changes needed — the books page reads from this list.
import type { ImageKey } from './images';

export type Book = {
  image: ImageKey;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  pages: number;
  edition: string;
  file: string; // path under /public
};

export const books: Book[] = [
  {
    slug: 'from-prototype-to-autonomous-enterprise',
    image: 'robot-arm',
    title: 'From Prototype to Autonomous Enterprise',
    subtitle: 'Scaling AI Agents, Platforms, and Intelligent Workflows',
    description:
      'An architecture and execution guide for platform and agent engineering teams — covering the prototype-to-production gap in agentic AI, reference architectures for agent platforms, MCP and tool standardization, context engineering at scale, and orchestration patterns for multi-agent systems.',
    pages: 34,
    edition: 'First Edition · 2026',
    file: '/books/From-Prototype-to-Autonomous-Enterprise.pdf',
  },
  {
    slug: 'quantum-computing-for-ai-engineers',
    image: 'quantum-rings',
    title: 'Quantum Computing for AI Engineers',
    subtitle:
      'From Basic Principles to Quantum Machine Learning, Novel Neural Architectures, and Quantum-Safe Systems',
    description:
      'A technical guide for engineers with a deep learning and LLM background — building up from qubits, gates, and circuits through the quantum stack, algorithms and complexity, and into quantum machine learning and quantum-safe systems.',
    pages: 45,
    edition: 'First Edition · 2026',
    file: '/books/Quantum-Computing-for-AI-Engineers.pdf',
  },
  {
    slug: 'the-ai-ceo',
    image: 'robot-chess',
    title: 'The AI CEO',
    subtitle: 'How Leaders Build AI-First Organizations',
    description:
      'Strategy, investment, organization, and governance for CEOs and CTOs — framing AI as a capital allocation decision, budgeting from pilots to a capital program, organization design for an AI-first company, and governance and risk for AI-first leadership.',
    pages: 28,
    edition: 'First Edition · 2026',
    file: '/books/The-AI-CEO.pdf',
  },
];

// Add a new mini course by adding an object here and dropping the .pptx in /public/courses/.
// No other code changes needed — the courses page reads from this list.
import type { ImageKey } from './images';

export type Course = {
  image: ImageKey;
  slug: string;
  title: string;
  subtitle: string;
  audience: string;
  slides: number;
  topics: string[];
  file: string; // path under /public
};

export const courses: Course[] = [
  {
    slug: 'agentic-rag',
    image: 'neural-ring',
    title: 'Agentic RAG: From Retrieval to Reasoning',
    subtitle: 'Design retrieval systems that plan, route, check their own evidence, and cite sources.',
    audience: 'ML engineers and architects who already know basic RAG',
    slides: 11,
    topics: ['Naive vs. agentic RAG', 'The agentic RAG loop', 'CRAG & Self-RAG', 'Hybrid retrieval', 'Multi-agent RAG', 'RAG evaluation'],
    file: '/courses/agentic-rag.pptx',
  },
  {
    slug: 'storage-selection-for-ai',
    image: 'datacenter',
    title: 'Storage Selection for AI Solutions',
    subtitle: 'Choose vector, relational, graph, cache and object storage for real workloads.',
    audience: 'Architects and engineering leads designing GenAI platforms',
    slides: 11,
    topics: ['Decision framework', 'Vector DBs compared', 'pgvector vs. dedicated stores', 'HNSW, IVF, PQ, DiskANN', 'Agent memory & caching', 'Compliance'],
    file: '/courses/storage-selection-for-ai.pptx',
  },
  {
    slug: 'agentic-frameworks-explained',
    image: 'robot-dog',
    title: 'Agentic Frameworks Explained: CrewAI, LangGraph, AutoGen & More',
    subtitle: 'How the major agent frameworks think, where each one fits, and how to choose.',
    audience: 'Engineers choosing a stack for multi-agent systems',
    slides: 11,
    topics: ['CrewAI', 'LangGraph', 'AutoGen / Microsoft Agent Framework', 'OpenAI Agents SDK', 'Google ADK', 'Pydantic AI'],
    file: '/courses/agentic-frameworks-explained.pptx',
  },
  {
    slug: 'mcp-model-context-protocol',
    image: 'fiber',
    title: 'MCP: Model Context Protocol for Tool-Using Agents',
    subtitle: 'The open standard for connecting LLM apps to tools and data: architecture, build, and security.',
    audience: 'Engineers integrating agents with enterprise systems',
    slides: 11,
    topics: ['Hosts, clients & servers', 'Tools, resources & prompts', 'Build a server in Python', 'MCP vs. A2A', 'Security model', 'Enterprise rollout'],
    file: '/courses/mcp-model-context-protocol.pptx',
  },
  {
    slug: 'llm-evaluation-and-guardrails',
    image: 'lab',
    title: 'LLM Evaluation & Guardrails for Production',
    subtitle: 'Measure quality, catch regressions before release, and keep models safe in production.',
    audience: 'Teams taking LLM features from demo to production',
    slides: 11,
    topics: ['Layers of evaluation', 'Golden datasets', 'LLM-as-judge', 'Guardrails pipeline', 'CI evaluation gates', 'Observability'],
    file: '/courses/llm-evaluation-and-guardrails.pptx',
  },
  {
    slug: 'fine-tuning-lora-qlora',
    image: 'gpu-stack',
    title: 'Fine-Tuning LLMs with LoRA & QLoRA',
    subtitle: 'When to fine-tune, how parameter-efficient methods work, and how to ship adapters.',
    audience: 'ML engineers adapting open models to domain tasks',
    slides: 11,
    topics: ['Prompt vs. RAG vs. fine-tune', 'SFT, PEFT, DPO', 'How LoRA works', 'QLoRA', 'Hyperparameters', 'Serving with vLLM'],
    file: '/courses/fine-tuning-lora-qlora.pptx',
  },
];

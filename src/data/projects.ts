// Project case studies. Each entry gets its own page at /projects/<slug>/.
// Keep every metric here in sync with the résumé — nothing on the site
// should claim a number the résumé doesn't.
import type { ImageKey } from './images';

export type Metric = { value: string; label: string };
export type Step = { title: string; body: string };

export type Project = {
  slug: string;
  title: string;
  /** One-line pitch shown on tiles and the page hero. */
  tagline: string;
  company: string;
  role: string;
  period: string;
  image: ImageKey;
  /** Shown in the hero tile on dark backgrounds. */
  dark?: boolean;
  metrics: Metric[];
  /** The problem, in plain language. */
  challenge: string;
  /** How it was built, component by component. */
  approach: Step[];
  outcome: string;
  /** What I personally owned. */
  ownership: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: 'fraud-detection-platform',
    title: 'Real-time fraud detection',
    tagline: 'Catching money-mule networks in milliseconds, with reasons an investigator can check.',
    company: 'SBER Bank India',
    role: 'Gen AI Architect · team lead',
    period: 'Aug 2025 – Present',
    image: 'fiber',
    dark: true,
    metrics: [
      { value: '93.5%', label: 'PR-AUC' },
      { value: '4.25 ms', label: 'scoring latency' },
      { value: '76%', label: 'lower fraud losses vs. baseline' },
    ],
    challenge:
      'Money-mule networks, chains of accounts recruited to receive and pass on stolen funds, were causing significant losses. ' +
      'Looked at one transaction at a time, mule activity can look ordinary, and investigators needed to move faster without ' +
      'giving up the ability to explain why an account was flagged.',
    approach: [
      {
        title: 'Real-time scoring with XGBoost',
        body: 'A gradient-boosted model scores activity as it happens, fast enough (4.25 ms) to sit in the transaction path rather than in an overnight batch.',
      },
      {
        title: 'Graph analytics for the network view',
        body: 'Accounts and money flows are analysed as a graph, so the platform can surface connected rings of accounts that individual transaction checks miss.',
      },
      {
        title: 'Cost-based thresholding',
        body: 'Alert thresholds are set from the business cost of a missed fraud versus a false alarm, not a default cut-off, so the investigation queue matches what the bank can act on.',
      },
      {
        title: 'SHAP explainability',
        body: 'Every score comes with SHAP feature attributions, giving investigators and reviewers the "why" behind each alert.',
      },
      {
        title: 'GigaChat SLM investigation agent',
        body: 'An agent built on a GigaChat small language model helps investigators work a case, working from the model’s score and its explanation.',
      },
    ],
    outcome:
      'The platform reached 93.5% PR-AUC at 4.25 ms latency and cut fraud losses by 76% compared with the baseline, while keeping every decision explainable.',
    ownership: [
      'Led the team that architected and built the platform end to end',
      'Designed how the model, graph analytics, explainability and agent fit together',
    ],
    stack: ['XGBoost', 'Graph analytics', 'GigaChat SLM', 'SHAP', 'Python'],
  },
  {
    slug: 'rag-knowledge-assistant',
    title: 'RAG knowledge assistant',
    tagline: 'An AI assistant that answers 500+ employees in seconds, and knows when to hand off.',
    company: 'SBER Bank India',
    role: 'Gen AI Architect · team lead',
    period: 'Aug 2025 – Present',
    image: 'team-laptops',
    metrics: [
      { value: '500+', label: 'employees served' },
      { value: '~65%', label: 'of queries resolved without a human' },
      { value: '3 FTE', label: 'of effort saved' },
    ],
    challenge:
      'Employees across HR, IT and operations were waiting hours for answers that already existed somewhere in policies, ' +
      'runbooks and knowledge bases, and the teams answering them were spending their time on repeat questions.',
    approach: [
      {
        title: 'Grounded in the bank’s own knowledge',
        body: 'Retrieval-augmented generation answers from internal HR, IT and operations content instead of the model’s general knowledge.',
      },
      {
        title: 'Retrieval built for real questions',
        body: 'Employee questions are matched against the knowledge base so the assistant answers from the passages that actually apply.',
      },
      {
        title: 'Answer or hand off',
        body: 'The assistant resolves what it can (about 65% of queries) and routes the rest to people, so it shortens the queue instead of adding a dead end.',
      },
    ],
    outcome:
      'Response time dropped from hours to seconds for 500+ employees, about 65% of queries are handled end to end, and the support teams saved the equivalent of 3 full-time roles.',
    ownership: [
      'Led the team that designed and shipped the assistant',
      'Owned the RAG architecture across HR, IT and operations content',
    ],
    stack: ['RAG', 'LLMs', 'Vector search', 'Python'],
  },
  {
    slug: 'banking-voice-agent',
    title: 'Banking voice agent',
    tagline: 'A production speech agent: listen, understand, answer, in under two seconds.',
    company: 'SBER Bank India',
    role: 'Gen AI Architect · team lead',
    period: 'Aug 2025 – Present',
    image: 'humanoid',
    dark: true,
    metrics: [
      { value: '46→22%', label: 'speech-recognition WER' },
      { value: '92%', label: 'intent accuracy' },
      { value: '1.8 s', label: 'p95 latency' },
      { value: '₹0.48', label: 'per conversation turn' },
    ],
    challenge:
      'Voice is the hardest interface to get right in banking: recognition errors compound into wrong answers, every second of ' +
      'latency is felt, and every turn has a cost. The agent had to be accurate, fast, safe and affordable at the same time.',
    approach: [
      {
        title: 'STT → LLM → TTS pipeline',
        body: 'Speech-to-text, a language model and text-to-speech run as one production pipeline on Sber Platform V.',
      },
      {
        title: 'Fine-tuned GigaChat 2 MAX',
        body: 'The language layer is a fine-tuned GigaChat 2 MAX model, adapted to banking conversations and intents.',
      },
      {
        title: 'Better recognition',
        body: 'Speech-recognition word error rate came down from 46% to 22%, halving the errors that reach the model.',
      },
      {
        title: 'Guardrails and a CI quality gate',
        body: 'Guardrails keep responses inside policy, and a CI quality gate blocks any release that regresses quality.',
      },
    ],
    outcome:
      'The agent runs in production at 92% intent accuracy, 1.8 s p95 latency and ₹0.48 per turn, with recognition errors cut by more than half.',
    ownership: [
      'Led the team that built the voice agent',
      'Shaped the STT → LLM → TTS architecture, guardrails and CI quality gate',
    ],
    stack: ['STT', 'GigaChat 2 MAX (fine-tuned)', 'TTS', 'Sber Platform V', 'Guardrails', 'CI/CD'],
  },
  {
    slug: 'agentic-analytics-platform',
    title: 'Agentic analytics platform',
    tagline: 'Ask the business a question in plain English. Get the SQL, the numbers and the chart.',
    company: 'Ernst & Young LLP',
    role: 'Lead AI Engineer',
    period: 'Apr 2024 – Jul 2025',
    image: 'robot-chess',
    dark: true,
    metrics: [
      { value: '300+', label: 'business users' },
      { value: '~88%', label: 'Text-to-SQL execution accuracy' },
      { value: '~50%', label: 'fewer ad-hoc report requests' },
    ],
    challenge:
      'Questions about sales, inventory and logistics went into a reporting queue and came back days later. ' +
      'Business users needed to analyse data themselves, without writing SQL or waiting for an analyst.',
    approach: [
      {
        title: 'Intent understanding',
        body: 'The platform first works out what the user is asking (a trend, a comparison, a product question, a bottleneck) before touching any data.',
      },
      {
        title: 'LLM orchestration and tool-calling',
        body: 'An orchestration layer lets the model call the right tools in sequence: query generation, enterprise data retrieval and charting.',
      },
      {
        title: 'Validated Text-to-SQL',
        body: 'Generated SQL is validated before it runs, reaching about 88% execution accuracy on real business questions.',
      },
      {
        title: 'Auto-generated charts',
        body: 'Results come back as dynamically generated Python visualisations, so answers arrive as a chart, not a raw table.',
      },
    ],
    outcome:
      'More than 300 users analyse sales, inventory and logistics data in plain language. Ad-hoc report requests fell by about 50%, and turnaround went from days to minutes.',
    ownership: [
      'Built the platform as Lead AI Engineer',
      'Designed the LLM orchestration and tool-calling framework',
      'Owned Text-to-SQL generation and validation',
    ],
    stack: ['LLM tool-calling', 'Text-to-SQL', 'Python', 'Data visualisation'],
  },
  {
    slug: 'kyc-onboarding-platform',
    title: 'LLM-driven KYC onboarding',
    tagline: 'From 3–5 days to under 24 hours, with customer data never leaving the bank.',
    company: 'Société Générale',
    role: 'Senior Data Scientist',
    period: 'Apr 2022 – Mar 2024',
    image: 'documents',
    metrics: [
      { value: '<24 h', label: 'onboarding turnaround (from 3–5 days)' },
      { value: '~60%', label: 'less manual review' },
      { value: '0.87', label: 'credit-risk model AUC' },
    ],
    challenge:
      'Customer onboarding meant reading documents by hand, checking KYC details and assessing credit risk, which took 3–5 days per case. ' +
      'Any automation had to keep sensitive customer data inside the bank’s own infrastructure.',
    approach: [
      {
        title: 'Intelligent document extraction',
        body: 'Tesseract OCR with OpenCV preprocessing pulls fields out of scanned customer documents.',
      },
      {
        title: 'LLM field validation and case summaries',
        body: 'A language model checks extracted fields for consistency and writes a GenAI summary of each case for the reviewer.',
      },
      {
        title: 'Explainable credit-risk scoring',
        body: 'An ML credit-risk model (0.87 AUC) scores each applicant, with SHAP explanations behind every score.',
      },
      {
        title: 'Privacy and control by design',
        body: 'PII masking, human-in-the-loop review, and deployment on on-premise Linux servers through Jenkins CI/CD pipelines.',
      },
    ],
    outcome:
      'Turnaround fell from 3–5 days to under 24 hours and manual review dropped by about 60%, with auditable, consistent compliance workflows and sensitive data kept in-house.',
    ownership: [
      'Designed and built the onboarding pipeline in Python',
      'Built the credit-risk model and its SHAP explanations',
      'Set up PII masking, human review and on-premise CI/CD deployment',
    ],
    stack: ['Tesseract OCR', 'OpenCV', 'LLMs', 'SHAP', 'Python', 'Jenkins', 'Linux'],
  },
  {
    slug: 'nav-justification-model',
    title: 'NAV justification model',
    tagline: 'A production model that helps explain movements in a fund’s Net Asset Value.',
    company: 'Société Générale',
    role: 'Senior Data Scientist',
    period: 'Apr 2022 – Mar 2024',
    image: 'datacenter',
    dark: true,
    metrics: [
      { value: 'Production', label: 'deployed and scheduled' },
      { value: 'K8s', label: 'containerised on Kubernetes' },
    ],
    challenge:
      'In investment management, movements in Net Asset Value (NAV) need to be justified. Doing that reliably needed a model that ran as dependable production infrastructure, not a notebook.',
    approach: [
      {
        title: 'Decision-tree models',
        body: 'Machine-learning decision trees model the drivers behind NAV, keeping the logic inspectable.',
      },
      {
        title: 'Event-driven pipeline',
        body: 'RabbitMQ messaging connects the stages, with data in AWS S3 and PostgreSQL.',
      },
      {
        title: 'Orchestrated and containerised',
        body: 'Airflow schedules the workflows; Docker and Kubernetes provide scalable, repeatable deployment.',
      },
    ],
    outcome:
      'A production-ready predictive model for NAV justification, built on a scalable, operationally efficient stack.',
    ownership: ['Developed the model and its production pipeline end to end'],
    stack: ['Python', 'Decision trees', 'RabbitMQ', 'AWS S3', 'PostgreSQL', 'Airflow', 'Docker', 'Kubernetes'],
  },
  {
    slug: 'nlp-query-chatbot',
    title: 'NLP query chatbot',
    tagline: 'Natural-language issue search and next-word prediction, at research-lab scale.',
    company: 'TCS Research',
    role: 'Applied Machine Learning Engineer',
    period: 'Feb 2019 – Mar 2022',
    image: 'code-sublime',
    metrics: [
      { value: '3.2 yrs', label: 'applied ML research' },
      { value: 'Spark', label: 'distributed training & prediction' },
    ],
    challenge:
      'Users needed to find known issues by describing them in their own words, and models had to train and predict at a scale a single machine couldn’t handle.',
    approach: [
      {
        title: 'NLP issue search',
        body: 'A query chatbot built with Django uses NLP to match user questions to relevant issues.',
      },
      {
        title: 'Next-word prediction',
        body: 'An LSTM sequential model (Keras, TensorFlow/PyTorch) predicts the next word as users type.',
      },
      {
        title: 'Distributed ML and MLOps',
        body: 'Large-scale training and prediction ran on Hadoop and Spark, with A/B testing and MLOps managing the model lifecycle.',
      },
    ],
    outcome:
      'A working NLP chatbot and prediction module, trained and served at scale, with experiments and releases managed through A/B testing and MLOps.',
    ownership: ['Built the chatbot, the LSTM module and the distributed training pipeline'],
    stack: ['Python', 'Django', 'Keras', 'TensorFlow', 'PyTorch', 'LSTM', 'Hadoop', 'Spark', 'MLOps'],
  },
];

export const featured = projects.slice(0, 5);

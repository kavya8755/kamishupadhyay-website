// Edit this list to update the experience timeline on the /work/ page.
export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: 'SBER Bank India',
    title: 'Gen AI Architect',
    period: 'Aug 2025 – Present',
    location: 'Bengaluru, IN',
    bullets: [
      'Fraud detection: led a team to architect a real-time fraud platform for money-mule detection, combining XGBoost, graph analytics and a GigaChat SLM investigation agent with SHAP explainability. It reached 93.5% PR-AUC at 4.25 ms latency and cut fraud losses by 76% compared with the baseline.',
      'RAG knowledge platform: led a team to build a RAG-based AI assistant for 500+ employees across HR, IT and operations. It handles about 65% of queries without a human, cut response time from hours to seconds and saved 3 FTE.',
      'Voice agent: led a team to build a production STT → LLM → TTS banking voice agent on Sber Platform V, with fine-tuned GigaChat 2 MAX, guardrails and a CI quality gate. It cut ASR WER from 46% to 22%, reached 92% intent accuracy and ran at 1.8 s p95 latency and ₹0.48 per turn.',
    ],
  },
  {
    company: 'Ernst & Young LLP',
    title: 'Lead AI Engineer',
    period: 'Apr 2024 – Jul 2025',
    location: 'Bengaluru, IN',
    bullets: [
      'Built an agentic AI analytics platform with LLM tool-calling, validated Text-to-SQL (about 88% execution accuracy) and auto-generated charts, so 300+ users could analyze sales, inventory and logistics data in plain language. It cut ad-hoc report requests by about 50% and turnaround from days to minutes.',
    ],
  },
  {
    company: 'Société Générale',
    title: 'Senior Data Scientist',
    period: 'Apr 2022 – Mar 2024',
    location: 'Bengaluru, IN',
    bullets: [
      'Built an LLM-driven onboarding platform that automates OCR-based document extraction, KYC checks and credit-risk scoring (0.87 AUC, with SHAP explanations), cutting turnaround from 3–5 days to under 24 hours and manual review by about 60%, with PII masking and on-premise Jenkins CI/CD.',
      'Developed a production predictive model for justifying Net Asset Value (NAV) in investment management using decision trees, RabbitMQ, Python, AWS S3, PostgreSQL, Airflow, Docker, and Kubernetes.',
    ],
  },
  {
    company: 'TCS Research',
    title: 'Applied Machine Learning Engineer',
    period: 'Feb 2019 – Mar 2022',
    location: 'Bengaluru, IN',
    bullets: [
      'Built an NLP-based query chatbot (Django) for issue searching and a next-word-prediction module using an LSTM sequential model (Keras/TensorFlow/PyTorch).',
      'Handled large-scale ML training and prediction on Hadoop/Spark distributed systems, with A/B testing and MLOps for lifecycle management.',
    ],
  },
  {
    company: 'GateOverflow',
    title: 'Applied Machine Learning Engineer',
    period: 'May 2018 – Jan 2019',
    location: 'Trivandrum, IN',
    bullets: [
      'Performed semantic analysis on user comments using NLTK to extract customer sentiment and intent.',
    ],
  },
];

export const skills = {
  'AI/ML': ['CNN', 'LSTM', 'XGBoost', 'AutoML', 'Predictive Modelling', 'Time Series', 'LLM Response/Inference Optimization'],
  'GenAI': ['Prompt/Context Engineering', 'RAG', 'Agentic AI', 'SFT', 'PEFT', 'LoRA', 'QLoRA', 'MCP', 'OCR', 'vLLM'],
  'Programming': ['Python', 'SQL', 'Java'],
  'Frameworks': ['TensorFlow', 'PyTorch', 'FastAPI', 'LangChain', 'LangGraph', 'LlamaIndex', 'Hugging Face', 'Weights & Biases'],
  'DevOps': ['Git', 'Docker', 'Airflow', 'CI/CD', 'DVC', 'LLMOps'],
  'Cloud & Data': ['AWS', 'PostgreSQL', 'Spark', 'Hadoop', 'GCP', 'MongoDB', 'Redis', 'Cassandra'],
};

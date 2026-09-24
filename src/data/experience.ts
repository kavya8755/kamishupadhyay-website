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
      'Fraudulent money-mule networks were causing significant losses and needed faster, explainable investigation.',
      'Architected an end-to-end XGBoost + graph analytics + GigaChat LLM/RAG fraud platform with real-time scoring, SHAP explainability, cost-based thresholding, and an investigation agent.',
      'Achieved 99.5% PR-AUC, 100% recovery of simulated fraud rings, 4.25ms latency, and an 82% reduction in fraud losses versus the baseline.',
    ],
  },
  {
    company: 'Ernst & Young LLP',
    title: 'Senior AI Engineer',
    period: 'Apr 2024 – Jul 2025',
    location: 'Bengaluru, IN',
    bullets: [
      'Architected an enterprise agentic AI analytics platform for natural-language analysis of sales, inventory, and logistics data.',
      'Designed an LLM orchestration and tool-calling framework for intent understanding, Text-to-SQL generation and validation, enterprise data retrieval, and dynamic Python-based visualization.',
      'Enabled end-to-end conversational decision intelligence for sales trends and comparisons, product performance, inventory issues, and logistics bottlenecks.',
    ],
  },
  {
    company: 'Société Générale',
    title: 'Senior Data Scientist',
    period: 'May 2022 – Mar 2024',
    location: 'Bengaluru, IN',
    bullets: [
      'Designed an end-to-end agentic onboarding and compliance platform to reduce manual KYC effort, covering document processing, KYC verification, sanctions/PEP screening, and credit-risk assessment.',
      'Built a LangGraph supervisor with specialist agents and tools — Tesseract OCR with a vision-LLM fallback, an ML credit model with SHAP explanations, and hybrid-RAG compliance memos with a citation for every claim — deployed on AWS (Bedrock, ECS, Step Functions, KMS) with PII redaction, prompt-injection defences, and human-in-the-loop review.',
      'Delivered an auditable, replayable onboarding pipeline with CI evaluation gates, per-stage latency and cost budgets, and bias testing.',
      'Developed a production predictive model for justifying Net Asset Value (NAV) in investment management using decision trees, RabbitMQ, Python, AWS S3, PostgreSQL, Airflow, Docker, and Kubernetes.',
    ],
  },
  {
    company: 'TCS Research',
    title: 'Applied Machine Learning Engineer',
    period: 'Feb 2019 – Apr 2022',
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
  'AI/ML': ['CNN', 'LSTM', 'XGBoost', 'AutoML', 'Predictive Modelling', 'Time Series', 'LLM Response Optimization'],
  'GenAI': ['Prompt/Context Engineering', 'RAG', 'Agentic AI', 'SFT', 'PEFT', 'LoRA', 'QLoRA', 'MCP', 'OCR', 'vLLM'],
  'Programming': ['Python', 'SQL', 'JavaScript', 'TypeScript'],
  'Frameworks': ['TensorFlow', 'PyTorch', 'FastAPI', 'LangChain', 'LangGraph', 'LlamaIndex', 'Hugging Face', 'Weights & Biases'],
  'DevOps': ['Git', 'Docker', 'Airflow', 'CI/CD', 'MLflow', 'DVC', 'LLMOps'],
  'Cloud & Data': ['AWS', 'PostgreSQL', 'Spark', 'Hadoop', 'Azure', 'GCP', 'MongoDB', 'Redis', 'Cassandra'],
};

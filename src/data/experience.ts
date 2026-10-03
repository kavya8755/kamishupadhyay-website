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
      'Architected an end-to-end XGBoost + graph analytics + GigaChat SLM fraud platform with real-time scoring, SHAP explainability, cost-based thresholding, and an investigation agent.',
      'Achieved 99.5% PR-AUC, 100% recovery of simulated fraud rings, 4.25ms latency, and an 82% reduction in fraud losses versus the baseline.',
    ],
  },
  {
    company: 'Ernst & Young LLP',
    title: 'Lead AI Engineer',
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
    period: 'Apr 2022 – Mar 2024',
    location: 'Bengaluru, IN',
    bullets: [
      'Tasked with cutting manual effort in customer onboarding, designed an LLM-driven platform to automate document processing, KYC verification, and credit-risk assessment.',
      'Built the pipeline in Python: Tesseract OCR with OpenCV preprocessing for document extraction, LLM-based field validation and GenAI case summarization, and an ML credit-risk model with SHAP explanations, protected by PII masking and human-in-the-loop review, and deployed on on-premise Linux servers through Jenkins CI/CD pipelines.',
      'Delivered automated, auditable compliance workflows that made onboarding faster and more consistent while keeping sensitive customer data inside the bank\'s own infrastructure.',
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

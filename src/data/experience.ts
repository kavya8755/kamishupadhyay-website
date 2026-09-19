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
      'Led the team building GigaOCR, a multimodal data extraction system (Hugging Face Transformers, olmOCR, vLLM, Qwen3-VL) for scanned documents, images, and handwritten invoices.',
      'Contributed to GigaChat enterprise LLM solutions — role-based chatbots for HR, IT, Treasury, Methodology, Credit, Investment, and Sales.',
      'Implemented multi-turn dialogue context modeling, state tracking, and a voice-agent framework with speech-to-text interaction.',
    ],
  },
  {
    company: 'Ernst & Young LLP',
    title: 'Senior AI Engineer',
    period: 'Apr 2024 – Jul 2025',
    location: 'Bengaluru, IN',
    bullets: [
      'Built a multimodal AI compliance platform for a global chemicals client, analyzing product regulations across 50+ countries using CLIP, FAISS, Neo4j knowledge graphs, and GPT-4.',
      'Ran supervised fine-tuning and alignment of domain-specific LLMs; implemented agentic workflows with memory, tool-calling, human-feedback loops, and recovery mechanisms.',
      'Achieved roughly 70x faster compliance processing versus the manual baseline.',
    ],
  },
  {
    company: 'Société Générale',
    title: 'Senior Data Scientist',
    period: 'May 2022 – Mar 2024',
    location: 'Bengaluru, IN',
    bullets: [
      'Built an AI-driven onboarding and compliance verification system using Tesseract OCR and LLMs for document parsing, risk profiling, and KYC summarization, deployed on AWS.',
      'Developed a production predictive model for justifying Net Asset Value (NAV) in investment management using decision trees, RabbitMQ, PostgreSQL, Airflow, Docker, and Kubernetes.',
    ],
  },
  {
    company: 'TCS Research',
    title: 'Applied Machine Learning Engineer',
    period: 'Feb 2019 – Apr 2022',
    location: 'Bengaluru, IN',
    bullets: [
      'Built an NLP-based query chatbot (Django) and a next-word-prediction module using an LSTM sequential model (Keras/TensorFlow/PyTorch).',
      'Handled large-scale ML training and prediction on Hadoop/Spark distributed systems, with A/B testing and MLOps for lifecycle management.',
    ],
  },
  {
    company: 'GateOverflow',
    title: 'Applied Machine Learning Engineer',
    period: 'May 2018 – Jan 2019',
    location: 'Trivandrum, IN',
    bullets: [
      'Ran semantic analysis on user comments with Python and NLTK to extract sentiment, intent, and key themes for customer feedback insights.',
    ],
  },
];

export const skills = {
  'AI/ML': ['CNN', 'RNN', 'LSTM', 'XGBoost', 'AutoML', 'Predictive Modeling', 'Time Series'],
  'GenAI': ['Transformers', 'Prompt/Context Engineering', 'RAG', 'Agentic AI', 'SFT', 'FFT', 'PEFT', 'LoRA/QLoRA', 'RL Reward Optimization', 'MCP', 'OCR', 'vLLM'],
  'Programming': ['Python', 'SQL', 'JavaScript'],
  'Frameworks': ['TensorFlow', 'PyTorch', 'Flask', 'Django', 'Streamlit', 'FastAPI'],
  'DevOps': ['Git', 'Docker', 'Kubernetes', 'Airflow', 'CI/CD', 'MLflow', 'DVC'],
  'Cloud & Data': ['AWS', 'PostgreSQL', 'Spark', 'Hadoop', 'Azure', 'GCP'],
};

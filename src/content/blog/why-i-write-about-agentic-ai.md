---
title: "Why I'm Writing About Agentic AI, RAG, and MCP"
description: "Starting this blog to document the architecture decisions, failure modes, and lessons behind the enterprise GenAI systems I build."
pubDate: 2026-09-19
tags: ["agentic-ai", "rag", "mcp"]
image: "code-sublime"
---

Most of what I've learned about building production LLM systems didn't come from a paper — it came from watching a RAG pipeline fall over under real traffic, or a multi-agent workflow lose state halfway through a long-running task, and having to figure out why.

I'm starting this blog to write that part down: the architecture decisions behind agent platforms, the trade-offs in tool design and context engineering, what actually breaks when you scale from a prototype to something an enterprise depends on, and how standards like MCP are changing how we wire tools into agents.

A few things I plan to write about:

- Reference architectures for agent platforms — runtimes, state, and execution models that hold up past the demo stage.
- Practical RAG: retrieval quality, chunking, and evaluation that goes beyond a single benchmark number.
- Fine-tuning trade-offs — when SFT, PEFT, or LoRA/QLoRA actually earns its cost versus better prompting.
- Lessons from shipping GenAI into regulated, financial-services environments, where "it mostly works" isn't good enough.

If you're building something similar, I'd like to hear about it — the contact page has the fastest ways to reach me.

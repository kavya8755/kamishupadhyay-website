---
title: "When Fine-Tuning Earns Its Cost"
description: "A practitioner's guide to choosing between prompting, RAG and fine-tuning, and to the parameter-efficient methods (PEFT, LoRA, QLoRA) that make fine-tuning practical."
pubDate: 2026-10-05
tags: ["fine-tuning", "lora", "qlora", "llm"]
image: "gpu-desk"
---

"Should we fine-tune?" is one of the most common questions I get, and the honest answer is usually "not yet". Fine-tuning is powerful, but it has to earn its place against two cheaper options: better prompting and retrieval.

## Start with the problem, not the technique

A rough decision guide I use:

- **The model lacks knowledge** (your policies, your products, this week's data): use **RAG**. Knowledge belongs in an index you can update, not in weights you have to retrain.
- **The model has the knowledge but behaves wrongly** (wrong format, tone or domain phrasing): this is where **fine-tuning** shines.
- **You need a narrow task at high volume** with tight latency or cost: fine-tuning a **smaller model** often beats prompting a large one.
- **You haven't tried a well-engineered prompt yet**: do that first. It's the cheapest experiment you'll run.

These aren't exclusive. A fine-tuned model (for behaviour) paired with RAG (for facts) is often the strongest combination, and a fine-tuned model can usually work with shorter prompts, which helps both latency and cost.

## Make it cheap: parameter-efficient fine-tuning

Full fine-tuning updates every weight. It's expensive, slow and produces a full copy of the model per task. **PEFT** methods change that:

- **LoRA** freezes the base model and trains small low-rank adapter matrices alongside it. The trainable part is a tiny fraction of the model, and adapters are megabytes rather than gigabytes.
- **QLoRA** applies LoRA on top of a 4-bit quantised base model, so even large models can be adapted on modest hardware.

The practical upshot: you can keep one base model and serve several task-specific adapters on top of it.

## Data beats hyperparameters

The single biggest lever is the training data. A thousand clean, representative examples beat a pile of noisy ones. Two mistakes I see often:

1. **Mismatched chat templates** between training and inference. Quality quietly collapses.
2. **Leaky evaluation**, where test examples resemble training examples closely enough to inflate every metric.

## Always compare against a baseline

Before celebrating a fine-tune, compare it with the base model plus your best prompt on the same held-out test set. Sometimes the gap is smaller than you hoped. Sometimes it's the reason the project ships.

## The takeaway

Use RAG for knowledge and fine-tuning for behaviour and efficiency. Reach for LoRA or QLoRA before full fine-tuning, and let a fair baseline decide whether it was worth it. For a deeper walkthrough, see my [Fine-Tuning LLMs with LoRA & QLoRA](/courses/#fine-tuning-lora-qlora) mini course.

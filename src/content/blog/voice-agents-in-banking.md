---
title: "Putting a Voice Agent in Front of Bank Customers"
description: "Accuracy, latency and cost all compound in a speech pipeline. Here is how we got a STT → LLM → TTS banking agent to 92% intent accuracy at 1.8 s p95 and ₹0.48 a turn."
pubDate: 2026-09-28
tags: ["voice-ai", "llm", "guardrails", "production"]
image: "humanoid"
---

Text chatbots forgive a lot. Voice forgives almost nothing. A misheard word becomes a wrong intent, a wrong intent becomes a wrong answer, and every half-second of silence feels like a dropped call.

At SBER, I led the team that built a production banking voice agent: a **STT → LLM → TTS** pipeline on Sber Platform V, with a fine-tuned **GigaChat 2 MAX**, guardrails and a CI quality gate. These are the results we shipped with:

- Speech-recognition word error rate down from **46% to 22%**
- **92%** intent accuracy
- **1.8 s** p95 latency
- **₹0.48** per conversation turn

Here's how I think about building one.

## Errors compound, so fix the front of the pipeline first

In a cascaded pipeline, the language model can only be as good as the transcript it receives. At 46% word error rate, the model is guessing at half the sentence. Halving WER attacks errors at their source, which is why recognition quality deserves to be a first-class workstream, not an afterthought.

## Fine-tune for the domain

Banking conversations have their own vocabulary, intents and phrasing. A fine-tuned model can learn them directly instead of relying on a long prompt for every turn. In general, that helps accuracy and also cost and latency, because the prompt can stay short.

## Budget latency like money

Users judge voice agents on the slowest moments, not the average. That's why we track **p95**, not the mean. A useful exercise is to give every stage (recognition, model, speech synthesis) its own slice of the budget, then hold each slice to it.

## Budget money like latency

A voice agent that costs too much per turn will never reach full deployment. Measuring **cost per turn** from day one keeps model size, prompt length and retries honest. Keeping it at ₹0.48 a turn is what makes the agent viable at scale.

## Guardrails and a quality gate

Two controls made it safe to ship changes:

1. **Guardrails** keep responses inside policy: no advice the bank can't give, no leaking of anything it shouldn't.
2. A **CI quality gate** runs the evaluation suite on every change and blocks a release if quality regresses. Without it, every improvement is a gamble.

## The takeaway

Voice is a systems problem. Get the transcript right, specialise the model, and treat latency, cost and quality as budgets that every change has to respect. The model is only one part of it.

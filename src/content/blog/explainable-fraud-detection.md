---
title: "Fraud Detection a Human Can Audit"
description: "Why a money-mule platform needs more than a good model: real-time scoring, a network view, cost-aware thresholds, and explanations investigators can act on."
pubDate: 2026-09-24
tags: ["fraud-detection", "explainability", "xgboost", "graphs"]
image: "fiber"
---

Money-mule networks are a frustrating problem. Each account in the chain receives some money and passes it on, and looked at one transaction at a time, very little of it looks unusual. The fraud lives in the pattern, not in any single payment.

At SBER, I led the team that built a real-time platform for exactly this problem. It combines XGBoost, graph analytics and a GigaChat SLM investigation agent with SHAP explainability. It reached **93.5% PR-AUC at 4.25 ms latency** and cut fraud losses by **76%** against the baseline. The numbers matter, but this post is about the design choices behind them, because most of them are not about the model.

## 1. Measure what fraud teams care about

Fraud is rare, which makes accuracy and even ROC-AUC look flattering. A model can be "99% accurate" by approving everything. **PR-AUC** (the area under the precision-recall curve) is a much harder grader. It asks how many of your alerts are real and how many of the real cases you catch. It's the closest single number to "is this useful to an investigator?"

## 2. Score in the transaction path

Mule money moves quickly. A score that arrives in tomorrow's batch is a post-mortem. Gradient-boosted trees are a pragmatic choice here: strong on tabular features, predictable, and fast enough to run inside a latency budget of a few milliseconds.

## 3. Add the network view

The individual transaction is the wrong unit of analysis for mule rings. Treating accounts and money flows as a **graph** lets you see the structure: fan-in, fan-out, and short-lived accounts that sit between victims and cash-out points. Graph analytics is what turns "an odd transfer" into "a ring".

## 4. Set thresholds from costs, not defaults

A 0.5 cut-off is a modelling convenience, not a business decision. A missed fraud and a false alarm cost very different amounts, and an investigation team has a fixed capacity. **Cost-based thresholding** picks the operating point that minimises expected loss, so the alert queue reflects what the bank can actually act on.

## 5. Explain every score

In banking, "the model said so" isn't an answer. **SHAP** gives each score a breakdown of which features pushed it up or down. This helps investigators triage, helps reviewers audit, and helps the team spot when the model is leaning on something it shouldn't.

## 6. Give investigators an assistant, not just a number

The last piece is an **investigation agent** built on a GigaChat small language model. It works from the score and its explanation and helps the investigator work the case. A small model fits this job: it's cheaper and faster to run, and the task is narrow enough that a frontier model would be overkill.

## The takeaway

A good model is necessary but not enough. What made this platform work was the system around the model: the right metric, a latency budget, the network view, thresholds tied to cost, and explanations at every step. If you're building fraud or risk systems, I'd start there before reaching for a bigger model.

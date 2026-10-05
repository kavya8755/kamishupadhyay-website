---
title: "Text-to-SQL That Business Users Can Trust"
description: "Generating SQL is the easy part. Validation, orchestration and returning a chart instead of a table are what got 300+ users to stop filing report requests."
pubDate: 2026-10-01
tags: ["text-to-sql", "agentic-ai", "tool-calling", "analytics"]
image: "ide-debug"
---

Every analytics team has the same queue: "Can you pull sales by region for last quarter?" "Why is this product down?" "Where are the delays in the north warehouse?" Each request is small, and together they bury the team. Answers come back in days.

At EY, I built an agentic analytics platform to empty that queue. It uses LLM tool-calling, validated **Text-to-SQL** and auto-generated charts. More than **300 users** now ask sales, inventory and logistics questions in plain language. It reached about **88% execution accuracy**, cut ad-hoc report requests by about **50%**, and brought turnaround from days to minutes.

These are the lessons I'd pass on.

## Don't go straight from question to SQL

The naive version, "prompt in, SQL out", fails in predictable ways. It picks the wrong table, misreads the business term, or answers a slightly different question. Start with **intent understanding** instead: is this a trend, a comparison, a product deep-dive, or a bottleneck? The intent shapes which data and which query patterns are relevant.

## Orchestrate with tools, not one giant prompt

Separate the steps into tools the model calls in order: generate the query, retrieve the data, build the chart. Each step is small enough to test on its own, and when something goes wrong you can see exactly where.

## Validate before you execute

This is the part that earns trust. Generated SQL is **checked before it runs**, and the platform measures **execution accuracy**: does the query actually run and return the right answer, not just look plausible? An 88% execution-accuracy system with honest validation is far more useful than a "95%" one that sometimes returns confident nonsense.

## Answer with a chart

Business users don't want a result set; they want the answer. Generating the **visualisation** automatically (in our case, dynamic Python charts) is what makes the tool feel like an analyst instead of a database console.

## The takeaway

Text-to-SQL becomes trustworthy when you treat it as a pipeline: understand intent, orchestrate small tools, validate before executing, and present results the way people think. The model is one component. The engineering around it is what users end up trusting.

---
title: "An AI Assistant for 500+ Employees: What Actually Mattered"
description: "Lessons from a RAG assistant that resolves about 65% of HR, IT and operations questions without a human, and why the hand-off matters as much as the answers."
pubDate: 2026-10-03
tags: ["rag", "enterprise-ai", "knowledge-management"]
image: "team-laptops"
---

Most internal questions already have an answer somewhere: a policy PDF, a runbook, a wiki page nobody can find. The problem isn't missing knowledge. It's that getting to it takes a ticket and a few hours.

At SBER, I led the team that built a **RAG-based AI assistant** for **500+ employees** across HR, IT and operations. It handles about **65% of queries without a human**, cut response time from hours to seconds, and saved the equivalent of **3 FTE**.

Here's what mattered more than I expected.

## Ground every answer in your own content

Retrieval-augmented generation is the right default for internal assistants. The knowledge changes, it's specific to the organisation, and people need to trust that the answer reflects current policy. Answering from retrieved internal content, rather than the model's general knowledge, is what makes that possible.

## Retrieval quality is the ceiling

If the right passage isn't retrieved, no prompt will fix the answer. Most of the "the model hallucinated" reports in a RAG system are really retrieval misses. That means retrieval deserves its own measurement and its own iteration loop, separate from generation.

## Design the hand-off, not just the answers

The headline number is that about 65% of queries are resolved without a human. The other 35% matter just as much. An assistant that confidently answers questions it shouldn't is worse than no assistant. Routing the rest to the right people is what makes the system shorten the queue instead of becoming another dead end.

## Measure in the units the business uses

"Answer quality improved" doesn't get a project funded. **Response time** (hours to seconds), **deflection** (about 65%) and **effort saved** (3 FTE) do. Choose those measures up front and instrument for them from the first release.

## The takeaway

An enterprise RAG assistant succeeds on ordinary things: retrieval that finds the right passage, an honest hand-off when it can't, and metrics the business already cares about.

---
title: "From PRD to Production in 24 Hours"
date: "2026-02-28"
summary: "How we work at Zinkee to move from one deploy every two days to 5-6 deploys per day, without sacrificing architecture, quality, or control."
tags: ["ai", "agents", "engineering", "zinkee", "learnings"]
draft: false
---

If six months ago someone had told me that at Zinkee we would go from **shipping every two days to shipping five or six times per day**, I probably would have called it an exaggeration. Today, it is our reality. And no, it did not happen because we started moving recklessly or lowered our quality bar. **It happened because we changed how we work**.

**Everything starts long before writing code**. The Product team identifies real problems through interviews, experiments, and usage signals, and from there we create an **internal PRD**. **When that work is done well, the rest of the flow breathes**. When it is not, you feel it immediately.

I think one of our biggest learnings has been exactly this: **problem clarity is almost everything**. With agents, **ambiguity is not hidden; it gets amplified**. If the context is fuzzy, the result will be too. **If the context is solid, speed and quality both increase dramatically**.

In our day-to-day practice, prioritization happens from engineering, and once a task enters execution, the focus is on **research and planning before implementation**. This has helped us a lot and is very aligned with the phased approach Boris Tane describes in his article on [using agents with an initial research phase](https://boristane.com/blog/how-i-use-claude-code/#phase-1-research).

<figure>
  <img
    src="/img/blog/from-prd-to-production-in-24h/pipeline-1.svg"
    alt="Zinkee delivery pipeline part 1"
  />
  <figcaption>Delivery pipeline (part 1): from need detection to PR creation.</figcaption>
</figure>

Then comes the most visible part: implementation with agents, PR creation, quality pipelines, and review. Today we work with multiple automated reviewers, but there is one thing we have not given up: **final technical decisions are still human**. Agents propose, detect, accelerate, and raise the bar in many cases, but **product and architecture judgment remains with the team**.

<figure>
  <img
    src="/img/blog/from-prd-to-production-in-24h/pipeline-2.svg"
    alt="Zinkee delivery pipeline part 2"
  />
  <figcaption>Delivery pipeline (part 2): CI, review loop, merge and deploy.</figcaption>
</figure>

We have also learned to live with the limits. **If a PR gets too large, review quality tends to drop**. If you do not push for simplification, unnecessary code appears. **If you do not enforce continuous validation, things slip through**. We made these mistakes multiple times at the beginning; now they are part of our operating rules.

In parallel, something interesting happened: while a model is thinking, executing, or reviewing, the team uses those windows to close small bugs and improvements that used to be postponed for "when we have time." In this kind of work, agents usually operate with much higher autonomy. Sometimes we delegate scoped changes and validate locally, but there are also **fully autonomous cases where nobody intervenes until the agent opens the PR**. From that point on, **the PR enters the exact same quality loop** (CI, checks, and review) as the rest of our work.

One case that best captures this shift was the integration engine. For us, it was **not just another feature, but an infrastructure component**: the layer that lets Zinkee communicate with external systems and evolve from a collaborative database into a connected operations platform. The immediate goal was to build a useful MVP, while **laying foundations so later phases would not force us to refactor earlier ones**.

That nuance was critical in our technical decisions. The challenge **was not only "making HTTP calls"**, but designing a base that could later support reusable connections, templates, inbound webhooks, and external channels **without duplicating logic or coupling everything to the workflow engine**.

With that framing, we delivered and shipped key phases at a speed that, not long ago, would have felt unrealistic. **Phase 1 and Phase 2 were completed in 24 hours**: architecture, implementation, tests, and production deployment. **And Phase 3 took another full 24 hours** with the same level of completeness. Beyond the speed itself, what mattered most was confirming that we could move fast **without compromising the long-term evolution of the system**.

With all that, my takeaway is simple: **we are not in an era of "engineers being less needed," we are in an era of more demanding engineering**. Less time writing code by inertia, and more time understanding the problem, designing robust architecture, defining constraints, and making better decisions.

For me, that is the real change. **Agents do not replace the engineer. They force the engineer to level up**.

---
title: "Visualization & Making Reports"
date: 2026-03-13
---

## Generating Experiment Reports with Claude (Shuhan)

Claude can go beyond writing code — it can design and run experiments, monitor results, and **generate visual reports** from raw data.

### The Pipeline

1. **Run experiments** — Claude manages execution, monitors logs, and loops on pass/fail checks
2. **Collect results** — Experimental outputs are written to structured markdown files
3. **Generate reports** — Raw data is transformed into SVG visualizations

You can define a **custom skill** so that Claude generates SVG reports consistently every time.

### Workflow in Detail

#### 1. Read Raw Data
Start by pointing Claude at your experimental output.

#### 2. Structure the Report
This is the step that requires the most **human input** — Claude should not decide what goes into the report on its own.

- Discuss with Claude: how many sections/panels do you want?
- Verify: ask Claude to summarize the data and propose panels
- Iterate on the structure through conversation

#### 3. Build the Visuals
- Spin up a **separate visual agent** to render and review the SVG output
  - Prompt pattern: *"Use a subagent to verify the SVG looks correct"*
  - Provide an example of the desired output for reference
- Individual visual components are typically **one-shot** — Claude handles them well
- **Layout and composition** requires human guidance

#### 4. Audit for Correctness
- Use **3 subagents with clean context** to independently verify results
- Check coherence against the original paper implementation and raw data
- Always audit the final output yourself

### Key Takeaways

- **Claude can't decide what you want in the report** — the report structure needs significant human direction
- **Building skills takes iteration** — keep discussing and refining with Claude
- **Verification strategies:**
  - Use Deep Research to cross-check against papers
  - Have Claude read and explain the code it wrote
  - Ask the agent to explain *what* it built and *why*

### Q&A

**How do you create custom skills?**
- Through iterative refinement — keep discussing with Claude until the skill does what you need reliably.

**How do you ensure report correctness?**
- Cross-reference with papers via Deep Research
- Have Claude inspect its own code
- Ask the agent to explain and justify its output

**How do you fork from a current chat?**
- Use `/fork` or `/btw` to branch off a conversation
- You can also read Claude session files directly

---

## Working with Math in PDFs (Philipp)

Claude can parse and reason about mathematical content from PDFs. Here's a reliable workflow:

1. **Convert** — Ask Claude to create a markdown version of the PDF
2. **Summarize** — Have Claude summarize the PDF content in markdown
3. **Verify understanding** — Ask questions about the math to test comprehension
4. **Leverage notation** — Let Claude handle all the notation formatting and manipulation

This approach works well for reading papers, understanding derivations, and working with mathematical content programmatically.

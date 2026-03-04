# UT Claude Corner

Weekly Friday meeting (14:00-15:00, GDC 4.816) where members of Philipp's and George's labs share Claude workflow tips, tricks, and best practices.

**Live site:** https://liyuantsao.github.io/ut-claude-corner/

## Adding Meeting Notes

1. Create a new file in `content/notes/` named `YYYY-MM-DD-topic.md`:
   ```markdown
   ---
   title: "Your Topic Title"
   date: YYYY-MM-DD
   ---

   ## Attendees
   - ...

   ## Discussion Topics
   - ...

   ## Tips & Tricks
   - ...
   ```

2. Update the schedule table in `content/_index.md` with a link to the new notes.

3. Push to `main` — the site will auto-deploy via GitHub Actions.

## Local Development

```bash
cd hugo
hugo server -D -F
```

Then open http://localhost:1313/ in your browser.

## Discussion

Use the [Discussion Doc](https://docs.google.com/document/d/1nWpwEteZ0sx115RrWjOYY9kPmZorbkwVXmZ-b6MYYr8/edit?usp=sharing) for:
- **Tips & Tricks** — Share useful Claude workflows
- **Q&A** — Ask questions about using Claude
- **Show & Tell** — Demo something you built with Claude
- **General** — Everything else

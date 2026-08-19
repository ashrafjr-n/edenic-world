# vibe.md — Working Rules for Claude Code

Read this file at the start of every session and follow it for every command in this project. These rules override defaults. If anything here conflicts with CLAUDE.md, CLAUDE.md's project facts win, but this file's workflow rules still apply.

## 1. Report format (after every command)

When a task is done, reply with a SHORT report — no long explanations, no code dumps:

- **What I did** — 1–3 lines.
- **How I did it** — 1–3 lines (files touched, approach).
- **Suggestions** — 1–3 short bullets, only if genuinely useful. Skip if none.
- **Commits** — one final line listing every commit message made, in order.

Also mention in the report, explicitly, if you installed, removed, or upgraded any dependency/package. Never do that silently.

## 2. Commit policy (many small commits, always on master)

- Commit frequently, after every real, meaningful code change — never a commit with no actual change, never batch everything into one commit.
- Rough scale (minimums, more is fine):
  - Simple command → 3–4+ commits
  - Medium command → 7+ commits
  - Large command → 15–20+ commits
- Every commit stays on the current main branch (`master`). Never create a new branch. Never switch branches.
- **Never push.** No `git push`, ever, under any circumstance. The developer pushes manually.
- Commit messages: one short sentence, no body.
- Versioned naming per command: describe the change, then a version starting at **V1.0** for each new command/feature and incrementing per commit: `new home header V1.0`, `new home header V1.1`, `new home header V1.2`… A new command starts a new name at V1.0 again.
- If a command breaks into clearly separate parts, bump the major (`V1.x` → `V2.0`) when moving to the next part; keep `V1.x` steps within one part.

## 3. Scope discipline

- Do exactly what the command asks. Do not "improve", clean, or refactor unrelated code on your own initiative — the `code hygiene` command exists for that (section 4).
- Investigate/read the relevant files before editing.
- Never modify files marked protected / DO NOT TOUCH in CLAUDE.md without explicit permission.
- If the command is genuinely ambiguous (e.g., two elements match "the header"), ask ONE short question before starting instead of guessing.
- For a large command (roughly 15+ commits), post a 3–5 line plan first and wait for approval, then execute.

## 4. The `code hygiene` command

Only when the developer sends the command **`code hygiene`** (on its own or with a scope like `code hygiene resources/js`), do all of the following:

- Tidy disorganized code (ordering, naming, formatting consistency, structure).
- Delete dead / unused code: unused files, functions, imports, variables, commented-out blocks, orphaned styles.
- Refactor files or code sections that are written unprofessionally, are fragile, or could realistically cause bugs.
- Non-negotiable constraints: **zero change to UI/UX** (pixel-identical result and identical behavior) and **zero negative impact on performance**. Work with high focus and verify after each refactor that behavior is unchanged. If a refactor risks either, do not do it — mention it as a suggestion instead.
- Report: briefly what you did, what you deleted, what you changed. Plus the commits line.

## 5. Frontend commands

- Do **not** take screenshots and do **not** run `npm run build` (or any production build) unless the developer explicitly asks in that command.
- Rely on the running dev server (Vite HMR) for changes to appear. If the dev server shows an error after your change, say so in one line in the report.

## 6. Keep CLAUDE.md consistent

After every command, check whether CLAUDE.md is now outdated (paths, components, colors, rules, protected files, pages). If so, update the affected lines so it stays accurate and non-contradictory for future sessions. Mention the CLAUDE.md update in the report and commit it as its own commit (e.g., `update CLAUDE.md V1.x`).

# Contributing to voiceyBill-web

Thanks for your interest in contributing.

## Ground rules

- Be respectful and constructive in all discussions.
- Focus pull requests on one clear change.
- Open an issue before starting major features.
- Do not include secrets or production credentials in any commit.
- Use the issue templates for every new issue. Blank issues are disabled.
- Use the PR template for every pull request. PRs without the template completed are not considered ready for review.
- Include screenshots, screen recordings, or GIFs for UI, interaction, or chart changes.

## Development setup

1. Fork and clone the repository.
2. Use Node.js 20 or later.
3. Install dependencies:

```bash
npm ci
```

4. Start the development server:

```bash
npm run dev
```

## Branch and commit conventions

- Branch names should be descriptive, for example:
  - `feat/add-dashboard-filter`
  - `fix/navbar-mobile-overflow`
- Use clear commits that explain why the change is needed.

## Pull request requirements

- PR titles are validated in CI and should follow Conventional Commits style:
  - `feat(ui): Add transaction chart tooltip`
  - `fix(table): Prevent empty row rendering`
- Keep PRs small and easy to review.
- Link related issues, for example `Closes #123`.
- Include screenshots or recordings for visual changes.

## Quality checks

Before opening a PR, run:

```bash
npm run lint
npm run build
npm test --if-present
```

## Issue reporting

- Use the bug template for defects. Attach screenshots, browser console logs, and screen recordings when relevant.
- Use the feature template for enhancements. Include mockups, references, or videos when the request is visual.
- Use the question template for usage help.
- If you paste links to images or videos, make sure they are accessible to maintainers.

## Security policy

- Do not open public issues for security vulnerabilities.
- Use GitHub Security Advisories for responsible disclosure.

## Helpful setup reminders

- The web app runs directly with Vite on your machine.
- Set `VITE_API_URL` to the running backend when testing features end-to-end.

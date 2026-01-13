# Synthetic Dev Docs

API documentation for [Synthetic](https://glhf.chat) - a unified AI proxy providing OpenAI and Anthropic-compatible APIs for 100+ models.

## Repository Structure

```
├── api/                    # General API documentation
│   ├── overview/           # Endpoint overview and authentication
│   ├── models/             # Supported models listing
│   └── getting-started/    # Quick start guide
├── openai/                 # OpenAI-compatible endpoint docs
│   ├── chat-completions/   # /chat/completions
│   ├── completions/        # /completions (legacy)
│   ├── embeddings/         # /embeddings
│   └── models/             # /models
├── anthropic/              # Anthropic-compatible endpoint docs
│   ├── messages/           # /messages + /messages/count_tokens
│   └── message-schemas.mdx # Message format specs
├── synthetic/              # Synthetic-specific endpoints
│   └── quotas/             # /quotas (usage limits)
├── guides/                 # Tool integration guides
│   ├── claude-code/        # Claude Code setup
│   ├── github-copilot/     # GitHub Copilot setup
│   ├── xcode/              # Xcode Intelligence setup
│   └── octofriend/         # Octofriend setup
└── components/             # Reusable React components
```

## Quick Start

### Prerequisites

- Access to [synthetic-lab/glhf.chat](https://github.com/synthetic-lab/glhf.chat) main repository
- Node.js 20+
- pnpm

### Editing Documentation

1. Clone this repository
2. Edit `.mdx` files directly—they use MDX (Markdown + React components)
3. Push to `main` to trigger sync to the parent application

Documentation pages import shared components from the main app:

```typescript
import { CodeTabs } from "@/app/components/ui/code-tabs";
import { Alert } from "@/app/components/ui/alert";
```

### Testing Changes

To preview changes, run the main [glhf.chat](https://github.com/synthetic-lab/glhf.chat) application locally with this docs folder synced.

## Deployment

Changes pushed to `main` trigger a GitHub Actions workflow that syncs to the main `synthetic-lab/glhf.chat` repository via webhook.

| Environment | URL |
|-------------|-----|
| Production  | [glhf.chat/docs](https://glhf.chat/docs) |

## Documentation Features

- **Multi-language examples**: Python, TypeScript, curl, Go, Rust, Ruby, PHP, Java
- **Interactive elements**: Live API key display, copyable code blocks
- **Subscription-aware**: Displays pricing tiers and rate limits dynamically
- **Model browser**: Lists 100+ models with context length and provider info

## File Format

All documentation pages are `.mdx` files supporting:

- Standard Markdown syntax
- JSX components inline
- Server-side data fetching (API keys, model lists)
- Tailwind CSS classes

## Further Reading

- [API Overview](api/overview/page.mdx)
- [Getting Started](api/getting-started/page.mdx)
- [Supported Models](api/models/page.mdx)

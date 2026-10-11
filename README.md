# Bharat Setu — Netlify Starter

This ZIP is a deployable **prototype/starter**, not a complete production marketplace. It contains a responsive public landing page, planned 25-agent dashboard cards, a voice-recognition demo that does not execute commands, and two Netlify Functions (`/api/health`, `/api/ai-status`).

## Deploy
1. Extract the ZIP.
2. Import the project into a Git repository and connect it to Netlify, or deploy the project directory using Netlify CLI.
3. Build settings are in `netlify.toml` (`public` publish directory and `netlify/functions` functions directory).
4. Test `https://YOUR-SITE/api/health` after deployment.

## Required before production
- Add a real authentication provider and server-side role/permission enforcement.
- Add a managed database and migrations.
- Add rate limits, validation, monitoring, backups and security review.
- Integrate each AI workflow with a provider and test it. Dashboard cards are planning UI only; no agents are live in this starter.
- Connect licensed/authorized business data sources and display source/date/verification status.
- Integrate a compliant payment gateway and verified webhook handling. Do not treat screenshots or client-side claims as payment confirmation.
- Verify ownership and correctness of any receiving UPI ID before showing it publicly.
- Add privacy policy, terms, dispute/appeal process, retention rules and applicable legal review.

## Security boundaries
- Do not put API keys, database credentials, passwords or OTPs in `public/` or commit them to source control. Configure secrets in Netlify environment variables with Functions scope.
- No feature here accesses a user's phone, private messages or external accounts. The voice demo only transcribes speech and does not execute actions.
- AI flags should be reviewed under a documented process; this starter does not impose legal fines or act as a court.
- Do not describe this starter as having live 195+ country data or production-ready payment processing.

## Environment variables
See `.env.example` for placeholder variable names. These are examples, not working credentials. Setting a variable alone does not complete the corresponding integration.

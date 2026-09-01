[Español](README.md) · **English**

<h1 align="center">Cristian López Espinosa</h1>

<p align="center"><b>Senior PHP Engineer</b> &nbsp;·&nbsp; Hexagonal Architecture &nbsp;·&nbsp; DDD &nbsp;·&nbsp; High Concurrency</p>

<p align="center">
  📍 Cádiz, Spain — Remote
  &nbsp;·&nbsp; ✉️ <a href="mailto:cristianlopezespinosa@gmail.com">cristianlopezespinosa@gmail.com</a>
  &nbsp;·&nbsp; 💼 <a href="https://linkedin.com/in/cristian-lopezespinosa/">LinkedIn</a>
</p>

---

Senior backend engineer with 10+ years in PHP. I specialise in taking legacy systems to maintainable hexagonal architectures and in solving high-concurrency problems without trading away data integrity. At my last two companies I've been the backend team's technical reference: architecture decisions, PR reviews, and introducing the standards —PHPStan level 9, TDD, CI— that raise the whole team's bar.

🟢 **Open to conversations about senior backend roles (remote).**
🗣️ Native Spanish · English B2 (targeting C1 in 2026).

## What I bring

- 🏛️ **Architecture** — Hexagonal, CQRS, DDD and TDD applied in production, not on slides. Three public repositories show it end to end.
- ⚡ **High concurrency** — data integrity held under load: Redis atomic locks, pessimistic locking, idempotency keys and sagas with compensation. Verified with k6 up to 1,000 virtual users.
- 🧭 **Technical reference** — PR reviews, quality standards and mentoring by example in mid-sized engineering teams.
- 💳 **Financial APIs & async** — Stripe, PayPal, MangoPay, PayComet and Redsys with recurring payments and webhooks; Redis queues with idempotent jobs and backoff.
- 🤖 **AI integrations** — Gemini and OpenAI wrapped as swappable adapters (Strategy), run in async jobs with a capped per-call cost.

## Selected work

Three production-grade backends, each built to prove one hard thing. All share: Docker · PHPStan level 9 · test suites against real MySQL and Redis (no SQLite mocks) · committed k6 load-test evidence · a production stack deployable behind Traefik.

### 🎟️ [Ticketing System — High-Concurrency Reservations](https://github.com/CristianLopez29/ticketing-system-demo)

1,000 authenticated buyers fighting over 100 seats → **exactly 100 sales, 0 seats sold twice, 0 server errors**. Measured with k6; the artifacts are committed to the repo, not screenshots.

Redis atomic locks (Lua scripts) · `SELECT … FOR UPDATE` · idempotency keys · payment saga with automatic compensation on failure · circuit breaker · 4 bounded contexts with zero cross-context imports.

`PHP 8.4` · `Laravel 12` · `MySQL 8` · `Redis` · `Docker`

### 🧩 [Candidacy Management API — Enterprise Patterns + AI Screening](https://github.com/CristianLopez29/manage-applications-and-evaluators)

An HR domain with swappable AI CV screening (OpenAI/Gemini via Strategy) and a single consolidated query — `GROUP_CONCAT` + `JOIN` + `AVG`/`COUNT`, no N+1.

Chain of Responsibility for extensible validation (Open/Closed) · cache invalidation driven by domain events · idempotent async jobs · **217 tests / 903 assertions**.

`PHP 8.4` · `Laravel 12` · `MySQL 8` · `Redis` · `Docker`

### 📡 [EventHub — Event Integration Microservice](https://github.com/CristianLopez29/eventhub)

Ingests an imperfect external XML feed and serves a JWT-secured date-range search API. **CQRS with segregated read and write ports** — no god-repository.

Redis cache decorator via Symfony's `decorates:` · idempotent upsert by deterministic UUID v5 · retrying provider client that never throws · `// debt:` markers for deliberate simplifications.

`PHP 8.4` · `Symfony 8` · `Doctrine ORM 3` · `MySQL 8` · `Redis` · `Docker`

## Stack

| | |
|---|---|
| **Architecture** | Hexagonal (Ports & Adapters) · CQRS · DDD · TDD · SOLID · Repository · Saga · Chain of Responsibility |
| **Backend** | PHP 7.4–8.4 · Laravel · Symfony 8 · Yii2 · Doctrine ORM · REST/SOAP APIs |
| **Data** | MySQL 8 · SQL Server · Redis (atomic locks, Lua, cache, queues) · Apache Solr · Elasticsearch |
| **Async** | Redis queues · idempotent jobs · backoff · webhooks |
| **Payments** | Stripe · PayPal · MangoPay · PayComet · Redsys (recurring + webhooks) |
| **Testing / Quality** | PHPUnit · PHPStan levels 5–9 · k6 (stress, 1,000 VUs) · Codecov |
| **DevOps** | Docker · Docker Compose · Traefik · GitHub Actions · GitLab CI/CD · Linux · SSL/Certbot |
| **Security** | OAuth2 · JWT · Laravel Sanctum · SSO (Microsoft Azure AD) · rate limiting · idempotency keys |
| **AI** | Gemini API · OpenAI API — swappable adapters, capped per-call cost |
| **Frontend** | JavaScript / TypeScript · Vue.js / Nuxt.js on full-stack projects |

<details>
<summary><b>Career</b></summary>

<br>

**Vivaticket España** — Senior Backend Engineer · remote · Dec 2025 – present<br>
Backend technical reference in a mid-sized engineering team: architecture decisions, PR reviews and raising the codebase quality bar. Drove the adoption of Hexagonal Architecture in a complex high-load system. Migrated the whole platform from PHP 7.4 to 8.4 with no production downtime; applied PHPStan level 5 across the legacy codebase.

**OncologyPipeline** — Team Lead Backend Engineer · remote · Nov 2024 – Oct 2025<br>
Refactored the core toward Hexagonal, CQRS and DDD (Laravel 11 / PHP 8.3) with the Strangler Fig pattern over legacy Yii2 and Drupal. +40% performance: N+1 resolution, Redis cache and Apache Solr. Introduced PHPStan level 9 + TDD + GitLab CI/CD as the team standard. Unified SSO across heterogeneous environments. Gemini API integration.

**Adventurees** — Full Stack Engineer · remote · Sep 2021 – Oct 2024<br>
Multi-tenant White Label SaaS platforms (fintech, education, crowdfunding): Vue/Nuxt/TypeScript on the frontend, Laravel and Yii2 on the backend, Dockerized environments. REST APIs with OAuth2, SSO with Microsoft Azure AD, and Stripe/PayPal/MangoPay/PayComet gateways with recurring payments and webhooks.

**Indra** · client Orange Telecom — Software Engineer · Jul 2017 – Mar 2020<br>
Led a team of 3-4. Custom PHP CRM for RPA process control, a mass customer-communication platform and GDPR/LOPDGDD tooling.

*Earlier:* Multimedia Team (2012–2017) — web development in native PHP and Classic ASP under MVC.

</details>

<details>
<summary><b>How I work</b></summary>

<br>

- **Root cause over patching.** I find where the failure originates, look at every caller, and fix at the point common to all of them.
- **Ruthless YAGNI.** I delete speculative abstractions and unused dependencies before they take root.
- **Tests against real infrastructure.** Real MySQL and Redis in integration and acceptance, no SQLite fallback.
- **Evidence, not promises.** Load numbers are committed, reproducible k6 artifacts — not screenshots.
- **Everything gated.** Conventional Commits, PRs stacked by theme, and PHPStan + tests + `composer audit` blocking every merge.
- **AI in the workflow.** Claude Code daily; also worked with Cursor, Trae (ByteDance) and Codex. Generated code clears the same gates as everything else.

</details>

---

<sub>🐺 Off the clock: a Siberian Husky named Togo.</sub>

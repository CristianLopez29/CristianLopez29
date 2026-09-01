**Español** · [English](README.en.md)

<h1 align="center">Cristian López Espinosa</h1>

<p align="center"><b>Senior PHP Engineer</b> &nbsp;·&nbsp; Arquitectura Hexagonal &nbsp;·&nbsp; DDD &nbsp;·&nbsp; Alta Concurrencia</p>

<p align="center">
  📍 Cádiz, España — Remoto
  &nbsp;·&nbsp; ✉️ <a href="mailto:cristianlopezespinosa@gmail.com">cristianlopezespinosa@gmail.com</a>
  &nbsp;·&nbsp; 💼 <a href="https://linkedin.com/in/cristian-lopezespinosa/">LinkedIn</a>
</p>

---

Ingeniero backend senior con más de 10 años en PHP. Me especializo en llevar sistemas legacy a arquitecturas hexagonales mantenibles y en resolver problemas de alta concurrencia sin sacrificar la integridad de los datos. En mis dos últimas empresas he sido el referente técnico de backend: decisiones de arquitectura, revisión de PRs e introducción de estándares —PHPStan nivel 9, TDD, CI— que suben el listón de todo el equipo.

🟢 **Abierto a conversaciones sobre roles senior de backend (remoto).**
🗣️ Español nativo · Inglés B2 (objetivo C1 en 2026).

## Lo que aporto

- 🏛️ **Arquitectura** — Hexagonal, CQRS, DDD y TDD aplicados en producción, no en diapositivas. Tres repositorios públicos lo demuestran de punta a punta.
- ⚡ **Alta concurrencia** — integridad de datos garantizada bajo carga: Redis atomic locks, bloqueo pesimista, claves de idempotencia y sagas con compensación. Verificado con k6 hasta 1.000 usuarios virtuales.
- 🧭 **Referente técnico** — revisión de PRs, definición de estándares de calidad y mentoring con el ejemplo en equipos de ingeniería de tamaño medio.
- 💳 **APIs financieras y asíncrono** — Stripe, PayPal, MangoPay, PayComet y Redsys con pagos recurrentes y webhooks; colas Redis con jobs idempotentes y backoff.
- 🤖 **Integraciones IA** — Gemini y OpenAI encapsulados como adaptadores intercambiables (Strategy), en jobs asíncronos y con el coste por llamada acotado.

## Trabajo seleccionado

Tres backends *production-grade*, cada uno construido para demostrar una cosa difícil. Todos comparten: Docker · PHPStan nivel 9 · suites de test contra MySQL y Redis reales (sin mocks de SQLite) · evidencia de carga con k6 versionada en el repo · stack de producción desplegable tras Traefik.

### 🎟️ [Ticketing System — Reservas de alta concurrencia](https://github.com/CristianLopez29/ticketing-system-demo)

1.000 compradores autenticados peleando por 100 asientos → **exactamente 100 ventas, 0 asientos vendidos dos veces, 0 errores 500**. Medido con k6; los artefactos están versionados en el repo, no son capturas.

Redis atomic locks (scripts Lua) · `SELECT … FOR UPDATE` · claves de idempotencia · saga de pago con compensación automática en fallo · circuit breaker · 4 bounded contexts sin imports cruzados.

`PHP 8.4` · `Laravel 12` · `MySQL 8` · `Redis` · `Docker`

### 🧩 [Candidacy Management API — Patrones enterprise + screening con IA](https://github.com/CristianLopez29/manage-applications-and-evaluators)

Dominio de RRHH con screening de CV por IA intercambiable (OpenAI/Gemini vía Strategy) y una única query consolidada —`GROUP_CONCAT` + `JOIN` + `AVG`/`COUNT`, sin N+1.

Chain of Responsibility para validación extensible (Open/Closed) · caché con invalidación por eventos de dominio · jobs asíncronos idempotentes · **217 tests / 903 assertions**.

`PHP 8.4` · `Laravel 12` · `MySQL 8` · `Redis` · `Docker`

### 📡 [EventHub — Microservicio de integración de eventos](https://github.com/CristianLopez29/eventhub)

Ingesta un feed XML externo imperfecto y sirve una API de búsqueda por rango de fechas con JWT. **CQRS con puertos segregados** de lectura y escritura — sin repositorio-dios.

Decorador de caché Redis vía `decorates:` de Symfony · upsert idempotente por UUID v5 determinista · cliente de proveedor con reintentos que nunca lanza excepción · marcadores `// debt:` para las simplificaciones conscientes.

`PHP 8.4` · `Symfony 8` · `Doctrine ORM 3` · `MySQL 8` · `Redis` · `Docker`

## Stack

| | |
|---|---|
| **Arquitectura** | Hexagonal (Ports & Adapters) · CQRS · DDD · TDD · SOLID · Repository · Saga · Chain of Responsibility |
| **Backend** | PHP 7.4–8.4 · Laravel · Symfony 8 · Yii2 · Doctrine ORM · APIs REST/SOAP |
| **Datos** | MySQL 8 · SQL Server · Redis (atomic locks, Lua, caché, colas) · Apache Solr · Elasticsearch |
| **Asíncrono** | Colas Redis · jobs idempotentes · backoff · webhooks |
| **Pagos** | Stripe · PayPal · MangoPay · PayComet · Redsys (recurrentes + webhooks) |
| **Testing / Calidad** | PHPUnit · PHPStan niveles 5–9 · k6 (stress, 1.000 VUs) · Codecov |
| **DevOps** | Docker · Docker Compose · Traefik · GitHub Actions · GitLab CI/CD · Linux · SSL/Certbot |
| **Seguridad** | OAuth2 · JWT · Laravel Sanctum · SSO (Microsoft Azure AD) · rate limiting · idempotency keys |
| **IA** | Gemini API · OpenAI API — adaptadores intercambiables, coste por llamada acotado |
| **Frontend** | JavaScript / TypeScript · Vue.js / Nuxt.js en proyectos full-stack |

<details>
<summary><b>Trayectoria</b></summary>

<br>

**Vivaticket España** — Senior Backend Engineer · remoto · dic 2025 – actualidad<br>
Referente técnico de backend en un equipo de ingeniería de tamaño medio: decisiones de arquitectura, revisión de PRs y elevación del estándar de calidad del codebase. Impulsó la adopción de Arquitectura Hexagonal en un sistema complejo de alta carga. Migración PHP 7.4 → 8.4 de toda la plataforma sin interrumpir producción; PHPStan nivel 5 aplicado a todo el código legacy.

**OncologyPipeline** — Team Lead Backend Engineer · remoto · nov 2024 – oct 2025<br>
Refactor del core hacia Hexagonal, CQRS y DDD (Laravel 11 / PHP 8.3) con Strangler Fig Pattern sobre Yii2 y Drupal legacy. +40% de rendimiento: resolución de N+1, caché Redis y Apache Solr. PHPStan nivel 9 + TDD + GitLab CI/CD introducidos como estándar de equipo. SSO unificado entre entornos heterogéneos. Integración con Gemini API.

**Adventurees** — Full Stack Engineer · remoto · sep 2021 – oct 2024<br>
Plataformas SaaS White Label multi-tenant (fintech, educación, crowdfunding): Vue/Nuxt/TypeScript en frontend, Laravel y Yii2 en backend, entornos Dockerizados. APIs REST con OAuth2, SSO con Microsoft Azure AD y pasarelas Stripe/PayPal/MangoPay/PayComet con pagos recurrentes y webhooks.

**Indra** · cliente Orange Telecom — Software Engineer · jul 2017 – mar 2020<br>
Liderazgo de un equipo de 3-4 personas. CRM a medida en PHP para control de procesos RPA, plataforma de envío masivo de comunicaciones a clientes y herramientas GDPR/LOPDGDD.

*Antes:* Multimedia Team (2012–2017) — desarrollo web en PHP nativo y ASP Clásico bajo MVC.

</details>

<details>
<summary><b>Cómo trabajo</b></summary>

<br>

- **Causa raíz antes que parche.** Localizo dónde se origina el fallo, busco todos los llamadores y arreglo en el punto común a todos ellos.
- **YAGNI sin piedad.** Borro abstracciones especulativas y dependencias sin uso antes de que echen raíces.
- **Tests contra infra real.** MySQL y Redis de verdad en integración y aceptación, sin fallback a SQLite.
- **Evidencia, no promesas.** Los números de carga son artefactos de k6 versionados y regenerables, no capturas de pantalla.
- **Todo con gates.** Conventional Commits, PRs apiladas por tema, y PHPStan + tests + `composer audit` bloqueando cada merge.
- **IA en el flujo.** Claude Code a diario; también he trabajado con Cursor, Trae (ByteDance) y Codex. El código generado pasa los mismos gates que cualquier otro.

</details>

---

<sub>🐺 Fuera de pantalla: un husky siberiano que se llama Togo.</sub>

<div align="center">
  <h1>@NotNull</h1>

  <p>
    <strong>A modern, cloud-ready Q&A platform inspired by Stack Overflow</strong><br/>
    Designed to demonstrate real-world distributed systems, event-driven communication,
    and production-grade architecture using .NET and React with Next.js.
  </p>

  <img src="https://img.shields.io/badge/.NET-9-512BD4?style=for-the-badge&logo=dotnet" />
  <img src="https://img.shields.io/badge/Next.js-App%20Router-000000?style=for-the-badge&logo=nextdotjs" />
  <img src="https://img.shields.io/badge/PostgreSQL-Database-316192?style=for-the-badge&logo=postgresql" />
  <img src="https://img.shields.io/badge/RabbitMQ-Messaging-FF6600?style=for-the-badge&logo=rabbitmq" />
  <img src="https://img.shields.io/badge/Docker-Containers-2496ED?style=for-the-badge&logo=docker" />
  <img src="https://img.shields.io/badge/Keycloak-Auth-2C2C2C?style=for-the-badge&logo=keycloak" />
  <img src="https://img.shields.io/badge/NGINX-Reverse%20Proxy-009639?style=for-the-badge&logo=nginx" />
</div>

<hr/>

<h2>Overview</h2>

<p>
  <strong>@NotNull</strong> is a full-stack, distributed Q&amp;A platform inspired by
  <strong>Stack Overflow</strong>, built from the ground up to showcase how modern backend
  and frontend architectures are designed, deployed, and scaled in real production environments.
</p>

<p>
  The project serves as both a learning reference and a production-grade architectural
  showcase, focusing on modularity, scalability, security, and cloud-native practices.
</p>

<hr/>

<h2>Architecture</h2>

<h3>Microservices</h3>
<ul>
  <li>Independently deployable services</li>
  <li>Clear domain boundaries</li>
  <li>HTTP-based communication combined with asynchronous events</li>
</ul>

<h3>Event-Driven Communication</h3>
<ul>
  <li>WolverineFx used as the internal messaging and workflow engine</li>
  <li>RabbitMQ as the message broker</li>
  <li>Loose coupling, fault tolerance, and horizontal scalability</li>
</ul>

<h3>API Gateway and Reverse Proxy</h3>
<ul>
  <li>YARP used as an internal reverse proxy and API Gateway</li>
  <li>NGINX used as the external HTTPS reverse proxy in production</li>
  <li>Centralized routing, SSL termination, and service isolation</li>
</ul>

<h3>Security and Identity</h3>
<ul>
  <li>Keycloak running in Docker</li>
  <li>OAuth2 and OpenID Connect</li>
  <li>Authentication fully decoupled from business logic</li>
</ul>

<h3>Observability (Development Only)</h3>
<ul>
  <li>.NET Aspire used exclusively in development</li>
  <li>Service discovery, metrics, logs, and traces</li>
  <li>Removed from production to keep the runtime lean and explicit</li>
</ul>

<hr/>

<h2>Technology Stack</h2>

<h3>Backend</h3>
<ul>
  <li>.NET 9</li>
  <li>WolverineFx (Messaging and event-driven workflows)</li>
  <li>RabbitMQ</li>
  <li>PostgreSQL</li>
  <li>YARP (Reverse proxy / API Gateway)</li>
  <li>Docker (Development and production)</li>
</ul>

<h3>Frontend</h3>
<ul>
  <li>React with Next.js (App Router)</li>
  <li>HeroUI</li>
  <li>Tailwind CSS</li>
  <li>Zustand (State management)</li>
</ul>

<h3>Authentication and Security</h3>
<ul>
  <li>Keycloak (Dockerized)</li>
  <li>OAuth2 / OpenID Connect</li>
  <li>JWT-based authentication</li>
</ul>

<hr/>

<h2>Deployment</h2>

<p>
  The application is fully containerized and designed to be cloud-agnostic.
</p>

<h3>Production Environments</h3>
<ul>
  <li>DigitalOcean (Linux server)</li>
  <li>Microsoft Azure</li>
  <li>NGINX as HTTPS reverse proxy</li>
  <li>Docker-based deployment strategy</li>
</ul>

<h3>Development Environment</h3>
<ul>
  <li>Docker Compose for infrastructure</li>
  <li>.NET Aspire for local orchestration and observability</li>
</ul>

<hr/>

<h2>Running Locally</h2>

<pre>
<code>
git clone https://github.com/net0well/notnull.git
docker compose up -d
dotnet run
</code>
</pre>

<hr/>

<h2>Key Features</h2>
<ul>
  <li>Microservices-oriented architecture with clear domain boundaries</li>
  <li>Event-driven communication using WolverineFx and RabbitMQ</li>
  <li>Centralized authentication with Keycloak</li>
  <li>Reverse proxy and API Gateway using YARP</li>
  <li>Production-ready HTTPS setup with NGINX</li>
  <li>Modern React frontend with Next.js App Router</li>
  <li>Containerized deployment for local and cloud environments</li>
</ul>

<hr/>

<h2>Documentation</h2>

<p>
  Detailed documentation covering architecture decisions, messaging patterns,
  security, and deployment strategies is available in the
  <a href="https://github.com/net0well/notnull/wiki">project Wiki</a>.
</p>

<hr/>

<h2>Contributing</h2>

<p>
  Contributions are welcome. Please read the
  <a href="CONTRIBUTING.md">Contributing Guide</a> before submitting pull requests.
</p>

<hr/>

<h2>License</h2>

<p>
  This project is licensed under the MIT License. See the
  <a href="LICENSE">LICENSE</a> file for details.
</p>

<hr/>

<div align="center">
  <p>Built with .NET 9, WolverineFx, RabbitMQ, Next.js, and PostgreSQL</p>
  <p>If you find this project useful, consider giving it a star.</p>
</div>

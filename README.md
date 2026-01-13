<div align="center">
  <h1>@NotNull</h1>
  
  <p>
    <strong>A modern, cloud-ready Q&A platform inspired by Stack Overflow</strong>
  </p>
  <p>
    Designed to demonstrate real-world distributed systems, event-driven communication,
    and production-grade architecture using .NET and React with Next.js.
  </p>

  <p>
    <img src="https://img.shields.io/badge/.NET-9-512BD4?style=for-the-badge&logo=dotnet" alt=".NET 9" />
    <img src="https://img.shields.io/badge/Next.js-App%20Router-000000?style=for-the-badge&logo=nextdotjs" alt="Next.js" />
    <img src="https://img.shields.io/badge/PostgreSQL-Database-316192?style=for-the-badge&logo=postgresql" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/RabbitMQ-Messaging-FF6600?style=for-the-badge&logo=rabbitmq" alt="RabbitMQ" />
    <img src="https://img.shields.io/badge/Docker-Containers-2496ED?style=for-the-badge&logo=docker" alt="Docker" />
    <img src="https://img.shields.io/badge/Keycloak-Auth-2C2C2C?style=for-the-badge&logo=keycloak" alt="Keycloak" />
    <img src="https://img.shields.io/badge/NGINX-Reverse%20Proxy-009639?style=for-the-badge&logo=nginx" alt="NGINX" />
    <img src="https://img.shields.io/badge/Typesense-Search-D93F0B?style=for-the-badge&logo=typesense" alt="Typesense" />
  </p>
</div>

---

## Overview

**@NotNull** is a full-stack, distributed Q&A platform inspired by **Stack Overflow**, built from the ground up to showcase how modern backend and frontend architectures are designed, deployed, and scaled in real production environments.

The project serves as both a learning reference and a production-grade architectural showcase, focusing on modularity, scalability, security, and cloud-native practices.

---

## Architecture

### Microservices
- Independently deployable services
- Clear domain boundaries
- HTTP-based communication combined with asynchronous events

### Event-Driven Communication
- **WolverineFx** used as the internal messaging and workflow engine
- **RabbitMQ** as the message broker
- Loose coupling, fault tolerance, and horizontal scalability

### API Gateway and Reverse Proxy
- **YARP** used as an internal reverse proxy and API Gateway
- **NGINX Proxy Manager** used as the external HTTPS reverse proxy in production
- Centralized routing, SSL termination, and service isolation

### Search Infrastructure
- **Typesense** for fast, typo-tolerant search
- Real-time indexing of questions and answers
- Faceted search and filtering capabilities

### Security and Identity
- **Keycloak** running in Docker
- OAuth2 and OpenID Connect
- Authentication fully decoupled from business logic

### Observability (Development Only)
- **.NET Aspire** used exclusively in development
- Service discovery, metrics, logs, and traces
- Removed from production to keep the runtime lean and explicit

---

## Technology Stack

### Backend
- **.NET 9**
- **WolverineFx** (Messaging and event-driven workflows)
- **RabbitMQ**
- **PostgreSQL**
- **Typesense** (Search engine)
- **YARP** (Reverse proxy / API Gateway)
- **Docker** (Development and production)

### Frontend
- **React** with **Next.js** (App Router)
- **HeroUI**
- **Tailwind CSS**
- **Zustand** (State management)

### Authentication and Security
- **Keycloak** (Dockerized)
- **OAuth2 / OpenID Connect**
- **JWT-based authentication**

### Infrastructure
- **NGINX Proxy Manager** (HTTPS reverse proxy)
- **Docker** and **Docker Compose**
- Cloud-agnostic deployment

---

## Deployment

The application is fully containerized and designed to be cloud-agnostic.

### Production Environments
- **DigitalOcean** (Linux server)
- **Microsoft Azure**
- **NGINX Proxy Manager** as HTTPS reverse proxy
- Docker-based deployment strategy

### Development Environment
- **Docker Compose** for infrastructure
- **.NET Aspire** for local orchestration and observability

---

## Running Locally

```bash
git clone https://github.com/net0well/notnull.git
cd notnull
docker compose up -d
dotnet run
```

---

## Key Features

- **Microservices-oriented architecture** with clear domain boundaries
- **Event-driven communication** using WolverineFx and RabbitMQ
- **Fast, typo-tolerant search** powered by Typesense
- **Centralized authentication** with Keycloak
- **Reverse proxy and API Gateway** using YARP
- **Production-ready HTTPS setup** with NGINX Proxy Manager
- **Modern React frontend** with Next.js App Router
- **Containerized deployment** for local and cloud environments

---

## Documentation

Detailed documentation covering architecture decisions, messaging patterns, security, and deployment strategies is available in the [project Wiki](https://github.com/net0well/notnull/wiki).

---

## Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) before submitting pull requests.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p><strong>Built with .NET 9, WolverineFx, RabbitMQ, Typesense, Next.js, and PostgreSQL</strong></p>
  <p>⭐ If you find this project useful, consider giving it a star!</p>
</div>

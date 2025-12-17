<div align="center">
<h1>🚀 @NotNull</h1>
<p>
  <strong>A modern platform inspired by Stack Overflow</strong><br/>
  Built to demonstrate <em>real-world distributed architectures</em> with the best of <b>.NET</b> and <b>React with Next.js</b>.
</p>
<img src="https://img.shields.io/badge/.NET-9-512BD4?style=for-the-badge&logo=dotnet" />
<img src="https://img.shields.io/badge/Next.js-App%20Router-000000?style=for-the-badge&logo=nextdotjs" />
<img src="https://img.shields.io/badge/PostgreSQL-Database-316192?style=for-the-badge&logo=postgresql" />
<img src="https://img.shields.io/badge/Docker-Containers-2496ED?style=for-the-badge&logo=docker" />
<img src="https://img.shields.io/badge/Keycloak-Auth-2C2C2C?style=for-the-badge&logo=keycloak" />
<br/><br/>
</div>

---

## 📌 Overview

**@NotNull** is a modern full-stack application inspired by **Stack Overflow**, built from scratch with a focus on:

- 🧩 **Microservices architecture**
- 📡 **Event-driven messaging**
- 🔐 **Security and authentication**
- 📈 **Scalability and observability**
- 🏗️ **Architectural best practices**

The project serves as a **practical reference** for building real-world distributed systems, ready for **local execution or cloud deployment**.

---

## 🧠 Architecture

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">

<div style="border:1px solid #e5e7eb; padding:16px; border-radius:8px;">
<h3>🧩 Microservices</h3>
<p>Independent, decoupled, and scalable services.</p>
</div>

<div style="border:1px solid #e5e7eb; padding:16px; border-radius:8px;">
<h3>📨 Event-Driven</h3>
<p>Asynchronous communication based on events.</p>
</div>

<div style="border:1px solid #e5e7eb; padding:16px; border-radius:8px;">
<h3>🔐 Security</h3>
<p>OAuth2 / OpenID Connect with Keycloak.</p>
</div>

<div style="border:1px solid #e5e7eb; padding:16px; border-radius:8px;">
<h3>📊 Observability</h3>
<p>Logs, metrics, and tracing with .NET Aspire.</p>
</div>

</div>

---

## 🛠️ Tech Stack

### 🔧 Backend

- **.NET 9** – Core platform
- **.NET Aspire** – Orchestration and observability
- **WolverineFx** – Messaging and event-driven architecture
- **PostgreSQL** – Relational database
- **Docker** – Local execution and orchestration

---

### 🎨 Frontend

- **Next.js** (App Router)
- **Tailwind CSS** – Modern and responsive styling
- **Zustand** – Simple and efficient state management

---

### 🔐 Authentication & Security

- **Keycloak**
- OAuth2 / OpenID Connect
- Clear separation between authentication and domain logic

---

## 🚀 Running the Project Locally
```bash
# Clone the repository
git clone https://github.com/net0well/notnull.git

# Start the infrastructure
docker compose up -d

# Launch the application with Aspire
dotnet run
```



## 🎯 Key Features

✅ **Microservices-based architecture** with clear domain boundaries  
✅ **Event-driven communication** using WolverineFx  
✅ **OAuth2/OIDC authentication** with Keycloak  
✅ **Built-in observability** with .NET Aspire  
✅ **Modern React frontend** with Next.js App Router  
✅ **Containerized deployment** with Docker  
✅ **Production-ready patterns** and best practices

---

## 📖 Documentation

For detailed documentation on architecture, patterns, and deployment strategies, visit our [Wiki](https://github.com/net0well/notnull/wiki).

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting pull requests.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
<p>Built with ❤️ using .NET 9, Aspire, Next.js, WolverineFx, and PostgreSQL</p>
<p>⭐ Star this repo if you find it useful!</p>
</div>

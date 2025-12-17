<div align="center">

<h1>🚀 @NotNull</h1>

<p>
  <strong>Uma plataforma moderna inspirada no Stack Overflow</strong><br/>
  Construída para demonstrar <em>arquiteturas distribuídas reais</em> com o melhor do ecossistema <b>.NET</b> e <b>React com Next</b>.
</p>

<img src="https://img.shields.io/badge/.NET-9-512BD4?style=for-the-badge&logo=dotnet" />
<img src="https://img.shields.io/badge/Next.js-App%20Router-000000?style=for-the-badge&logo=nextdotjs" />
<img src="https://img.shields.io/badge/PostgreSQL-Database-316192?style=for-the-badge&logo=postgresql" />
<img src="https://img.shields.io/badge/Docker-Containers-2496ED?style=for-the-badge&logo=docker" />
<img src="https://img.shields.io/badge/Keycloak-Auth-2C2C2C?style=for-the-badge&logo=keycloak" />

<br/><br/>

</div>

---

## 📌 Visão Geral

**@NotNull** é uma aplicação full stack moderna, inspirada no **Stack Overflow**, desenvolvida do zero com foco em:

- 🧩 **Microserviços**
- 📡 **Mensageria orientada a eventos**
- 🔐 **Segurança e autenticação**
- 📈 **Escalabilidade e observabilidade**
- 🏗️ **Boas práticas de arquitetura**

O projeto serve como **referência prática** para construção de sistemas distribuídos reais, prontos para **execução local ou deploy em cloud**.

---

## 🧠 Arquitetura

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">

<div style="border:1px solid #e5e7eb; padding:16px; border-radius:8px;">
<h3>🧩 Microserviços</h3>
<p>Serviços independentes, desacoplados e escaláveis.</p>
</div>

<div style="border:1px solid #e5e7eb; padding:16px; border-radius:8px;">
<h3>📨 Event-Driven</h3>
<p>Comunicação assíncrona baseada em eventos.</p>
</div>

<div style="border:1px solid #e5e7eb; padding:16px; border-radius:8px;">
<h3>🔐 Segurança</h3>
<p>OAuth2 / OpenID Connect com Keycloak.</p>
</div>

<div style="border:1px solid #e5e7eb; padding:16px; border-radius:8px;">
<h3>📊 Observabilidade</h3>
<p>Logs, métricas e tracing com .NET Aspire.</p>
</div>

</div>

---

## 🛠️ Tecnologias Utilizadas

### 🔧 Backend

<ul>
  <li><b>.NET 9</b> – Plataforma principal</li>
  <li><b>.NET Aspire</b> – Orquestração e observabilidade</li>
  <li><b>WolverineFx</b> – Mensageria e arquitetura orientada a eventos</li>
  <li><b>PostgreSQL</b> – Banco de dados relacional</li>
  <li><b>Docker</b> – Execução e orquestração local</li>
</ul>

---

### 🎨 Frontend

<ul>
  <li><b>Next.js</b> (App Router)</li>
  <li><b>Tailwind CSS</b> – Estilização moderna e responsiva</li>
  <li><b>Zustand</b> – Gerenciamento de estado simples e eficiente</li>
</ul>

---

### 🔐 Autenticação e Segurança

<ul>
  <li><b>Keycloak</b></li>
  <li>OAuth2 / OpenID Connect</li>
  <li>Separação clara entre autenticação e domínio</li>
</ul>

---

## 🚀 Executando o Projeto Localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/notnull.git

# Suba a infraestrutura
docker compose up -d

# Inicie a aplicação com o Aspire
dotnet run

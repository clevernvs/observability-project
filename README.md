# 🚀 Ambiente de Desenvolvimento Completo com Docker Compose

Este projeto configura um **ambiente de desenvolvimento full-stack** utilizando **Docker Compose**, com monitoramento e tracing integrados.  
Ideal para testar aplicações **Node.js** com **PostgreSQL, Redis, Prometheus, Grafana e Jaeger** de forma local e padronizada.

---

## 🧱 **Arquitetura dos Serviços**

| Serviço | Função | Porta | Imagem |
|----------|--------|--------|--------|
| 🟩 **Node.js (API)** | Aplicação principal | `3000` | node:18-alpine |
| 🟦 **PostgreSQL** | Banco de dados | `5432` | postgres:15 |
| 🟨 **Redis** | Cache / fila | `6379` | redis:7 |
| 🟧 **Prometheus** | Coleta métricas da aplicação | `9090` | prom/prometheus |
| 🟪 **Grafana** | Dashboard de visualização das métricas | `3001` | grafana/grafana |
| 🟫 **Jaeger** | Rastreamento distribuído (tracing) | `16686` | jaegertracing/all-in-one |

---

## 📁 **Estrutura de Pastas**

meu-projeto/
├── src/
│ └── index.js
├── prometheus/
│ └── prometheus.yml
├── docker-compose.yml
├── Dockerfile
└── package.json


---

## ⚙️ **Pré-requisitos**

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/)
- (Opcional) [Git](https://git-scm.com/)

---

## 🚀 **Como rodar o projeto**

1. **Clone este repositório**

```bash
git clone https://github.com/clevernvs/observability-project.git
# ou
git clone git@github.com:clevernvs/observability-project.git

cd observability-project
```

2. **Construa e inicie os containers**

```bash
docker-compose up --build -d
```

3. **Acesse os serviços**

| Serviço              | URL                                              |
| -------------------- | ------------------------------------------------ |
| 🌐 Aplicação Node.js | [http://localhost:3000](http://localhost:3000)   |
| 📊 Prometheus        | [http://localhost:9090](http://localhost:9090)   |
| 📈 Grafana           | [http://localhost:3001](http://localhost:3001)   |
| 🕵️ Jaeger UI         | [http://localhost:16686](http://localhost:16686) |

import express, { Request, Response } from "express";
import client from "prom-client";
// import "dotenv/config";

const app = express();

// Coletar métricas padrão do Prometheus
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

// Criar um contador de requisições HTTP
const counter = new client.Counter({
    name: "http_requests_total",
    help: "Número total de requisições HTTP recebidas",
});

// Rota principal
app.get("/", (req: Request, res: Response) => {
    counter.inc();
    res.send("Olá, Cleverton! 🚀");
});

// Rota de métricas para Prometheus
app.get("/metrics", async (_req: Request, res: Response) => {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
});

// Iniciar servidor
// app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"));

export default app;
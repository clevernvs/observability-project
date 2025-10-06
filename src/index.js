import express from "express";
import client from "prom-client";
import 'dotenv/config';


const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const counter = new client.Counter({
    name: "http_requests_total",
    help: "Número total de requisições HTTP recebidas",
});

app.get("/", (req, res) => {
    counter.inc();
    res.send("Olá, Cleverton! 🚀");
});

app.get("/metrics", async (req, res) => {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
});

app.listen(3000, () => console.log("🚀 Servidor rodando em http://localhost:3000"));

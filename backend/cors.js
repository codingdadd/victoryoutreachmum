import cors from "cors";
import express from "express";

const app = express();

const allowedOrigins = [
  "victoryoutreachmum-zhhb.vercel.app",

  "https://yourdomain.org", // custom domain
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// routes...

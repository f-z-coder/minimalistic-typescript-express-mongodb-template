import dotenv from "dotenv";
dotenv.config();

export const ENV_CONST = {
  MONGODB_CONNECTION_URL: process.env.MONGODB_CONNECTION_URL || "default",
  PORT: Number(process.env.port) || 8080,
  FRONTEND_HOST_URL: process.env.FRONTEND_HOST_URL || "http://localhost:5173",
  BACKEND_HOST_URL: process.env.BACKEND_HOST_URL || "http://localhost:8080",
} as const;

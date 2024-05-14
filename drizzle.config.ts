import { defineConfig } from "drizzle-kit";
import { env } from "@/lib/env";

export default defineConfig({
  schema: "./lib/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.AUTH_DRIZZLE_URL,
  },
  verbose: true,
  strict: true,
});

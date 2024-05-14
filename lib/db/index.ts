import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "@/lib/env";
import * as schema from "@/lib/db/schema";

const sql = neon(env.AUTH_DRIZZLE_URL);
export const db = drizzle(sql, {
  schema,
  logger: true,
});

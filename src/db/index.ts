// src/db/index.ts
import { drizzle } from "drizzle-orm/libsql"

export function createDb(env: Cloudflare.Env) {
  return drizzle({
    connection: {
      url: env.DB_URL,
      authToken: env.DB_TOKEN,
    },
  })
}

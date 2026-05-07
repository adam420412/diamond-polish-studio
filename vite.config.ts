import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deployment target: Vercel (TanStack Start vercel preset).
// Cloudflare plugin disabled — wrangler.jsonc removed and src/server.ts no longer used.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "vercel",
  },
});

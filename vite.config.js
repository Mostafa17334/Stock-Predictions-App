import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.POLYGON_API_KEY": JSON.stringify(env.POLYGON_API_KEY),
      "process.env.OPENAI_API_KEY": JSON.stringify(env.OPENAI_API_KEY),
    },
  };
});

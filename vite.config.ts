import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react-swc";
import remarkGfm from "remark-gfm";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({
        remarkPlugins: [remarkGfm],
      }),
    },
    react(),
  ],
});

import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ["react", "next/dynamic"],
  ignoreWatch: ["**/__tests__/**"],
  banner: {
    js: '"use client"',
  },
});

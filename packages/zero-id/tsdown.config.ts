import { defineConfig } from "tsdown";

export default defineConfig({
  entry: "src/**/*.ts",
  dts: {
    tsgo: true,
  },
  exports: true,
});

/*
tsup.config.ts
 export default defineConfig({
   entry: ['src'],
   publicDir: './public',
   splitting: false,
   sourcemap: true,
   clean: true,
   dts: {
     resolve: true,
     compilerOptions: {
       moduleResolution: 'node',
     },
   },
   format: ['cjs', 'esm'],
   minify: true,
 })
*/

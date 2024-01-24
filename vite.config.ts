/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
// import {  } from "vitest";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    pool: "forks",
  },
});

// jest.config.ts
import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", 
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^next/image$": "<rootDir>/__mocks__/next-image.tsx",
    "^next/router$": "next-router-mock",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  transformIgnorePatterns: [
    "/node_modules/(?!(next)/)"
  ],
};

export default config;

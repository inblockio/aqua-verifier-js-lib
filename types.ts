{
  "name": "aqua-tree-ts",
  "version": "1.0.0",
  "description": "A TypeScript library for managing revision trees",
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc",
    "test": "vitest",
    "lint": "eslint src --ext .ts",
    "format": "prettier --write src/**/*.ts"
  },
  "devDependencies": {
    "@types/node": "^20.11.24",
    "@typescript-eslint/eslint-plugin": "^7.1.1",
    "@typescript-eslint/parser": "^7.1.1",
    "eslint": "^8.57.0",
    "prettier": "^3.2.5",
    "typescript": "^5.3.3",
    "vitest": "^1.3.1"
  }
}

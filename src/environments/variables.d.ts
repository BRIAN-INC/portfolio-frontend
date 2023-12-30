// variables.d.ts

declare module './variables.js' {
  export const ngEnv: string;
}
// variables.js

/** @type {string} */
const ngEnv = process.env.NG_ENV || "production";

export default {
  ngEnv,
};

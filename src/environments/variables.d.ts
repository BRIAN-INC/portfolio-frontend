// variables.d.ts

declare module './variables' {
  const ngEnv: string;
  export default ngEnv;
}

/** @type {string} */
const ngEnv = process.env.NG_ENV || "hola2";

export default {
  ngEnv,
};

// environment.ts
export const environment = {
  production: true,
  env: process.env["NG_ENV"] || 'no se pudo cargar la variable de entorno',
};

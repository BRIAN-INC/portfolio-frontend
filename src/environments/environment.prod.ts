// environment.ts
export const environment = {
  production: true,
  env: 'production',
  GITHUB_CLIENT_ID: '${**process.env.GITHUB_CLIENT_ID**}',
  GITHUB_CLIENT_SECRET: '${**process.env.GITHUB_CLIENT_SECRET**}',
};

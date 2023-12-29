// environment.ts
export const environment = {
  production: false,
  // @ts-ignore
  GITHUB_CLIENT_ID:
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID || 'fallbackClientId',
  // @ts-ignore
  GITHUB_CLIENT_SECRET:
    process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET || 'fallbackClientSecret',
};

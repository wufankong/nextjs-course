import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  // 这里只是满足 NextAuthConfig 的类型要求，真正的 providers 在 auth.ts 中覆盖
  providers: [],
} satisfies NextAuthConfig;
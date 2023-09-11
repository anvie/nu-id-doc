---
sidebar_position: 1
---

# NextAuth

Apabila Anda menggunakan Next.js, Anda dapat menggunakan [NuSidProvider](https://github.com/anvie/nu-id-client-auth-example/blob/main/src/auth_providers/NuSid.ts) untuk mengintegrasikan NU.ID ke dalam aplikasi Anda. NextAuth adalah library yang memungkinkan Anda untuk mengintegrasikan NU.ID ke dalam aplikasi Next.js Anda dengan mudah.

## Usage

Unduh file [NuSidProvider](https://github.com/anvie/nu-id-client-auth-example/blob/main/src/auth_providers/NuSid.ts) dan letakkan di folder `auth_providers` di src root folder aplikasi Anda.

```typescript
import NuSidProvider from "@auth_providers/NuSid";

export const authOptions: NextAuthOptions = {
  ...
  providers: [
    NuSidProvider({
      clientId: env.NUID_CLIENT_ID,
      clientSecret: env.NUID_CLIENT_SECRET,
    }),
  ],
  ...
};

export default NextAuth(authOptions);
```

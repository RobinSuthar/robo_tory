import GithubProvider from "next-auth/providers/github";

export const NEXT_AUTH = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],

  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const NEXT_AUTH = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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

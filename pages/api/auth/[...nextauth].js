import EmailProvider from "next-auth/providers/email";
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // EmailProvider({
        //     server: {
        //         host: process.env.EMAIL_SERVER_HOST,
        //         port: process.env.EMAIL_SERVER_PORT,
        //         auth: {
        //             user: process.env.EMAIL_SERVER_USER,
        //             pass: process.env.EMAIL_SERVER_PASSWORD
        //         }
        //     },
        //     from: process.env.EMAIL_FROM
        // }),

        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    pages: {
        signIn: '/signIn'
    }

}
export default NextAuth(authOptions)
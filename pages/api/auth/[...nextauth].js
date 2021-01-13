import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const { EMAIL_SERVER_HOST, EMAIL_SERVER_PORT, EMAIL_SERVER_USER, EMAIL_SERVER_PASSWORD} = process.env

const options = {
    // Configure one or more authentication providers
    providers: [
        Providers.Email({
            server: {
              host: EMAIL_SERVER_HOST,
              port: EMAIL_SERVER_PORT,
              auth: {
                user: EMAIL_SERVER_USER,
                pass: EMAIL_SERVER_PASSWORD
              }
            },
            from: process.env.EMAIL_FROM
        }),
        // ...add more providers here
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
}
  
export default (req, res) => NextAuth(req, res, options)
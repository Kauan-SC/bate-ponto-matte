import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"

const handler = NextAuth({
  pages: {
    signIn: "/"
  },
  providers: [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      email: { label: "Email", type: "email", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      if(!credentials) {
        return null
      }

      if(
        credentials.email === "teste@gmail.com" &&
        credentials.password === "teste123"
      
      ) {
        return {
          id: "1",
          name: "teste"
        }
      }

      return null
    }
  })
]
})

export { handler as GET, handler as POST }
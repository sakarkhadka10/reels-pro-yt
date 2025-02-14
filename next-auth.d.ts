declare module "next-auth"{
    interface Session{
        user:{
            id: String;
        } & DefaulfSession["user"]
    }
}
import "next-auth"

declare module "next-auth" {
    interface User {
        id: string
        email: string
    }

    interface Session {
        user: User & {
            id: string
        }
    }
}
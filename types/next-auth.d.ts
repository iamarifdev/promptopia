import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  export interface Profile {
    sub?: string;
    name?: string;
    email?: string;
    picture?: string;
    image?: string;
  }
}

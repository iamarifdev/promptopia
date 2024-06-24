export interface Post {
  _id: string;
  prompt: string;
  tag: string;
  creator: {
    _id: string;
    username: string;
    image: string;
    email: string;
  }
}

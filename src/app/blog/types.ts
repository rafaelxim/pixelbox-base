// Defina a interface para os dados do post
export interface PostData {
  title: string;
  content: string;
  author: string;
  coverImage: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createdAt: any; // Use `any` temporariamente para o timestamp do Firestore
  id?: string;
  category: string;
  description: string;
}

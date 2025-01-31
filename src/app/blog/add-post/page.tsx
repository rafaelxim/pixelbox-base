// components/AddPostForm.tsx
import { db } from "@/config";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { PostData } from "../types";

export default function AddPostForm() {
  // Função para lidar com a submissão do formulário
  async function handleSubmit(formData: FormData) {
    "use server"; // Indica que esta função será executada no servidor

    // Extrai os dados do formulário
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const category = formData.get("category") as string;
    const author = formData.get("author") as string;
    const description = formData.get("description") as string;
    const coverImage = formData.get("coverImage") as string;

    // Cria o slug a partir do título
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    // Cria o objeto de dados do post
    const postData: PostData = {
      title,
      content,
      author,
      coverImage,
      slug,
      description,
      category,
      createdAt: serverTimestamp(),
    };

    try {
      // Adiciona o post ao Firestore
      await addDoc(collection(db, "posts"), postData);
      console.log("Post adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar post:", error);
    }
  }

  return (
    <form className="blog-form" action={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="content">Conteúdo:</label>
        <textarea rows={50} id="content" name="content" required />
      </div>
      <div>
        <label htmlFor="description">Categoria:</label>
        <textarea id="description" name="description" required />
      </div>

      <div>
        <label htmlFor="category">Categoria:</label>
        <textarea id="category" name="category" required />
      </div>
      <div>
        <label htmlFor="author">Autor:</label>
        <input type="text" id="author" name="author" required />
      </div>
      <div>
        <label htmlFor="coverImage">Imagem de Capa:</label>
        <input type="text" id="coverImage" name="coverImage" required />
      </div>
      <button type="submit">Adicionar Post</button>
    </form>
  );
}

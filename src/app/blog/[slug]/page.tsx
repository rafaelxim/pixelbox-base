import { db, formatDate } from "@/config";
import { collection, getDocs, query, where } from "@firebase/firestore";
import Image from "next/image";
import { PostData } from "../types";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const q = query(collection(db, "posts"), where("slug", "==", slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return <h1>Post não encontrado...</h1>;
  }

  const postData = querySnapshot.docs[0].data() as PostData;
  const post = { id: querySnapshot.docs[0].id, ...postData };

  return (
    <div>
      <section className="blog-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 order-2 order-lg-1">
              <div className="share-now">
                <a href="#" className="scrol">
                  SHARE
                </a>
                <div className="sociel-icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-10 order-1 order-lg-2">
              <article className="single-blog">
                <a href="#" className="tag">
                  {post.category}
                </a>
                <p className="title">{post.title}</p>
                <ul className="meta">
                  <li>
                    By <a href="about.html">{post.author}</a>
                  </li>
                  <li>
                    <i className="fa fa-clock-o"></i>{" "}
                    {formatDate(post.createdAt)}
                  </li>
                </ul>
                <Image
                  width={870}
                  height={500}
                  src={`/blog-images/blog/${post.coverImage}`}
                  alt="banner"
                />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              <div className="blog-single-presentation">
                <ul>
                  <li>
                    {" "}
                    <a href="#" className="tag">
                      ANTERIOR
                    </a>
                    <a href="#" className="title">
                      I Moved Across the Country and Never Looked Back
                    </a>
                    <i className="fa fa-clock-o"></i>
                    October 19, 2020 - 2 min
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="tag">
                      PRÓXIMO
                    </a>
                    <a href="#" className="title">
                      Every Next Level of Your Life Will Demand a Different
                    </a>
                    <i className="fa fa-clock-o"></i>
                    October 19, 2020 - 2 min
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

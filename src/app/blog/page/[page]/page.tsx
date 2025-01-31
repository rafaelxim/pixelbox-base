import { db, formatDate } from "@/config";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAt,
} from "firebase/firestore";

import Image from "next/image";
import Link from "next/link";
import { PostData } from "../../types";

interface GetPostsParams {
  pageParam: number; // O ID do último post da página anterior
  pageSize?: number; // Número de posts por página
}

async function getPosts({ pageParam = 0, pageSize = 5 }: GetPostsParams) {
  // busca todos os posts
  const postsRef = collection(db, "posts");
  const q = query(postsRef, orderBy("createdAt", "desc"));
  const allPosts = await getDocs(q);

  const docIndex = pageParam * pageSize;
  const startingPost = allPosts.docs[docIndex];
  const paginatedQuery = query(
    postsRef,
    orderBy("createdAt", "desc"),
    startAt(startingPost),
    limit(pageSize)
  );

  const snapshot = await getDocs(paginatedQuery);

  const posts = snapshot.docs.map((doc) => {
    const data = doc.data() as PostData;
    return {
      id: doc.id,
      ...data,
    };
  });

  const lastVisible = snapshot.docs[snapshot.docs.length - 1]; // Último post visível para a próxima página

  return { posts, nextPageParam: lastVisible?.id || null };
}

type Props = {
  params: Promise<{ page: string }>;
};

export default async function Blog({ params }: Props) {
  const { page } = await params;
  const { posts } = await getPosts({ pageParam: parseInt(page) - 1 });

  return (
    <div>
      <section className="featured">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <article className="featured-post">
                <div className="featured-post-content">
                  <div className="featured-post-author">
                    <Image
                      width={80}
                      height={80}
                      src="/blog-images/author.png"
                      alt="author"
                    />
                    <p>
                      By <span>{posts[0].author}</span>
                    </p>
                  </div>
                  <Link
                    href={`/blog/${posts[0].slug}`}
                    className="featured-post-title"
                    target="_self"
                  >
                    {posts[0].title}
                  </Link>
                  <ul className="featured-post-meta">
                    <li>
                      <i className="fa fa-clock-o"></i>{" "}
                      {formatDate(posts[0].createdAt)}
                    </li>
                  </ul>
                </div>
                <div className="featured-post-thumb">
                  <Image
                    width={570}
                    height={400}
                    src={`/blog-images/${posts[0].coverImage}`}
                    alt="feature-post-thumb"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-section-title">
                <h2>Artigos</h2>
                <p>Veja nossos últimos artigos</p>
              </div>

              {posts
                .filter((_, idx) => idx !== 0)
                .map((p) => (
                  <article key={p.id} className="blog-post">
                    <div className="blog-post-thumb">
                      <Image
                        width={300}
                        height={300}
                        src={`/blog-images/${p.coverImage}`}
                        alt="blog-thum"
                      />
                    </div>
                    <div className="blog-post-content">
                      <div className="blog-post-tag">
                        <a href="category.html">Travel</a>
                      </div>
                      <div className="blog-post-title">
                        <Link target="_self" href={`/blog/${p.slug}`}>
                          {p.title}
                        </Link>
                      </div>
                      <div className="blog-post-meta">
                        <ul>
                          <li>
                            By <a href="about.html">{p.author}</a>
                          </li>
                          <li>
                            <i className="fa fa-clock-o"></i>{" "}
                            {formatDate(p.createdAt)}
                          </li>
                        </ul>
                      </div>
                      <p>{p.description}</p>
                      <a href="single-blog.html" className="blog-post-action">
                        leia mais <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </article>
                ))}
              <div className="blog-post-pagination">
                <nav aria-label="Page navigation example" className="nav-bg">
                  <ul className="pagination">
                    {page !== "1" && (
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <i className="fa fa-angle-left"></i>
                        </a>
                      </li>
                    )}

                    <li className="page-item">
                      <a className="page-link" href="#">
                        {page}
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-post-widget">
                <div className="latest-widget-title">
                  <h2>Trending post</h2>
                </div>
                <div className="latest-widget">
                  <div className="latest-widget-thum">
                    <a href="single-blog.html">
                      <Image
                        width={110}
                        height={80}
                        src="/blog-images/blog/blog-thum-8.png"
                        alt="blog-thum"
                      />
                    </a>
                    <div className="icon">
                      <a href="single-blog.html">
                        <Image
                          width={12}
                          height={15}
                          src="/blog-images/blog/icon.svg"
                          alt="icon"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="latest-widget-content">
                    <div className="content-title">
                      <a href="single-blog.html">
                        Five Things You Need to Know to Start Your Day
                      </a>
                    </div>
                    <div className="content-meta">
                      <ul>
                        <li>
                          <i className="fa fa-clock-o"></i>
                          October 19, 2020 - 2 min
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="latest-widget">
                  <div className="latest-widget-thum">
                    <a href="single-blog.html">
                      <Image
                        width={110}
                        height={80}
                        src="/blog-images/blog/blog-thum-9.png"
                        alt="blog-thum"
                      />
                    </a>
                    <div className="icon">
                      <a href="single-blog.html">
                        <Image
                          width={12}
                          height={15}
                          src="/blog-images/blog/icon.svg"
                          alt="icon"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="latest-widget-content">
                    <div className="content-title">
                      <a href="single-blog.html">
                        Five Things You Need to Know to Start Your Day
                      </a>
                    </div>
                    <div className="content-meta">
                      <ul>
                        <li>
                          <i className="fa fa-clock-o"></i>
                          October 19, 2020 - 2 min
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="latest-widget">
                  <div className="latest-widget-thum">
                    <a href="single-blog.html">
                      <Image
                        width={110}
                        height={80}
                        src="/blog-images/blog/blog-thum-10.png"
                        alt="blog-thum"
                      />
                    </a>
                    <div className="icon">
                      <a href="single-blog.html">
                        <Image
                          width={12}
                          height={15}
                          src="/blog-images/blog/icon.svg"
                          alt="icon"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="latest-widget-content">
                    <div className="content-title">
                      <a href="single-blog.html">
                        Five Things You Need to Know to Start Your Day
                      </a>
                    </div>
                    <div className="content-meta">
                      <ul>
                        <li>
                          <i className="fa fa-clock-o"></i>
                          October 19, 2020 - 2 min
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="latest-widget">
                  <div className="latest-widget-thum">
                    <a href="single-blog.html">
                      <Image
                        width={110}
                        height={80}
                        src="/blog-images/blog/blog-thum-11.png"
                        alt="blog-thum"
                      />
                    </a>
                    <div className="icon">
                      <a href="single-blog.html">
                        <Image
                          width={12}
                          height={15}
                          src="/blog-images/blog/icon.svg"
                          alt="icon"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="latest-widget-content">
                    <div className="content-title">
                      <a href="single-blog.html">
                        Five Things You Need to Know to Start Your Day
                      </a>
                    </div>
                    <div className="content-meta">
                      <ul>
                        <li>
                          <i className="fa fa-clock-o"></i>
                          October 19, 2020 - 2 min
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="instagram">
        <a href="#">
          <i className="fa fa-instagram" aria-hidden="true"></i>
          <span>@Mary_Astor</span>
        </a>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="instagram-item">
                <div className="instagram-item-thum">
                  <Image
                    src="/blog-images/blog/case-studies-1.png"
                    alt="image"
                    width={313}
                    height={313}
                  />
                </div>
                <div className="instagram-item-thum">
                  <Image
                    src="/blog-images/blog/case-studies-2.png"
                    alt="image"
                    width={313}
                    height={313}
                  />
                </div>
                <div className="instagram-item-thum">
                  <Image
                    src="/blog-images/blog/case-studies-3.png"
                    alt="image"
                    width={313}
                    height={313}
                  />
                </div>
                <div className="instagram-item-thum">
                  <Image
                    src="/blog-images/blog/case-studies-4.png"
                    alt="image"
                    width={313}
                    height={313}
                  />
                </div>
                <div className="instagram-item-thum">
                  <Image
                    src="/blog-images/blog/case-studies-5.png"
                    alt="image"
                    width={313}
                    height={313}
                  />
                </div>
                <div className="instagram-item-thum">
                  <Image
                    src="/blog-images/blog/case-studies-6.png"
                    alt="image"
                    width={313}
                    height={313}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";

const Blog = () => {
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
                      By <span>Mary Astor</span>
                    </p>
                  </div>
                  <a href="single-blog.html" className="featured-post-title">
                    Every Next Level of Your Life Will Demand
                  </a>
                  <ul className="featured-post-meta">
                    <li>
                      <i className="fa fa-clock-o"></i>
                      October 19, 2020 - 3 min read
                    </li>
                  </ul>
                </div>
                <div className="featured-post-thumb">
                  <Image
                    width={570}
                    height={400}
                    src="/blog-images/featured-post.jpg"
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
                <h2>Articles</h2>
                <p>View the latest news on Blogger</p>
              </div>
              <article className="blog-post">
                <div className="blog-post-thumb">
                  <Image
                    width={300}
                    height={300}
                    src="/blog-images/blog/blog-thum-1.png"
                    alt="blog-thum"
                  />
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-tag">
                    <a href="category.html">Travel</a>
                  </div>
                  <div className="blog-post-title">
                    <a href="single-blog.html">
                      Five Things You Need to Know to Start Your Day
                    </a>
                  </div>
                  <div className="blog-post-meta">
                    <ul>
                      <li>
                        By <a href="about.html">Mary Astor</a>
                      </li>
                      <li>
                        <i className="fa fa-clock-o"></i>
                        October 19, 2020 - 2 min
                      </li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                  <a href="single-blog.html" className="blog-post-action">
                    read more <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-thumb">
                  <a href="single-blog.html">
                    <Image
                      width={300}
                      height={300}
                      src="/blog-images/blog/blog-thum-2.png"
                      alt="blog-thum"
                    />
                  </a>
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-tag">
                    <a href="category.html">Travel</a>
                  </div>
                  <div className="blog-post-title">
                    <a href="single-blog.html">
                      Five Things You Need to Know to Start Your Day
                    </a>
                  </div>
                  <div className="blog-post-meta">
                    <ul>
                      <li>
                        By <a href="about.html">Mary Astor</a>
                      </li>
                      <li>
                        <i className="fa fa-clock-o"></i>
                        October 19, 2020 - 2 min
                      </li>
                    </ul>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                  <a href="single-blog.html" className="blog-post-action">
                    read more <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-thumb">
                  <a href="single-blog.html">
                    <Image
                      width={300}
                      height={300}
                      src="/blog-images/blog/blog-thum-3.png"
                      alt="blog-thum"
                    />
                  </a>
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-tag">
                    <a href="category.html">Travel</a>
                  </div>
                  <div className="blog-post-title">
                    <a href="single-blog.html">
                      Five Things You Need to Know to Start Your Day
                    </a>
                  </div>
                  <div className="blog-post-meta">
                    <ul>
                      <li>
                        By <a href="about.html">Mary Astor</a>
                      </li>
                      <li>
                        <i className="fa fa-clock-o"></i>
                        October 19, 2020 - 2 min
                      </li>
                    </ul>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                  <a href="single-blog.html" className="blog-post-action">
                    read more <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-thumb">
                  <a href="single-blog.html">
                    <Image
                      width={300}
                      height={300}
                      src="/blog-images/blog/blog-thum-4.png"
                      alt="blog-thum"
                    />
                  </a>
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-tag">
                    <a href="category.html">Travel</a>
                  </div>
                  <div className="blog-post-title">
                    <a href="single-blog.html">
                      Five Things You Need to Know to Start Your Day
                    </a>
                  </div>
                  <div className="blog-post-meta">
                    <ul>
                      <li>
                        By <a href="about.html">Mary Astor</a>
                      </li>
                      <li>
                        <i className="fa fa-clock-o"></i>
                        October 19, 2020 - 2 min
                      </li>
                    </ul>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                  <a href="single-blog.html" className="blog-post-action">
                    read more <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-thumb">
                  <a href="single-blog.html">
                    <Image
                      width={300}
                      height={300}
                      src="/blog-images/blog/blog-thum-5.png"
                      alt="blog-thum"
                    />
                  </a>
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-tag">
                    <a href="category.html">Travel</a>
                  </div>
                  <div className="blog-post-title">
                    <a href="single-blog.html">
                      Five Things You Need to Know to Start Your Day
                    </a>
                  </div>
                  <div className="blog-post-meta">
                    <ul>
                      <li>
                        By <a href="about.html">Mary Astor</a>
                      </li>
                      <li>
                        <i className="fa fa-clock-o"></i>
                        October 19, 2020 - 2 min
                      </li>
                    </ul>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                  <a href="single-blog.html" className="blog-post-action">
                    read more <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-thumb">
                  <a href="single-blog.html">
                    <Image
                      width={300}
                      height={300}
                      src="/blog-images/blog/blog-thum-6.png"
                      alt="blog-thum"
                    />
                  </a>
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-tag">
                    <a href="category.html">Travel</a>
                  </div>
                  <div className="blog-post-title">
                    <a href="single-blog.html">
                      Five Things You Need to Know to Start Your Day
                    </a>
                  </div>
                  <div className="blog-post-meta">
                    <ul>
                      <li>
                        By <a href="about.html">Mary Astor</a>
                      </li>
                      <li>
                        <i className="fa fa-clock-o"></i>
                        October 19, 2020 - 2 min
                      </li>
                    </ul>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                  <a href="single-blog.html" className="blog-post-action">
                    read more <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </article>
              <article className="blog-post">
                <div className="blog-post-thumb">
                  <a href="single-blog.html">
                    <Image
                      width={300}
                      height={300}
                      src="/blog-images/blog/blog-thum-7.png"
                      alt="blog-thum"
                    />
                  </a>
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-tag">
                    <a href="category.html">Travel</a>
                  </div>
                  <div className="blog-post-title">
                    <a href="single-blog.html">
                      Five Things You Need to Know to Start Your Day
                    </a>
                  </div>
                  <div className="blog-post-meta">
                    <ul>
                      <li>
                        By <a href="about.html">Mary Astor</a>
                      </li>
                      <li>
                        <i className="fa fa-clock-o"></i>
                        October 19, 2020 - 2 min
                      </li>
                    </ul>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy.
                  </p>
                  <a href="single-blog.html" className="blog-post-action">
                    read more <i className="fa fa-angle-right"></i>
                  </a>
                </div>
              </article>
              <div className="blog-post-pagination">
                <nav aria-label="Page navigation example" className="nav-bg">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
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
};

export default Blog;

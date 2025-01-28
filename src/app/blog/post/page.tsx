import Image from "next/image";

const Post = () => {
  return (
    <div>
      <section className="blog-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 order-2 order-lg-1">
              <div className="share-now">
                <a href="#" className="scrol">
                  Share
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
                  Travel
                </a>
                <p className="title">
                  Five Things You Need to Know to Start Your Day
                </p>
                <ul className="meta">
                  <li>
                    By <a href="about.html">Mary Astor</a>
                  </li>
                  <li>
                    <i className="fa fa-clock-o"></i>
                    October 19, 2020 - 2 min
                  </li>
                </ul>
                <Image
                  width={870}
                  height={500}
                  src="/blog-images/blog/blog-single.png"
                  alt="banner"
                />

                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos accusam et justo
                  duo dolores ea rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet.
                  <br />
                  <br />
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet. <br />
                  <br />
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet.
                  <br />
                  <br />
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet.
                </p>
                <h3>Make better business</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos accusam et justo
                  duo dolores ea rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet.
                  <br />
                  <br />
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet.
                </p>
                <blockquote>
                  <p>
                    To get up every morning with determination if going to go to
                    bed with satisfaction.
                  </p>
                </blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos accusam et justo
                  duo dolores ea rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet.
                  <br />
                  <br />
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet.
                </p>
                <div className="single-blog-banner">
                  <div className="banner">
                    <Image
                      width={340}
                      height={340}
                      src="/blog-images/blog/single-blog.png"
                      alt="banner"
                    />
                  </div>
                  <div className="banner">
                    <Image
                      width={340}
                      height={340}
                      src="/blog-images/blog/single-blog-2.png"
                      alt="banner"
                    />
                  </div>
                </div>
                <h3>The Dreamy Factors</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos accusam et justo
                  duo dolores ea rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet.
                  <br />
                  <br />
                  consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                  invidunt ut labore et dolore magna aliquyam erat, sed diam
                  voluptua. At vero eos et accusam et justo duo dolores ea
                  rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  Lorem ipsum dolor sit amet.
                </p>
              </article>
              <div className="blog-single-presentation">
                <ul>
                  <li>
                    {" "}
                    <a href="#" className="tag">
                      PREVIOUS
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
                      Next
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
};

export default Post;

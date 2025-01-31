import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <nav className="main-nav navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <Image
                className="logo-main"
                src="/blog-images/blog-logo.png"
                alt="logo"
                width={116}
                height={22}
              />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#mainNav"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="collapse navbar-collapse nav-list" id="mainNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/blog/page/1">
                    Blog{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/criacao-de-sites">
                    Criação de Sites{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/landing-page">
                    Criação de Landing Pages
                  </Link>
                </li>
              </ul>
              <ul className="main-nav-social">
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
              </ul>
            </div>
          </div>
        </nav>
        {children}
        <section className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 mx-auto text-center">
                <div className="footer-logo">
                  <Image
                    width={116}
                    height={22}
                    src="/blog-images/logo.svg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="footer-nav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">
                        Home{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="sociale-icon">
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
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="copy-right">
                  <p>
                    © Copyright <span id="copyrightYear"></span> - All Rights
                    Reserved by{" "}
                    <a href="https://staticmania.com/" target="_blank">
                      StaticMania
                    </a>{" "}
                    Distributed By{" "}
                    <a href="https://themewagon.com/" target="blank">
                      ThemeWagon
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Script src="/vendor/jQuery/jquery.min.js" strategy="beforeInteractive" />
      <Script
        src="/vendor/bootstrap/bootstrap.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/vendor/slick/slick.min.js" strategy="beforeInteractive" />
      <Script src="/vendor/script.js" />
    </>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer-primary">
        <div className="footer-primary-inner container">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://x.ro" title="Information">
                  Information
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Contact us">
                  Contact us
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Track my order">
                  Track my order
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Shipping">
                  Shipping
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Free returns*">
                  Free returns*
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="My Account">
                  My Account
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title="Services">
                  Services
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Ship to store">
                  Ship to store
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Gift card">
                  Gift card
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Online only">
                  Online only
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Tips and tricks">
                  Tips and tricks
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Home">
                  Home
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title="Loyalty programs">
                  Loyalty programs
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Sign up to the simons">
                  Sign up to the simons
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="My account">
                  My account
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Conditions">
                  Conditions
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Faq">
                  Faq
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="https://x.ro" title="Careers">
                  Careers
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="About us">
                  About us
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Our story">
                  Our story
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Art and culture">
                  Art and culture
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Our private labels">
                  Our private labels
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Stores">
                  Stores
                </a>
              </li>
            </ul>
          </nav>
          <section className="footer-contact">
            <h1>
              Thread Affair <span>Milano</span>
            </h1>

            <p>
              Largo Augusto 3, Milano, 20122, Milano, IT
              {/* display block pe ancore, no br */}
              <a href="tel:+0039 02 760 003 66" title="Call us">
                Tel: 0039 02 760 003 66
              </a>
              {/* use a:nth-of-type(1) pt ancore */}
              <a href="mailto:office@thread-affair.com" title="Email us">
                office@thread-affair.com
              </a>
            </p>
          </section>

          <section className="footer-support">
            <ul>
              <li>
                <a href="https://x.ro" title="Support">
                  <i class="fa-solid fa-square-phone"></i>support
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Chat">
                  <i class="fa-solid fa-message"></i>chat
                </a>
              </li>

              <li>
                <a href="https://x.ro" title="Email">
                  <i class="fa-solid fa-envelope"></i>email
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className="footer-secondary text-center mt-4">
        <p>©2020 THREAD AFFAIR. All Rights Reserved.</p>

        <p>
          Designed by
          <img
            title=""
            data-test=""
            className="ms-2"
            src="/images/pixellab_logo.jpg"
            alt="Pixellab"
          ></img>
        </p>
      </section>
    </footer>
  );
}

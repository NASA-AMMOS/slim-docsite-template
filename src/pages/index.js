import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src="img/product-screenshot.png" alt="Product Screenshot" className={styles.screenshot} />
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/download">
            Download Now
          </Link>
          <a href="mailto:contact@yourdomain.com" className="button button--link button--lg">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

function CustomerLogos() {
  return (
    <section className={styles.customerLogos}>
      <div className="container">
        <h2>Trusted by</h2>
        {/* Add customer logos here */}
        <div className={styles.logos}>
          <img src="img/customer1-logo.png" alt="Customer 1" />
          <img src="img/customer2-logo.png" alt="Customer 2" />
          <img src="img/customer3-logo.png" alt="Customer 3" />
          {/* Add more logos as needed */}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2>What our customers say</h2>
        <div className={styles.quotes}>
          <blockquote>
            <p>"This product is amazing!"</p>
            <cite>- Happy Customer</cite>
          </blockquote>
          <blockquote>
            <p>"It has transformed the way we work."</p>
            <cite>- Satisfied Client</cite>
          </blockquote>
          <blockquote>
            <p>"Incredible support and features."</p>
            <cite>- Loyal User</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function ProductVideo() {
  return (
    <section className={styles.productVideo}>
      <div className="container">
        <h2>See it in action</h2>
        <div className={styles.videoWrapper}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/your-video-id" 
            title="Product Video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <h2>Our Sponsors</h2>
        {/* Add sponsor logos here */}
        <div className={styles.logos}>
          <img src="img/sponsor1-logo.png" alt="Sponsor 1" />
          <img src="img/sponsor2-logo.png" alt="Sponsor 2" />
          {/* Add more logos as needed */}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Product tag line - one sentence description">
      <HomepageHeader />
      <main>
        <CustomerLogos />
        <Testimonials />
        <ProductVideo />
        <HomepageFeatures />
        <Sponsors />
      </main>
    </Layout>
  );
}

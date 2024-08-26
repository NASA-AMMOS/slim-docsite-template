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
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            ✅ Get Started
          </Link>
          <Link className="button button--secondary button--lg" to="/download">
            ⬇️ Download Now
          </Link>
          <Link className="button button--secondary button--lg" to="/contact">
            📪 Contact
          </Link>
        </div>
        <div className={styles.screenshotContainer}>
          <img
            src="https://picsum.photos/600/400?random=1"
            alt="Product Screenshot"
            className={styles.screenshot}
          />
        </div>
      </div>
    </header>
  );
}

function CustomerLogos() {
  return (
    <section className={styles.customerLogos}>
      <div className="container">
        <h2 className="sectionTitle">(Optional) Used By</h2>
        <div className={styles.logos}>
          <img src="https://picsum.photos/200?random=1" alt="Customer 1" />
          <img src="https://picsum.photos/200?random=2" alt="Customer 2" />
          <img src="https://picsum.photos/200?random=3" alt="Customer 3" />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className="sectionTitle">(Optional) What People Say</h2>
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
        <h2 className="sectionTitle">See It in Action</h2>
        <div className={styles.videoWrapper}>
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/your-video-id"
            title="Product Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <div className="container">
        <h2 className="sectionTitle">Get Started</h2>
        <div className={styles.getStartedContent}>
          <div>
            <h3>For Mission Planners</h3>
            <Link to="/docs/mission-planners-guide" className={styles.link}>
              Read the Mission Planners Guide
            </Link>
          </div>
          <div>
            <h3>For Developers</h3>
            <p>Review the license and start your quick installation:</p>
            <Link to="/docs/developers-guide" className={styles.link}>
              Quick Start Installation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearnMore() {
  return (
    <section className={styles.learnMore}>
      <div className="container">
        <h2 className="sectionTitle">Learn More</h2>
        <ul className={styles.learnMoreList}>
          <li>
            <Link to="https://slack.yourdomain.com" className={styles.link}>
              Team Communication (Slack)
            </Link>
          </li>
          <li>
            <Link to="https://github.com/your-org/your-repo/discussions" className={styles.link}>
              Discussion Thread (GitHub)
            </Link>
          </li>
          <li>
            <Link to="/blog" className={styles.link}>
              News and Updates
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <h2 className="sectionTitle">Sponsorship</h2>
        <div className={styles.logos}>
          <img src="https://picsum.photos/200?random=4" alt="Sponsor 1" />
          <img src="https://picsum.photos/200?random=5" alt="Sponsor 2" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`Welcome to ${siteConfig.title}`} description="Product tag line - one sentence description">
      <HomepageHeader />
      <main>
        <CustomerLogos />
        <Testimonials />
        <ProductVideo />
        <HomepageFeatures />
        <GetStarted />
        <LearnMore />
        <Sponsors />
      </main>
    </Layout>
  );
}

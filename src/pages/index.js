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
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className={styles.heroTitle}>
              [PROJECT_NAME]
            </Heading>
            <p className={styles.heroSubtitle}>[PROJECT_DESCRIPTION]</p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs">
                🚀 Get Started
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/user/installation">
                📥 Install Now
              </Link>
              <Link className="button button--secondary button--lg" to="/docs/contributing">
                🤝 Contribute
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img
              src="[HERO_IMAGE_URL]"
              alt="[PROJECT_NAME] Logo"
              className={styles.logoImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function ProjectHighlight() {
  return (
    <section className={styles.missionHighlight}>
      <div className="container">
        <div className={styles.highlightContainer}>
          <div className={styles.highlightContent}>
            <Heading as="h2" className={styles.highlightTitle}>
              [HIGHLIGHT_TITLE]
            </Heading>
            <p className={styles.highlightText}>
              [HIGHLIGHT_DESCRIPTION]
            </p>
            <Link className="button button--primary" to="/docs">
              Learn How It Works
            </Link>
          </div>
          <div className={styles.highlightStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>[STAT_1_NUMBER]</span>
              <span className={styles.statLabel}>[STAT_1_LABEL]</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>[STAT_2_NUMBER]</span>
              <span className={styles.statLabel}>[STAT_2_LABEL]</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>[STAT_3_NUMBER]</span>
              <span className={styles.statLabel}>[STAT_3_LABEL]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function GetStarted() {
  return (
    <section className={styles.getStarted}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Get Started with [PROJECT_NAME]
        </Heading>
        <div className={styles.getStartedGrid}>
          <div className={styles.getStartedCard}>
            <div className={styles.cardIcon}>📋</div>
            <Heading as="h3" className={styles.cardTitle}>For Users</Heading>
            <p className={styles.cardDescription}>
              Learn how to install, configure and use [PROJECT_NAME] for your needs.
            </p>
            <Link to="/docs/user" className={styles.cardLink}>
              User Guide <span className={styles.arrowIcon}>→</span>
            </Link>
          </div>
          <div className={styles.getStartedCard}>
            <div className={styles.cardIcon}>⚙️</div>
            <Heading as="h3" className={styles.cardTitle}>For Developers</Heading>
            <p className={styles.cardDescription}>
              Explore the API, create plugins, and customize [PROJECT_NAME] for specific requirements.
            </p>
            <Link to="/docs/developer" className={styles.cardLink}>
              Developer Guide <span className={styles.arrowIcon}>→</span>
            </Link>
          </div>
          <div className={styles.getStartedCard}>
            <div className={styles.cardIcon}>🧪</div>
            <Heading as="h3" className={styles.cardTitle}>Testing & Examples</Heading>
            <p className={styles.cardDescription}>
              Learn about testing procedures and explore examples to get started quickly.
            </p>
            <Link to="/docs/developer/testing" className={styles.cardLink}>
              Testing Guide <span className={styles.arrowIcon}>→</span>
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
        <Heading as="h2" className={styles.sectionTitle}>
          Learn More About [PROJECT_NAME]
        </Heading>
        <div className={styles.learnMoreContent}>
          <div className={styles.learnMoreLinks}>
            <div className={styles.linkGroup}>
              <Heading as="h3" className={styles.linkGroupTitle}>Resources</Heading>
              <ul className={styles.linkList}>
                <li>
                  <Link to="/docs/faqs" className={styles.link}>
                    <span className={styles.linkIcon}>❓</span> Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link to="/docs/developer/api" className={styles.link}>
                    <span className={styles.linkIcon}>📘</span> API Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className={styles.link}>
                    <span className={styles.linkIcon}>📰</span> News
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.linkGroup}>
              <Heading as="h3" className={styles.linkGroupTitle}>Community</Heading>
              <ul className={styles.linkList}>
                <li>
                  <Link to="[GITHUB_URL]/discussions" className={styles.link}>
                    <span className={styles.linkIcon}>💬</span> Discussion Thread (GitHub)
                  </Link>
                </li>
                <li>
                  <Link to="[COMMUNITY_CHAT_URL]" className={styles.link}>
                    <span className={styles.linkIcon}>🔗</span> Team Communication
                  </Link>
                </li>
                <li>
                  <Link to="/docs/contributing" className={styles.link}>
                    <span className={styles.linkIcon}>🤝</span> Contribution Guide
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.callToAction}>
            <p>Ready to get started with [PROJECT_NAME]?</p>
            <Link to="/docs" className="button button--primary button--lg">
              Get Started Now
            </Link>
          </div>
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
      description="[PROJECT_DESCRIPTION]">
      <HomepageHeader />
      <main>
        <ProjectHighlight />
        <HomepageFeatures />
        <GetStarted />
        <LearnMore />
      </main>
    </Layout>
  );
}

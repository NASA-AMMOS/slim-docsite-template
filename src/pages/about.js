import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <h2 className="sectionTitle">Team Members</h2>
        <p className={styles.sectionSubtitle}>Meet the core team behind [PROJECT_NAME].</p>
        <div className={styles.teamMembers}>
          [TEAM_MEMBERS]
        </div>
      </div>
    </section>
  );
}

function ContributorsSection() {
  return (
    <section className={styles.contributorsSection}>
      <div className="container">
        <h2 className="sectionTitle">Contributors</h2>
        <p className={styles.sectionSubtitle}>Thank you to everyone who has contributed to [PROJECT_NAME] through code, documentation, and feedback.</p>
        <div className={styles.contributors}>
          [GIT_CONTRIBUTORS]
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <h2 className="sectionTitle">Get in Touch</h2>
        <p className={styles.sectionSubtitle}>Have questions or want to get involved? Here's how to reach us.</p>
        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <h3>Community</h3>
            <ul className={styles.contactLinks}>
              <li>
                <a href="[GITHUB_URL]">GitHub Repository</a>
              </li>
              <li>
                <a href="[GITHUB_URL]/issues">Report Issues</a>
              </li>
              <li>
                <a href="[GITHUB_URL]/discussions">Discussions</a>
              </li>
            </ul>
          </div>
          <div className={styles.contactCard}>
            <h3>Support</h3>
            <ul className={styles.contactLinks}>
              <li>
                <a href="/docs">Documentation</a>
              </li>
              <li>
                <a href="/docs/faqs">FAQ</a>
              </li>
              <li>
                <a href="mailto:[CONTACT_EMAIL]">Email Support</a>
              </li>
            </ul>
          </div>
          <div className={styles.contactCard}>
            <h3>Connect</h3>
            <ul className={styles.contactLinks}>
              <li>
                <a href="[SLACK_URL]">Slack Community</a>
              </li>
              <li>
                <a href="[TWITTER_URL]">Twitter</a>
              </li>
              <li>
                <a href="[MAILING_LIST_URL]">Mailing List</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <Layout
      title="About Us"
      description="Learn more about our team, contributors, and how to stay connected.">
      <main className={styles.mainContent}>
        <TeamSection />
        <ContributorsSection />
        <ContactSection />
      </main>
    </Layout>
  );
}

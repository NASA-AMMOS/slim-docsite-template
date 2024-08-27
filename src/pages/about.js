import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

function TeamSection() {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <h2 className="sectionTitle">Our Team</h2>
        <p className={styles.sectionSubtitle}>Meet the team that makes everything possible.</p>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <img src="/img/200x200.png" alt="Team Member 1" className={styles.teamMemberImage} />
            <h3>Team Member 1</h3>
            <p>Role or position</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </div>
    </section>
  );
}

function ContributorsSection() {
  return (
    <section className={styles.contributorsSection}>
      <div className="container">
        <h2 className="sectionTitle">Additional Contributors</h2>
        <p className={styles.sectionSubtitle}>These people have helped make this project possible.</p>
        <div className={styles.contributors}>
          <div className={styles.contributor}>
            <img src="/img/200x200.png" alt="Contributor 1" className={styles.contributorImage} />
            <h3>Contributor 1</h3>
            <p>Role or contribution</p>
          </div>
          {/* Add more contributors as needed */}
        </div>
      </div>
    </section>
  );
}

function CommunicationSection() {
  return (
    <section className={styles.communicationSection}>
      <div className="container">
        <h2 className="sectionTitle">Stay Connected</h2>
        <p className={styles.sectionSubtitle}>Join our community and stay updated.</p>
        <ul className={styles.communicationLinks}>
          <li>
            <a href="https://slack.yourdomain.com">Slack</a>
          </li>
          <li>
            <a href="https://github.com/your-org/your-repo">GitHub</a>
          </li>
          <li>
            <a href="https://github.com/your-org/your-repo/issues">Issue Tracker</a>
          </li>
          <li>
            <a href="/docs/intro">Documentation</a>
          </li>
          <li>
            <a href="https://twitter.com/yourhandle">Twitter</a>
          </li>
          <li>
            <a href="mailto:contact@yourdomain.com">Mailing List</a>
          </li>
        </ul>
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
        <CommunicationSection />
      </main>
    </Layout>
  );
}

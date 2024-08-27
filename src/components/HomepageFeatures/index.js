import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Feature 1',
    Svg: () => <img src="/img/200x200.png" alt="Feature 1" />, // Placeholder image
    description: (
      <>
        Description for Feature 1. Edit this text to describe the feature in detail.
      </>
    ),
  },
  {
    title: 'Feature 2',
    Svg: () => <img src="/img/200x200.png" alt="Feature 2" />, // Placeholder image
    description: (
      <>
        Description for Feature 2. Edit this text to describe the feature in detail.
      </>
    ),
  },
  {
    title: 'Feature 3',
    Svg: () => <img src="/img/200x200.png" alt="Feature 3" />, // Placeholder image
    description: (
      <>
        Description for Feature 3. Edit this text to describe the feature in detail.
      </>
    ),
  },
  {
    title: 'Feature 4',
    Svg: () => <img src="/img/200x200.png" alt="Feature 4" />, // Placeholder image
    description: (
      <>
        Description for Feature 4. Edit this text to describe the feature in detail.
      </>
    ),
  },
  {
    title: 'Feature 5',
    Svg: () => <img src="/img/200x200.png" alt="Feature 5" />, // Placeholder image
    description: (
      <>
        Description for Feature 5. Edit this text to describe the feature in detail.
      </>
    ),
  },
  {
    title: 'Feature 6',
    Svg: () => <img src="/img/200x200.png" alt="Feature 6" />, // Placeholder image
    description: (
      <>
        Description for Feature 6. Edit this text to describe the feature in detail.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={styles.featureContent}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionTitleContainer}>
          <h2 className="sectionTitle">Features</h2>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

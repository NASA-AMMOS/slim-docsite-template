import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '[FEATURE_1_TITLE]',
    Svg: () => <img src="/img/200x200.png" alt="[FEATURE_1_TITLE]" />,
    description: (
      <>
        [FEATURE_1_DESCRIPTION]
      </>
    ),
  },
  {
    title: '[FEATURE_2_TITLE]',
    Svg: () => <img src="/img/200x200.png" alt="[FEATURE_2_TITLE]" />,
    description: (
      <>
        [FEATURE_2_DESCRIPTION]
      </>
    ),
  },
  {
    title: '[FEATURE_3_TITLE]',
    Svg: () => <img src="/img/200x200.png" alt="[FEATURE_3_TITLE]" />,
    description: (
      <>
        [FEATURE_3_DESCRIPTION]
      </>
    ),
  },
  {
    title: '[FEATURE_4_TITLE]',
    Svg: () => <img src="/img/200x200.png" alt="[FEATURE_4_TITLE]" />,
    description: (
      <>
        [FEATURE_4_DESCRIPTION]
      </>
    ),
  },
  {
    title: '[FEATURE_5_TITLE]',
    Svg: () => <img src="/img/200x200.png" alt="[FEATURE_5_TITLE]" />,
    description: (
      <>
        [FEATURE_5_DESCRIPTION]
      </>
    ),
  },
  {
    title: '[FEATURE_6_TITLE]',
    Svg: () => <img src="/img/200x200.png" alt="[FEATURE_6_TITLE]" />,
    description: (
      <>
        [FEATURE_6_DESCRIPTION]
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
          <h2 className={styles.sectionTitle}>Features</h2>
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

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Seamless Integration',
    Svg: () => <img src="/img/200x200.svg" alt="Seamless Integration" />, // Placeholder image
    description: (
      <>
        Our product integrates effortlessly with your existing systems, ensuring a smooth and hassle-free setup.
      </>
    ),
  },
  {
    title: 'High Performance',
    Svg: () => <img src="/img/200x200.svg" alt="High Performance" />, // Placeholder image
    description: (
      <>
        Experience lightning-fast performance and reliable uptime, so your business can keep moving at full speed.
      </>
    ),
  },
  {
    title: 'Customizable',
    Svg: () => <img src="/img/200x200.svg" alt="Customizable" />, // Placeholder image
    description: (
      <>
        Tailor the product to your exact needs with our flexible customization options, empowering you to create the perfect solution.
      </>
    ),
  },
  {
    title: 'Robust Security',
    Svg: () => <img src="/img/200x200.svg" alt="Robust Security" />, // Placeholder image
    description: (
      <>
        Protect your data with our industry-leading security features, ensuring your information remains safe and secure.
      </>
    ),
  },
  {
    title: 'User-Friendly Interface',
    Svg: () => <img src="/img/200x200.svg" alt="User-Friendly Interface" />, // Placeholder image
    description: (
      <>
        Enjoy a simple, intuitive interface designed for users of all skill levels, making it easy to get started right away.
      </>
    ),
  },
  {
    title: '24/7 Support',
    Svg: () => <img src="/img/200x200.svg" alt="24/7 Support" />, // Placeholder image
    description: (
      <>
        Our dedicated support team is available around the clock to assist you with any questions or issues you may encounter.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

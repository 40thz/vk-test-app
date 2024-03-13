import ContentLoader from 'react-content-loader';
import styles from './Loader.module.scss';

export const Loader = () => (
  <div className={styles.loader}>
    <ContentLoader
      speed={0.5}
      width={355}
      height={100}
      viewBox="0 0 355 100"
      backgroundColor="#232324"
      foregroundColor="#2d2d2e"
    >
      <rect x="2" y="7" rx="0" ry="0" width="722" height="498" />
    </ContentLoader>
  </div>
);

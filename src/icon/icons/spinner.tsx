import { h } from 'preact';
import * as styles from './spinner.scss';

export const Spinner = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.spinner}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.5 18C15.8137 18 18.5 15.3137 18.5 12C18.5 8.68629 15.8137 6 12.5 6C9.18629 6 6.5 8.68629 6.5 12C6.5 15.3137 9.18629 18 12.5 18ZM12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
      fill="white"
      fill-opacity="0.2"
    />
    <path d="M18.5 12H22.5C22.5 6.47715 18.0228 2 12.5 2V6C15.8137 6 18.5 8.68629 18.5 12Z" fill="white" />
  </svg>
);

// @ts-nocheck
import { h, Component } from "preact";
import * as styles from './spinner.scss';

type SpinnerProps = {
  size: number;
};

export class Spinner extends Component<SpinnerProps> {
  render() {
    const {size} = this.props;
    const spinnerDimensionsStyle = `width: ${size}px; height: ${size}px;`;
    return (
      <div className={styles.spinnerRoot} style={spinnerDimensionsStyle}>
      <span className={styles.spinnerBackgroundCircle} role="progressbar" aria-valuenow="100" style={spinnerDimensionsStyle}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36ZM24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="white"/>
        </svg>
      </span>
        <span className={styles.spinnerTopCircle} role="progressbar" aria-valuenow="25" style={spinnerDimensionsStyle}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36 24H44C44 12.9543 35.0457 4 24 4V12C30.6274 12 36 17.3726 36 24Z" fill="white"/>
        </svg>
      </span>
      </div>
    );
  }
}

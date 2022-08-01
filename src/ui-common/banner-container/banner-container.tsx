import {Component, h} from 'preact';
import * as styles from './_banner-container.scss';

export interface BannerContainerProps {
  onClose: () => void;
  theme: BannerTheme;
}

interface BannerTheme {
  backgroundColor: string;
  blur: string;
}

export class BannerContainer extends Component<BannerContainerProps> {

  render(props: BannerContainerProps) {
    const {backgroundColor, blur} = this.props.theme;

    return (
      <div className={styles.bannerContainerRoot}>
        <div
          style={`
                background-color:${backgroundColor}; 
                backdrop-filter: blur(${blur});
             `}
          className={styles.bannerContainer}>
          <button className={styles.closeButton} onClick={props.onClose} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

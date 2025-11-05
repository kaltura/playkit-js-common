import { h, createContext, Component } from "preact";
import * as styles from './sr-wrapper.scss';

export const ScreenReaderContext = createContext((textToRead: string, delay?: number) => {});
export class ScreenReaderProvider extends Component {
  state = {
    textToRead: ''
  }

  private _setTextToRead = (text: string, delay = 500) => {
    setTimeout(() => {
      this.setState({textToRead: text})
    }, delay);
  };

  render() {
    return (
      <ScreenReaderContext.Provider value={this._setTextToRead}>
        {this.props.children}
        <div style={styles.srWrapper} aria-live={'polite'} data-testid="screenReaderWrapper">
          <span id='sr-only'>
            {this.state.textToRead}
          </span>
        </div>
      </ScreenReaderContext.Provider> );
  }
}
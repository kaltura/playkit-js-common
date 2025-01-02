import { h, Component, Fragment } from 'preact';
import { A11yWrapper } from '../../hoc/a11y-wrapper';
import * as styles from './InputField.scss';

export interface SearchResults {
  activeSearchIndex: number;
  totalSearchResults: number;
  onSearchIndexChange: (index: number) => void;
  nextMatchLabel: string;
  prevMatchLabel: string;
  searchResultsLabel: string;
}

export interface InputFieldProps {
  value: string;
  onChange(value: string): void;
  placeholder?: string;
  clearSearchLabel?: string; // clearable input
  searchResults?: SearchResults; // input with search matches
}

interface InputFieldState {
  active: boolean;
}

export class InputField extends Component<InputFieldProps, InputFieldState> {
  state: InputFieldState = {
    active: false
  };
  private _inputRef: null | HTMLInputElement = null;
  constructor(props: InputFieldProps) {
    super(props);
    this.state = {
      active: false
    };
  }

  public setFocus = (options?: FocusOptions) => {
    this._inputRef?.focus(options);
  };

  private _handleOnChange = (e: any) => {
    this.props.onChange(e.target.value);
  };

  private _onClear = () => {
    this._inputRef?.focus();
    this.props.onChange('');
  };

  private _onFocus = () => {
    this.setState({
      active: true
    });
  };

  private _onBlur = () => {
    this.setState({
      active: false
    });
  };

  private _goToNextSearchResult = () => {
    const { searchResults } = this.props;
    const { activeSearchIndex, totalSearchResults, onSearchIndexChange } = searchResults!;
    if (totalSearchResults === 0) {
      return;
    }
    let index = 0;
    if (activeSearchIndex !== totalSearchResults) {
      index = activeSearchIndex + 1;
    } else {
      index = 1;
    }
    onSearchIndexChange(index);
  };
  private _goToPrevSearchResult = () => {
    const { searchResults } = this.props;
    const { activeSearchIndex, totalSearchResults, onSearchIndexChange } = searchResults!;
    if (totalSearchResults === 0) {
      return;
    }
    let index = 0;
    if (activeSearchIndex !== 1) {
      index = activeSearchIndex - 1;
    } else {
      index = totalSearchResults;
    }
    onSearchIndexChange(index);
  };

  private _renderSearchResults = () => {
    const isDisabled = this.props.searchResults!.totalSearchResults === 0
    return (
      <Fragment>
        <div className={styles.searchResults} aria-live="polite" aria-label={this.props.searchResults!.searchResultsLabel}>{`${
          this.props.searchResults!.totalSearchResults > 0
            ? `${this.props.searchResults!.activeSearchIndex}/${this.props.searchResults!.totalSearchResults}`
            : '0/0'
        }`}</div>
        <div className={styles.prevNextWrapper}>
          {this.props.value && (
            <A11yWrapper onClick={this._goToPrevSearchResult}>
              <button
                tabIndex={isDisabled ? -1 : 0}
                className={`${styles.prevNextButton} ${isDisabled ? styles.disabled : ''}`}
                aria-label={this.props.searchResults!.prevMatchLabel}
              >
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    d="M0.292893 4.70711C0.653377 5.06759 1.22061 5.09532 1.6129 4.7903L1.70711 4.70711L4 2.415L6.29289 4.70711C6.65338 5.06759 7.22061 5.09532 7.6129 4.7903L7.70711 4.70711C8.06759 4.34662 8.09532 3.77939 7.7903 3.3871L7.70711 3.29289L4.70711 0.292893C4.34662 -0.0675907 3.77939 -0.0953203 3.3871 0.209705L3.29289 0.292893L0.292893 3.29289C-0.0976311 3.68342 -0.0976311 4.31658 0.292893 4.70711Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                </svg>
              </button>
            </A11yWrapper>
          )}
          {this.props.value && (
            <A11yWrapper onClick={this._goToNextSearchResult}>
              <button
                tabIndex={isDisabled ? -1 : 0}
                className={`${styles.prevNextButton} ${isDisabled ? styles.disabled : ''}`}
                aria-label={this.props.searchResults!.nextMatchLabel}
              >
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L4 2.58579L6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893C8.09763 0.683417 8.09763 1.31658 7.70711 1.70711L4.70711 4.70711C4.31658 5.09763 3.68342 5.09763 3.29289 4.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                    fill="white"
                    fill-opacity="0.7"
                  />
                </svg>
              </button>
            </A11yWrapper>
          )}
        </div>
      </Fragment>
    );
  };

  private _renderClearSearch = () => {
    return (
      <A11yWrapper onClick={this._onClear}>
        <button className={styles.clearIcon} tabIndex={0} aria-label={this.props.clearSearchLabel!}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM3.38951 2.3502L3.46013 2.41264L5.99548 4.9504L8.53067 2.41264L8.60129 2.3502C8.89537 2.12125 9.32081 2.1418 9.59133 2.41199C9.8844 2.70471 9.88469 3.17958 9.59197 3.47265L7.05523 6.01165L9.59197 8.55189C9.88469 8.84496 9.8844 9.31983 9.59133 9.61255C9.32081 9.88275 8.89537 9.90329 8.60129 9.67434L8.53067 9.61191L5.99548 7.0729L3.46013 9.61191L3.38951 9.67434C3.09543 9.90329 2.66999 9.88275 2.39947 9.61255C2.1064 9.31983 2.10611 8.84496 2.39883 8.55189L4.93498 6.01165L2.39883 3.47265C2.10611 3.17958 2.1064 2.70471 2.39947 2.41199C2.66999 2.1418 3.09543 2.12125 3.38951 2.3502Z"
              fill="white"
              fill-opacity="0.7"
            />
          </svg>
        </button>
      </A11yWrapper>
    );
  };

  render() {
    const inputProps: Record<string, unknown> = {
      className: styles.inputElement,
      value: this.props.value,
      onInput: this._handleOnChange,
      onFocus: this._onFocus,
      onBlur: this._onBlur,
      tabIndex: 0,
      ref: (node: HTMLInputElement | null) => {
        this._inputRef = node;
      }
    };
    if (this.props.placeholder) {
      inputProps['aria-label'] = this.props.placeholder;
      inputProps['placeholder'] = this.props.placeholder;
    }
    return (
      <div className={[styles.inputFieldWrapper, this.props.value || this.state.active ? styles.active : ''].join(' ')}>
        <input {...inputProps} />
        {this.props.value && this.props.clearSearchLabel && this._renderClearSearch()}
        {this.props.value && this.props.searchResults && this._renderSearchResults()}
      </div>
    );
  }
}

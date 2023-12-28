import { h, ComponentChild, Fragment, Component, createRef } from 'preact';
import * as classnames from 'classnames';
import { ui } from '@playkit-js/kaltura-player-js';
import { A11yWrapper, OnClick } from '../../hoc/a11y-wrapper';
import { Icon, IconSize } from '../../icon';
import * as styles from './Button.scss';

const { Tooltip } = ui.Components;

export enum ButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export enum ButtonType {
  primary = 'primary',
  danger = 'danger',
  translucent = 'translucent',
  borderless = 'borderless',
  borderlessTranslucent = 'borderlessTranslucent',
  secondary = 'secondary'
}

export interface TooltipProps {
  label: string;
  className?: string;
  type?: string;
}

export interface ButtonProps {
  testId?: string; // uniq data-testid attribute for e2e tests
  children?: ComponentChild;
  icon?: string | null;
  disabled?: boolean;
  tabIndex?: number;
  ariaLabel?: string;
  onClick?: OnClick;
  className?: string;
  tooltip?: TooltipProps;
  size?: ButtonSize;
  type?: ButtonType;
  focusOnMount?: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  setRef?: (ref: HTMLButtonElement) => void;
  loading?: boolean;
}

export class Button extends Component<ButtonProps> {
  buttonRef = createRef<HTMLButtonElement>();

  componentDidMount(): void {
    if (this.props.setRef) {
      this.props.setRef(this.buttonRef.current!);
    }
    if (this.props.focusOnMount) {
      this.buttonRef.current?.focus();
    }
  }

  renderChildren = () => {
    const { props } = this;
    if (props.loading) {
      return (
        <span>
          <Icon name={'spinner'} size={IconSize[props.size!]} />
        </span>
      );
    }
    return props.children ? <span>{props.children}</span> : null;
  };

  renderButton = () => {
    const { props } = this;
    const classNames = classnames(styles.button, styles[props.size!], styles[props.type!], props.className, {
      [styles.disabled]: props.disabled,
      [styles.loading]: props.loading,
      [styles.withIcon]: props.children && props.icon,
      [styles.iconOnly]: !props.children && props.icon
    });
    const buttonProps = {
      ref: this.buttonRef,
      disabled: props.disabled,
      'aria-disabled': props.disabled,
      'aria-busy': props.loading,
      tabIndex: props.tabIndex,
      className: classNames,
      ...(props.ariaLabel ? { 'aria-label': props.ariaLabel } : {}),
      ...(props.testId ? { 'data-testid': props.testId } : {}),
      ...(props.onFocus ? { onFocus: props.onFocus } : {}),
      ...(props.onBlur ? { onBlur: props.onBlur } : {})
    };
    const buttonContent = (
      <button {...buttonProps}>
        <Fragment>
          {props.icon && <Icon name={props.icon} size={IconSize[props.size!]} />}
          {this.renderChildren()}
        </Fragment>
      </button>
    );

    return props.onClick ? <A11yWrapper onClick={props.onClick}>{buttonContent}</A11yWrapper> : buttonContent;
  };

  render(props: ButtonProps) {
    if (props.tooltip) {
      const tooltipProps = {
        label: props.tooltip.label,
        ...(props.tooltip.type ? { type: props.tooltip.type } : {}),
        ...(props.tooltip.className ? { classNames: props.tooltip.className } : {})
      };
      return <Tooltip {...tooltipProps}>{this.renderButton()}</Tooltip>;
    }
    return this.renderButton();
  }
}

Button.defaultProps = {
  disabled: false,
  focusOnMount: false,
  tabIndex: 0,
  children: null,
  size: ButtonSize.medium,
  icon: null,
  type: ButtonType.primary
};

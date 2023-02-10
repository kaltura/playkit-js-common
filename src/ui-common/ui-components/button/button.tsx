import { h, ComponentChild, FunctionComponent } from 'preact';
import * as classnames from 'classnames';
import { A11yWrapper, OnClick } from '../../hoc/a11y-wrapper';
import * as styles from './button.scss';

const { Tooltip } = KalturaPlayer.ui.components;

enum Size {
  small = 'small',
  medium = 'medium',
  large = 'large'
}

enum Type {
  primary = 'primary',
  danger = 'danger',
  translucent = 'translucent',
  borderless = 'borderless'
}

export interface TooltipProps {
  label: string;
  className?: string;
}

export interface ButtonProps {
  testId?: string; // uniq data-testid attribute for e2e tests
  children?: ComponentChild;
  disabled?: boolean;
  tabIndex?: number;
  ariaLabel?: string;
  onClick: OnClick;
  className?: string;
  tooltip?: TooltipProps;
  size?: Size;
  type?: Type;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const renderButton = () => {
    const classNames = classnames(styles.button, styles[props.size!], styles[props.type!], props.className, {
      [styles.disabled]: props.disabled
    });
    const buttonProps = {
      disabled: props.disabled,
      'aria-disabled': props.disabled,
      tabIndex: props.tabIndex,
      className: classNames,
      ...(props.ariaLabel ? { 'aria-label': props.ariaLabel } : {}),
      ...(props.testId ? { 'data-testid': props.testId } : {})
    };
    return (
      <A11yWrapper onClick={props.onClick}>
        <button {...buttonProps}>{props.children}</button>
      </A11yWrapper>
    );
  };

  if (props.tooltip) {
    const tooltipProps = {
      label: props.tooltip.label,
      ...(props.tooltip.className ? { classNames: props.tooltip.className } : {})
    };
    return <Tooltip {...tooltipProps}>{renderButton()}</Tooltip>;
  }
  return renderButton();
};

Button.defaultProps = {
  disabled: false,
  tabIndex: 0,
  onClick: () => {},
  children: null,
  size: Size.medium,
  type: Type.primary
};

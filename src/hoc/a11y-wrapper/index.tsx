import { cloneElement, ComponentChild, VNode } from 'preact';
import { ui } from '@playkit-js/kaltura-player-js';
const { ENTER, SPACE, UP, DOWN, LEFT, RIGHT } = ui.utils.KeyMap;

export type OnClickEvent = KeyboardEvent | MouseEvent;
export type OnClick = (e: OnClickEvent, byKeyboard: boolean) => void;

interface A11yWrapperProps {
  children: ComponentChild;
  onClick: OnClick;
  onUpKeyPressed?: (e: KeyboardEvent) => void;
  onDownKeyPressed?: (e: KeyboardEvent) => void;
  onLeftKeyPressed?: (e: KeyboardEvent) => void;
  onRightKeyPressed?: (e: KeyboardEvent) => void;
  role?: string | null;
  type?: string;
  onFocus?: (e: FocusEvent) => void;
  onBlur?: (e: FocusEvent) => void;
}

const stopEvent = (e: KeyboardEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

export const isKeyboardEvent = (e: OnClickEvent): boolean => {
  if (e instanceof KeyboardEvent) {
    return true;
  }
  // Space/Enter keyEvent is swallowed by NVDA (https://github.com/nvaccess/nvda/issues/7898)
  // check additional PointerEvent props to determine if it was triggered by keyboard
  if (e instanceof PointerEvent) {
    // Chrome has offsetX/offsetY as 0, FF doesn't have pointerType
    return [e.offsetX, e.offsetY].every((offset) => offset === 0) || !e.pointerType;
  }
  return false;
};

export const A11yWrapper = ({
  children,
  onClick,
  onUpKeyPressed,
  onDownKeyPressed,
  onLeftKeyPressed,
  onRightKeyPressed,
  role,
  type,
  onFocus,
  onBlur
}: A11yWrapperProps) => {
  const childProps = ((children as VNode)?.props || {}) as Record<string, unknown>;
  const childOnKeyDown = childProps.onKeyDown as ((e: KeyboardEvent) => void) | undefined;
  const childOnClick = childProps.onClick as ((e: MouseEvent) => void) | undefined;
  const childOnFocus = childProps.onFocus as ((e: FocusEvent) => void) | undefined;
  const childOnBlur = childProps.onBlur as ((e: FocusEvent) => void) | undefined;

  const props: Record<string, unknown> = {
    onKeyDown: (e: KeyboardEvent) => {
      if (childOnKeyDown) {
        childOnKeyDown(e);
      }
      if (e.defaultPrevented) {
        return;
      }
      if (e.keyCode === SPACE || e.keyCode === ENTER) {
        stopEvent(e);
        onClick(e, true);
      } else if (e.keyCode === UP && onUpKeyPressed) {
        stopEvent(e);
        onUpKeyPressed(e);
      } else if (e.keyCode === DOWN && onDownKeyPressed) {
        stopEvent(e);
        onDownKeyPressed(e);
      } else if (e.keyCode === LEFT && onLeftKeyPressed) {
        stopEvent(e);
        onLeftKeyPressed(e);
      } else if (e.keyCode === RIGHT && onRightKeyPressed) {
        stopEvent(e);
        onRightKeyPressed(e);
      }
    },
    onClick: (e: MouseEvent) => {
      if (childOnClick) {
        childOnClick(e);
      }
      if (e.defaultPrevented) {
        return;
      }
      onClick(e, isKeyboardEvent(e));
    },
    onFocus: (e: FocusEvent) => {
      if (onFocus) {
        onFocus(e);
      }
      if (childOnFocus) {
        childOnFocus(e);
      }
    },
    onBlur: (e: FocusEvent) => {
      if (onBlur) {
        onBlur(e);
      }
      if (childOnBlur) {
        childOnBlur(e);
      }
    }
  };
  if ((children as VNode)?.type === 'button') {
    props.type = type || 'button';
  }

  if (role !== null) {
    props.role = role;
  }

  return cloneElement(children as VNode, props);
};

A11yWrapper.defaultProps = {
  role: 'button'
};

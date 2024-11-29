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
}

const stopEvent = (e: KeyboardEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

export const isKeyboardEvent = (e: OnClickEvent): boolean => {
  // space/enter keyEvent is swallowed by NVDA (https://github.com/nvaccess/nvda/issues/7898)
  // check type and pointerType to define keyboard event triggered by NVDA
  return e instanceof KeyboardEvent || !(e instanceof PointerEvent && e.pointerType);
};

export const A11yWrapper = ({
  children,
  onClick,
  onUpKeyPressed,
  onDownKeyPressed,
  onLeftKeyPressed,
  onRightKeyPressed,
  role,
  type
}: A11yWrapperProps) => {
  const props: Record<string, unknown> = {
    onKeyDown: (e: KeyboardEvent) => {
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
      onClick(e, isKeyboardEvent(e));
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

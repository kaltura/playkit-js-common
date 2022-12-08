import { cloneElement, VNode } from 'preact';

const { ENTER, SPACE, UP, DOWN, LEFT, RIGHT } = KalturaPlayer.ui.utils.KeyMap;

export type OnClickEvent = KeyboardEvent | MouseEvent;
export type OnClick = (e: OnClickEvent, byKeyboard: boolean) => void;

interface A11yWrapperProps {
  children: VNode;
  onClick: OnClick;
  onUpKeyPressed?: (e: KeyboardEvent) => void;
  onDownKeyPressed?: (e: KeyboardEvent) => void;
  onLeftKeyPressed?: (e: KeyboardEvent) => void;
  onRightKeyPressed?: (e: KeyboardEvent) => void;
}

const stopEvent = (e: KeyboardEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

export const isKeyboardEvent = (e: OnClickEvent): boolean => {
  // space/enter keyEvent is swallowed by NVDA (https://github.com/nvaccess/nvda/issues/7898)
  // check offsetX and offsetY to define keyboard event triggered by NVDA
  return e instanceof KeyboardEvent || [e.offsetX, e.offsetY].every((offset) => offset === 0);
};

export const A11yWrapper = ({ children, onClick, onUpKeyPressed, onDownKeyPressed, onLeftKeyPressed, onRightKeyPressed }: A11yWrapperProps) => {
  return cloneElement(children, {
    onKeyDown: (e: KeyboardEvent) => {
      if ([SPACE, ENTER].includes(e.keyCode)) {
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
      e.stopPropagation();
      onClick(e, isKeyboardEvent(e));
    }
  });
};

import { cloneElement, VNode } from 'preact';

const { ENTER, SPACE } = KalturaPlayer.ui.utils.KeyMap;

export type OnClickEvent = KeyboardEvent | MouseEvent;
export type OnClick = (e: OnClickEvent, byKeyboard: boolean) => void;

interface A11yWrapperProps {
  children: VNode;
  onClick: OnClick;
}

export const A11yWrapper = ({ children, onClick }: A11yWrapperProps) => {
  return cloneElement(children, {
    onKeyDown: (e: KeyboardEvent) => {
      if ([SPACE, ENTER].includes(e.keyCode)) {
        e.preventDefault();
        onClick(e, true);
      }
    },
    onClick: (e: MouseEvent) => {
      // space/enter keyEvent is swallowed by NVDA (https://github.com/nvaccess/nvda/issues/7898)
      const nvdaReaderEnabled = [e.offsetX, e.offsetY].every((offset) => offset === 0);
      e.stopPropagation();
      onClick(e, nvdaReaderEnabled);
    }
  });
};

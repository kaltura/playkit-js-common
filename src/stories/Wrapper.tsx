import { h, VNode } from 'preact';
import { OverlayPortal } from '../ui-common/hoc';

const { Overlay } = KalturaPlayer.ui.components;

const wrapperStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

export const Wrapper = ({ children }: { children: VNode }) => {
  return (
    <OverlayPortal>
      <Overlay open permanent>
        <div style={wrapperStyles}>{children}</div>
      </Overlay>
    </OverlayPortal>
  );
};

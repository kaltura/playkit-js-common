import { VNode } from 'preact';

const {
  redux: { useSelector }
} = KalturaPlayer.ui;
const { createPortal } = KalturaPlayer.ui;

const PORTAL_CLASS = '.overlay-portal';

export interface OverlayPortalProps {
  children: VNode;
}

export const OverlayPortal = ({ children }: OverlayPortalProps) => {
  const targetId = useSelector((state: any) => state.config.targetId);
  const playerContainer: any = document.getElementById(targetId) || document;

  return createPortal(children, playerContainer.querySelector(PORTAL_CLASS));
};

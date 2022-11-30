import { VNode } from 'preact';

const {
  redux: { useSelector }
} = KalturaPlayer.ui;
const { createPortal } = KalturaPlayer.ui;

export interface OverlayPortalProps {
  children: VNode;
}

export const OverlayPortal = ({ children }: OverlayPortalProps) => {
  const targetId = useSelector((state: any) => state.config.targetId);
  const playerContainer: any = document.getElementById(targetId) || document;
  const portalSelector = `.overlay-portal`;

  return createPortal(children, playerContainer.querySelector(portalSelector)) as any; // createPortal has incorrect return type (void instead of VNode)
};

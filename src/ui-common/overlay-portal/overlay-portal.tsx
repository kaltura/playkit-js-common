// @ts-nocheck
import {h, VNode, Fragment} from 'preact';

const {
    redux: {useSelector}
} = KalturaPlayer.ui;
const {createPortal} = KalturaPlayer.ui;

export interface OverlayPortalProps {
    children: VNode;
}

export const OverlayPortal = ({children}: OverlayPortalProps) => {
    const targetId = useSelector((state: any) => state.config.targetId);
    const playerContainer: any = document.getElementById(targetId) || document;
    const portalSelector = `.overlay-portal`;

    return <Fragment>{createPortal(children, playerContainer.querySelector(portalSelector))}</Fragment> ;
};
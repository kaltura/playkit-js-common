import { ComponentChild, Component } from 'preact';

const {
  redux: { connect },
  reducers: { shell, overlay }
} = KalturaPlayer.ui;
const { createPortal } = KalturaPlayer.ui;

const PORTAL_CLASS = '.overlay-portal';
const PLAYKIT_OVERLAY_CLASS = '.playkit-overlay';

export interface OverlayPortalProps {
  children: ComponentChild;
  targetId?: string;
  addPlayerClass?: () => void;
  removeOverlay?: () => void;
}

const OVERLAY_ACTIVE_CLASS_NAME = 'playkit-overlay-active';

const mapStateToProps = (state: Record<string, any>) => ({
  targetId: state.config.targetId
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addPlayerClass: () => dispatch(shell.actions.addPlayerClass(OVERLAY_ACTIVE_CLASS_NAME)),
    removeOverlay: () => dispatch(overlay.actions.updateOverlay(false))
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export class OverlayPortal extends Component<OverlayPortalProps> {
  playerContainer: any = document.getElementById(this.props.targetId!) || document;

  componentWillUnmount() {
    setTimeout(() => {
      if (this.playerContainer.querySelector(`${PORTAL_CLASS} > ${PLAYKIT_OVERLAY_CLASS}`)) {
        // keep .playkit-overlay-active class in case OverlayPortal has playkit-ui Overlay as children
        this.props.addPlayerClass!();
      } else {
        // update overlay property in redux store
        this.props.removeOverlay!();
      }
      // use timeout 0 to make sure check happens after components updated
    }, 0);
  }

  render() {
    return createPortal(this.props.children, this.playerContainer.querySelector(PORTAL_CLASS));
  }
}

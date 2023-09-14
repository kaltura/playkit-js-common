import { VNode,Component } from 'preact';

const {
  redux: { connect },
  reducers: {shell}
} = KalturaPlayer.ui;
const { createPortal } = KalturaPlayer.ui;

const PORTAL_CLASS = '.overlay-portal';

export interface OverlayPortalProps {
  children: VNode;
  targetId?: string;
  addPlayerClass?: () => void;
}

const OVERLAY_ACTIVE_CLASS_NAME = 'playkit-overlay-active';

const mapStateToProps = (state: Record<string, any>) => ({
  targetId: state.config.targetId
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addPlayerClass: () => dispatch(shell.actions.addPlayerClass(OVERLAY_ACTIVE_CLASS_NAME))
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class OverlayPortal extends Component<OverlayPortalProps> {
  playerContainer: any = document.getElementById(this.props.targetId!) || document;

  componentWillUnmount() {
    // keep playkit-overlay-active class in case OverlayPortal has more children
    if (this.playerContainer.querySelector(PORTAL_CLASS).children.length > 1) {
      // use timeout 0 to make sure addPlayerClass happens after removePlayerClass
      setTimeout(() => {
        this.props.addPlayerClass!();
      },0);
    }
  }

  render() {
    return createPortal(this.props.children, this.playerContainer.querySelector(PORTAL_CLASS));
  }
}

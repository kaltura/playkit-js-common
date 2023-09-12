import { h } from 'preact';
import { ui } from '@playkit-js/kaltura-player-js';
import { Spinner as SpinnerComponent, SpinnerProps } from './spinner';
import { OverlayPortal } from '../../hoc/overlay-portal';

//@ts-ignore
const { Overlay } = ui.Components;

export default {
  title: 'Spinner',
  component: SpinnerComponent,
  argTypes: {
    size: 48
  },
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    }
  }
};

let overlay = () => {};
const Template = (args: SpinnerProps) => {
  overlay();
  overlay = (window as any).kalturaPlayer.ui.addComponent({
    label: 'story-book-overlay',
    presets: ['Playback'],
    container: 'GuiArea',
    //@ts-ignore
    replaceComponent: ui.Components.PrePlaybackPlayOverlay.displayName,
    get: () => (
      <OverlayPortal>
        <Overlay open permanent>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <SpinnerComponent {...args} />
          </div>
        </Overlay>
      </OverlayPortal>
    )
  });
  return (
    <pre>
      <code class="language-html">
        {`
          import {Spinner} from '@playkit-js/common/dist/components/spinner';
          ...
          <Spinner size={${args.size}} />
        `}
      </code>
    </pre>
  );
};

export const Spinner: any = Template.bind({});
Spinner.args = { size: 48};

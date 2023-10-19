import { h } from 'preact';
import { ui } from '@playkit-js/kaltura-player-js';
import { Sanitize as SanitizeComponent, SanitizeProps } from './index';
import { OverlayPortal } from '../../hoc/overlay-portal';

//@ts-ignore
const { Overlay } = ui.Components;

export default {
  title: 'Sanitize',
  component: Sanitize,
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    },
  },
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    }
  }
};

let overlay = () => {};
const Template = (args: SanitizeProps) => {
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
            <div style={{ color: 'white', fontSize: '20px' }}>
              <SanitizeComponent {...args} />
            </div>
          </div>
        </Overlay>
      </OverlayPortal>
    )
  });
  return (
    <pre>
      <code class="language-html">
        {`
          import {Sanitize} from '@playkit-js/common/dist/components/sanitize';
          ...
          <Sanitize>{'Test <script>alert()</script> string'}</Sanitize>
        `}
      </code>
    </pre>
  );
};

export const Sanitize: any = Template.bind({});
Sanitize.args = { children: 'Test <script>alert()</script> string', sanitizeOptions: {} };

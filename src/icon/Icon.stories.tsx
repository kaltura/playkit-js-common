import { h } from 'preact';
import { ui } from 'kaltura-player-js';
import { Icon as IconComponent, IconSize, IconProps } from './index';
import { OverlayPortal } from '../hoc/overlay-portal';
import { Icons } from './icons';

//@ts-ignore
const { Overlay } = ui.Components;

export default {
  title: 'Icon',
  component: IconComponent,
  argTypes: {
    size: {
      options: [IconSize.small, IconSize.medium, IconSize.large],
      defaultValue: IconSize.medium,
      control: { type: 'select' }
    }
  },
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    }
  }
};

let overlay = () => {};
const Template = (args: IconProps) => {
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
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-around" }}>
            {Object.keys(Icons).map((name) => (
              <div key={name} style={{ display: 'flex', flexDirection: 'column', width: '60px', margin: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <IconComponent name={name} {...args} />
                </div>
                <span style={{ fontSize: '14px', textAlign: 'center' }}>{name}</span>
              </div>
            ))}
          </div>
        </Overlay>
      </OverlayPortal>
    )
  });
  return (
    <pre>
      <code class="language-html">
        {`
          import {Icon} from '@playkit-js/common/dist/icon';
          ...
          <Icon
            size={'${args.size}'}
            name='close'
          />
        `}
      </code>
    </pre>
  );
};

export const Icon: any = Template.bind({});
Icon.args = { size: IconSize.medium };

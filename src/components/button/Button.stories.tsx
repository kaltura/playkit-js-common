import { h } from 'preact';
import { Button, ButtonProps, ButtonSize, ButtonType } from './index';
import { OverlayPortal } from '../../hoc/overlay-portal';

const { Overlay } = KalturaPlayer.ui.components;

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    type: {
      control: false
    },
    size: {
      options: [ButtonSize.small, ButtonSize.medium, ButtonSize.large],
      defaultValue: ButtonSize.medium,
      control: { type: 'select' }
    },
    children: {
      control: {
        type: 'text'
      }
    },
    disabled: {
      defaultValue: false,
      control: 'boolean'
    }
  },
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    }
  }
};

let overlay = () => {};
const Template = (args: ButtonProps) => {
  overlay();
  overlay = (window as any).kalturaPlayer.ui.addComponent({
    label: 'story-book-overlay',
    presets: ['Playback'],
    container: 'GuiArea',
    replaceComponent: KalturaPlayer.ui.components.PrePlaybackPlayOverlay.displayName,
    get: () => (
      <OverlayPortal>
        <Overlay open permanent>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Button {...args} />
          </div>
        </Overlay>
      </OverlayPortal>
    )
  });
  return (
    <pre>
      <code class="language-html">
        {`
          import {Button, OnClickEvent} from '@playkit-js/common';
          ...
          <Button
            type={'${args.type}'}
            size={'${args.size}'}
            disabled={${args.disabled}}
            onClick={(e: OnClickEvent, byKeyboard: boolean) => {}}
            tooltip={${args.tooltip ? '{ label: Tooltip }' : 'null'}}
          >
            ${args.children}
          </Button>
        `}
      </code>
    </pre>
  );
};

export const Primary: any = Template.bind({});
Primary.args = { type: ButtonType.primary, children: 'Primary' };
export const Danger: any = Template.bind({});
Danger.args = { type: ButtonType.danger, children: 'Danger' };
export const Translucent: any = Template.bind({});
Translucent.args = { type: ButtonType.translucent, children: 'Translucent' };
export const Borderless: any = Template.bind({});
Borderless.args = { type: ButtonType.borderless, children: 'Borderless', tooltip: null };
export const WithTooltip: any = Template.bind({});
WithTooltip.args = { type: ButtonType.primary, children: 'Hover on button', tooltip: { label: 'Tooltip' } };

import { h } from 'preact';
import { ui } from '@playkit-js/kaltura-player-js';
import { Button as ButtonComponent, ButtonProps, ButtonSize, ButtonType } from './index';
import { OverlayPortal } from '../../hoc/overlay-portal';
import { Icons } from '../../icon/icons';

//@ts-ignore
const { Overlay } = ui.Components;

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    onClick: { action: 'clicked' },
    onBlur: { action: 'blur' },
    onFocus: { action: 'focus' },
    setRef: { action: 'set ref' },
    type: {
      options: [
        ButtonType.primary,
        ButtonType.danger,
        ButtonType.translucent,
        ButtonType.borderless,
        ButtonType.borderlessTranslucent,
        ButtonType.secondary
      ],
      defaultValue: ButtonType.primary,
      control: { type: 'select' }
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
    },
    loading: {
      defaultValue: false,
      control: 'boolean'
    },
    icon: {
      options: [null, ...Object.keys(Icons)],
      defaultValue: null,
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
const Template = (args: ButtonProps) => {
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
            <ButtonComponent {...args} />
          </div>
        </Overlay>
      </OverlayPortal>
    )
  });
  return (
    <pre>
      <code class="language-html">
        {`
          import {Button, OnClickEvent} from '@playkit-js/common/dist/components/button';
          ...
          <Button
            type={'${args.type}'}
            size={'${args.size}'}
            disabled={${args.disabled}}
            loading={${args.loading}}
            onClick={(e: OnClickEvent, byKeyboard: boolean) => {}}
            onFocus={(e: FocusEvent) => {}}
            onBlur={(e: FocusEvent) => {}}
            setRef={(ref: HTMLButtonElement) => {}}
            tooltip={${args.tooltip ? '{ label: Tooltip, type: "bottom" }' : 'null'}}
            icon={${args.icon ? `'${args.icon}'` : 'null'}}
            focusOnMount={${args.focusOnMount ? 'true' : 'false'}}
          >
            ${args.children || ''}
          </Button>
        `}
      </code>
    </pre>
  );
};

export const Button: any = Template.bind({});
Button.args = { type: ButtonType.primary, children: 'Button' };
export const WithTooltip: any = Template.bind({});
WithTooltip.args = { type: ButtonType.primary, children: 'Hover on button', tooltip: { label: 'Tooltip' } };
export const WithIcon: any = Template.bind({});
WithIcon.args = { type: ButtonType.primary, children: 'With Icon', icon: 'close' };
export const IconOnly: any = Template.bind({});
IconOnly.args = { type: ButtonType.primary, icon: 'close', tooltip: { label: 'Tooltip', type: 'bottom' } };
export const FocusOnMount: any = Template.bind({});
FocusOnMount.args = { type: ButtonType.primary, children: 'Focus on mount', focusOnMount: true };

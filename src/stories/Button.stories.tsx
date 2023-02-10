import { h } from 'preact';
import { Button, ButtonProps, ButtonSize, ButtonType } from '../ui-common/ui-components';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      control: false
    },
    size: {
      options: [ButtonSize.small, ButtonSize.medium, ButtonSize.large],
      defaultValue: ButtonSize.medium,
      control: { type: 'select' }
    },
    children: {
      name: 'label',
      control: {
        type: 'text'
      }
    },
    disabled: {
      defaultValue: false,
      control: 'boolean'
    }
  }
};

const Template = (args: ButtonProps) => <Button {...args} onClick={() => alert('Click!')} />;

export const Primary: any = Template.bind({});
Primary.args = { type: ButtonType.primary, children: 'Primary' };
export const Danger: any = Template.bind({});
Danger.args = { type: ButtonType.danger, children: 'Danger' };
export const Translucent: any = Template.bind({});
Translucent.args = { type: ButtonType.translucent, children: 'Translucent' };
export const Borderless: any = Template.bind({});
Borderless.args = { type: ButtonType.borderless, children: 'Borderless' };

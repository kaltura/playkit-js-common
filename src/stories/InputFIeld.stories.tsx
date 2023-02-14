import { h } from 'preact';
import { InputField, InputFieldProps } from '../ui-common/ui-components';
import { Wrapper } from './Wrapper';

export default {
  title: 'InputField',
  component: InputField,
  argTypes: {
    onChange: { action: 'change' },
    value: {
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    }
  }
};

let overlay = () => {};
const Template = (args: InputFieldProps) => {
  overlay();
  overlay = (window as any).kalturaPlayer.ui.addComponent({
    label: 'story-book-overlay',
    presets: ['Playback'],
    container: 'GuiArea',
    replaceComponent: KalturaPlayer.ui.components.PrePlaybackPlayOverlay.displayName,
    get: () => (
      <Wrapper>
        <InputField {...args} />
      </Wrapper>
    )
  });
  return (
    <pre>
      <code class="language-html">
        {`
          import {InputField} from '@playkit-js/common';
          ...
          <InputField
            value={'${args.value}'}
            onChange={(value: string) => {}}
            placeholder={'${args.placeholder}'}
            clearSearchLabel={${args.clearSearchLabel ? "'Clear'" : 'null'}}
            searchResults={${
              args.searchResults
                ? `{
                activeSearchIndex: 3,
                totalSearchResults: 10,
                onSearchIndexChange: (index: number) => {},
                nextMatchLabel: 'Next',
                prevMatchLabel: 'Prev',
                searchResultsLabel: 'Search results'
            }`
                : 'null'
            }}
          />
        `}
      </code>
    </pre>
  );
};

export const PlainInput: any = Template.bind({});
PlainInput.args = { value: 'Test value', onChange: (val: string) => {}, placeholder: 'Placeholder' };
export const WithClearButton: any = Template.bind({});
WithClearButton.args = {
  value: 'Test value',
  onChange: (val: string) => {},
  placeholder: 'Placeholder',
  clearSearchLabel: 'Clear'
};
export const WithSearchResults: any = Template.bind({});
WithSearchResults.args = {
  value: 'Test value',
  onChange: (val: string) => {},
  placeholder: 'Placeholder',
  searchResults: {
    activeSearchIndex: 3,
    totalSearchResults: 10,
    onSearchIndexChange: (index: number) => {},
    nextMatchLabel: 'Next',
    prevMatchLabel: 'Prev',
    searchResultsLabel: 'Search results'
  }
};

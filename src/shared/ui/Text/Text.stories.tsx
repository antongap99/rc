import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CollapseIcon from 'shared/assets/icons/collapseSvg.svg';
import { Text,  } from './Text';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {

    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Text',
        text: 'text text'
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Text',
    },
};

export const onlyText: Story = {
    args: {
        text: 'text text'
    },
};


export const PrimaryDark: Story = {
    args: {
        title: 'Text',
        text: 'text text'
    },
};

export const onlyTitleDark: Story = {
    args: {
        title: 'Text',
    },
};

export const onlyTextDark: Story = {
    args: {
        text: 'text text'
    },
};



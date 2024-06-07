import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Modal } from './Modal';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Modal',
    component: Modal,
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
    args: {
        children: 'loreasdasdasdassssssssssssssssdasdasdasdasdloreasdasdasdasssssssssssssssdasdasdasdasdloreasdasdasdassssssssssssssssdasdasdasdasd',
	    isOpen: true,
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const LightModal: Story = {
    decorators: [ThemeDecorator()],
    args: {
	    className: Theme.Light,
    },
};

export const DarkModal: Story = {
    decorators: [ThemeDecorator()],
    args: {
        className: Theme.Dark,
    },
};

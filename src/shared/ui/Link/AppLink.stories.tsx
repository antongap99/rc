import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/decorators/ThemeDecorator";
import {Theme} from "app/providers/themeProvider";
import {PageError} from "widgets/PageError";
import {AppLink, AppLinkTheme} from "shared/ui/Link/Link";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/AppLink',
    component: AppLink,
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
        to: '#',
    },
    decorators: []
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.Primary
    },
    decorators: [ThemeDecorator(Theme.Light)]
};



export const Secondary: Story = {
    args: {
        children: 'text',
        theme: AppLinkTheme.Secondary
    },
    decorators: [ThemeDecorator(Theme.Light)]
};

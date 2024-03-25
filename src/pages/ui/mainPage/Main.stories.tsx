import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/decorators/ThemeDecorator";
import {Theme} from "app/providers/themeProvider";
import {PageError} from "widgets/PageError";
import {AppLink, AppLinkTheme} from "shared/ui/Link/Link";
import MainPage from "pages/ui/mainPage/MainPage";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'pages/MainPage',
    component: MainPage,
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
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
    args: {
        children: 'text',
    },
    decorators: [ThemeDecorator(Theme.Light)]
};



export const Dark: Story = {
    args: {
        children: 'text',
    },
    decorators: [ThemeDecorator(Theme.Dark)]
};

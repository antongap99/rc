import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import CollapseIcon from 'shared/assets/icons/collapseSvg.svg';
import { Button, ButtonSize, ButtonTheme } from './Button';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
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
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};

export const Background: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const BackgroundInverted: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Squere: Story = {
    args: {
        children: <CollapseIcon />,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};

export const SizeM: Story = {
    args: {
        children: <CollapseIcon />,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.M,
    },
};

export const SizeL: Story = {
    args: {
        children: <CollapseIcon />,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};

export const SizeXl: Story = {
    args: {
        children: <CollapseIcon />,
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};


export const Disabled: Story = {
    args: {
        children: 'text',
        theme: ButtonTheme.OUTLINE,
        disabled: true
    },
};

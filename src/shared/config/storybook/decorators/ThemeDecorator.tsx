import { StoryFn } from '@storybook/react';
import cn from 'classnames';
import { Theme, ThemeProvider } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider defaultTheme={Theme.Light}>
        <div className={cn('storybook-wrapper', theme)}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);

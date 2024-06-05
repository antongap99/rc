import {StoryFn} from '@storybook/react';
import cn from 'classnames';
import {Theme, ThemeProvider} from 'app/providers/themeProvider';
import {useState} from "react";

export const ThemeDecorator = () => (StoryComponent: StoryFn) => {
    const [theme, setTheme] = useState<Theme>(Theme.Light)

    const onClickHandler = () => {
        const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light
        setTheme(newTheme)
    }

    return (
        <>
            <button onClick={onClickHandler}>Переключить тему</button>
            <ThemeProvider defaultTheme={Theme.Light}>
                <div className={cn('storybook-wrapper', theme)}>
                    <StoryComponent/>
                </div>
            </ThemeProvider>

        </>

    );
};

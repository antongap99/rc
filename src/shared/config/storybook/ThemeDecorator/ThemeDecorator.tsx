import {StoryFn} from "@storybook/react";
import cn from "classnames";
import {Theme} from "app/providers/themeProvider";


export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    return (
        <div className={cn('app', theme)}>
            <StoryComponent/>
        </div>
    )
}
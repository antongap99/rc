import type {Preview} from "@storybook/react";
import '../../src/app/styles/index.scss'
import {ThemeDecorator} from "shared/config/storybook/decorators/ThemeDecorator";
import {Theme} from "app/providers/themeProvider";
import {RouterDecorator} from "shared/config/storybook/decorators/RouterDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ThemeDecorator(Theme.Light), RouterDecorator]
};



export default preview;

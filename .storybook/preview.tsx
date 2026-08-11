import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { handlers } from '../src/mocks/handlers';
import '../src/app/globals.css';

initialize({ onUnhandledRequest: 'bypass' }, handlers);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
    a11y: {
      test: 'todo',
    },
  },
  loaders: [mswLoader],
};

export default preview;
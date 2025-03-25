// Libraries
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';

// Styles
import './index.css';
import '@mantine/core/styles.css';

// Utilities
import { theme } from "./utilities/theme.ts";

// Todo App
import TodoApp from './components/TodoApp.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <TodoApp />
    </MantineProvider>
  </StrictMode>,
);

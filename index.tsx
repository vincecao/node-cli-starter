import React from 'react';
import type { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);

function App(): ReactElement {
  return (
    <div>
      Hello World
    </div>
  );
}

root.render(<App />);
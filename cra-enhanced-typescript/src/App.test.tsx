import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'App';
import Button from 'components/Button';

jest.mock('components/Button', () => ({
  __esModule: true,
  default: () => <>mock-test</>,
}));

test('renders App test', () => {
  render(<App />);
  const linkElement = screen.getByText(/and save to reload/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders jest mock react component with root import test', () => {
  render(<Button />);
  const linkElement = screen.queryByText('mock-test');
  expect(linkElement).toBeInTheDocument();
});

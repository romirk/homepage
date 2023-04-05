import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders romir', () => {
  render(<App />);
  const linkElement = screen.getByText(/romir/i);
  expect(linkElement).toBeInTheDocument();
});

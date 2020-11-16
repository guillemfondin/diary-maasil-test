import React from 'react';
import { render } from '@testing-library/react';
import Index from '../../src/pages/index';

test('renders deploy link', () => {
  const { getByText } = render(<Index />);
  const linkElement = getByText(/default.learn.react/i);
  expect(linkElement).toBeInTheDocument()
})
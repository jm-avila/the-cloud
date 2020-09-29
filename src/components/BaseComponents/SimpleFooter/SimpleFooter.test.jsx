import React from 'react';
import SimpleFooter from './SimpleFooter';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ContentContainer render.', () => {
  test('should render a footer element that contains a text with the copyright symbol, Copyright word and current year concatenated by a space.', () => {
    const currentYear = new Date().getFullYear();

    const text = `© Copyright ${currentYear}`;

    const { getByText } = render(<SimpleFooter />);

    getByText(text);
  });
});

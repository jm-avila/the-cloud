import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('LoadingSpinner render.', () => {
  test('should render a div element that contains 6 children, all divs.', () => {
    const { getByTestId } = render(<LoadingSpinner />);

    const mainDiv = getByTestId('spinner-container');

    const childrenLength = mainDiv.children.length;
    expect(childrenLength).toBe(6);

    for (let i = 0; i < childrenLength; i++) {
      expect(mainDiv.children[i]).toContainHTML('div');
    }
  });
});

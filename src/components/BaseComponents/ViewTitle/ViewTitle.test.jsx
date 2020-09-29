import React from 'react';
import ViewTitle from './ViewTitle';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ContentContainer render.', () => {
  test('should render a h1 element that contains a text set by the text prop.', () => {
    const text = 'test';

    const { getByText } = render(<ViewTitle text={text} />);

    const h1Element = getByText(text);

    expect(h1Element).toContainHTML('h1');
  });
});

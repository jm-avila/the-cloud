import React from 'react';
import ErrorMessage from './ErrorMessage';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ErrorMessage render.', () => {
  test('should render a p element that contains the text passed by the text prop.', () => {
    const text = 'Error Message';

    const { getByText } = render(<ErrorMessage text={text} />);

    const pElememt = getByText(text);

    expect(pElememt).toContainHTML('p');
  });
});

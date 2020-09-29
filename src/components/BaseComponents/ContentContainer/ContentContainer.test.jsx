import React from 'react';
import ContentContainer from './ContentContainer';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ContentContainer render.', () => {
  test('should render a div that contains a single children which is a footer element.', () => {
    const { getByTestId } = render(<ContentContainer />);

    const mainDiv = getByTestId('content-container');

    expect(mainDiv.children.length).toBe(1);
    expect(mainDiv).toContainHTML('footer');
  });

  test('should render a div that contains a two children, one passed by the children prop and a footer element.', () => {
    const { getByTestId } = render(
      <ContentContainer>
        <div />
      </ContentContainer>,
    );

    const mainDiv = getByTestId('content-container');

    expect(mainDiv.children.length).toBe(2);
    expect(mainDiv).toContainHTML('div');
    expect(mainDiv).toContainHTML('footer');
  });
});

import React from 'react';
import SimpleBtn from './SimpleBtn';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('SimpleBtn render and event test.', () => {
  test('should render a button element with a text content and className attribute set by props.', () => {
    const props = {
      className: 'test-class',
      text: 'btn',
      onClick: () => {},
    };

    const { getByText } = render(<SimpleBtn {...props} />);

    const btnNode = getByText(props.text);
    expect(btnNode).toHaveAttribute('class', props.className);
  });

  test('when the button is clicked the onClick callback is called once per click.', () => {
    const mockHandler = jest.fn(() => {});
    const props = {
      text: 'btn',
      onClick: mockHandler,
    };

    const { getByText } = render(<SimpleBtn {...props} />);

    const btnNode = getByText(props.text);

    fireEvent.click(btnNode);
    expect(mockHandler).toHaveBeenCalledTimes(1);

    fireEvent.click(btnNode);
    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});

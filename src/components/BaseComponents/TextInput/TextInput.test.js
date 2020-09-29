import React from 'react';
import TextInput from './TextInput';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('TextInput render and event test.', () => {
  test('should render a div that contains a label and an input element.', () => {
    const props = {
      label: 'label',
      value: 'input',
      onChange: () => {},
      type: 'text',
    };

    const { getByTestId, getByText, getByDisplayValue } = render(
      <TextInput {...props} />,
    );

    const mainDiv = getByTestId('text-input');
    const label = getByText('label');
    const input = getByDisplayValue('input');

    expect(mainDiv).toContainElement(label);
    expect(mainDiv).toContainElement(input);
  });

  test('given an empty string as initial value, the onChange callback function is called once per change returning the initial value concatenated with the changes and setting the input value.', () => {
    const mockHandler = jest.fn((value) => value);
    const initialValue = '';
    const props = {
      label: 'label',
      value: initialValue,
      onChange: mockHandler,
      type: 'text',
    };

    const { getByTestId } = render(<TextInput {...props} />);

    const mainDiv = getByTestId('text-input');

    const inputNode = mainDiv.children[1];

    fireEvent.change(inputNode, { target: { value: 'H' } });
    expect(inputNode.value).toBe('H');
    expect(mockHandler.mock.results[0].value).toBe('H');

    fireEvent.change(inputNode, { target: { value: 'Hi' } });
    expect(inputNode.value).toBe('Hi');
    expect(mockHandler.mock.results[1].value).toBe('Hi');

    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});

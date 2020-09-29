import React from 'react';
import THead from './THead';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('THead render test.', () => {
  test('should render an thead element that contains a tr element; given an array as the column prop, each array element will be mapped as a th element.', () => {
    const columns = ['th1', 'th2', 'th3'];

    const { getByTestId, getByText } = render(
      <table>
        <THead columns={columns} />
      </table>,
    );

    const tableHead = getByTestId('table-head');

    const tableHeadChildren = tableHead.children;
    expect(tableHeadChildren.length).toBe(1);

    const tableRow = tableHeadChildren[0];
    expect(tableRow).toContainHTML('tr');

    const thElementsList = tableRow.children;
    expect(thElementsList.length).toBe(columns.length);

    for (let i = 0; i < thElementsList.length; i++) {
      const thElement = getByText(columns[i]);
      expect(thElement).toContainHTML('th');
    }
  });
});

import React from 'react';
import TBody from './TBody';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('TBody render test.', () => {
  test('should render an tbody element; given an array of arrays as the column prop, each array element will be mapped as a tr element and its values, arrays, will be mapped as td elements', () => {
    const rows = [
      ['row1-col1', 'row1-col2', 'row1-col3'],
      ['row2-col1', 'row2-col2', 'row2-col3'],
      ['row3-col1', 'row3-col2', 'row3-col3'],
    ];

    const { getByTestId, getByText } = render(
      <table>
        <TBody rows={rows} />
      </table>,
    );

    const tableBody = getByTestId('table-body');

    const tableBodyChildren = tableBody.children;

    expect(tableBodyChildren.length).toBe(rows.length);

    for (let i = 0; i < tableBodyChildren.length; i++) {
      const currentRow = tableBodyChildren[i];
      expect(currentRow).toContainHTML('tr');

      const currentRowColumnsLength = currentRow.children.length;
      const currentRowPropsLength = rows[i].length;
      expect(currentRowColumnsLength).toBe(currentRowPropsLength);

      for (let j = 0; j < currentRowColumnsLength; j++) {
        const columnText = rows[i][j];
        const column = getByText(columnText);
        expect(column).toContainHTML('td');
      }
    }
  });
});

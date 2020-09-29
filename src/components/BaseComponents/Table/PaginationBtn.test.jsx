import React from 'react';
import PaginationBtn from './PaginationBtn';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('PaginationBtn render and event test.', () => {
  test('should render a div that contains list of button element with length determined by the pagination prop, totalPages property; the button that matches with the currentPage property should have the active class.', () => {
    const props = {
      pagination: { currentPage: 2, totalPages: 4 },
      pageChange: () => {},
    };

    const { getByTestId, getByText } = render(<PaginationBtn {...props} />);

    const mainDiv = getByTestId('pagination-container');

    const mainDivChilds = mainDiv.children;

    expect(mainDiv.children.length).toBe(props.pagination.totalPages);

    for (let i = 0; i < mainDivChilds.length; i++) {
      const btnText = `${i + 1}`;
      const currentBtn = getByText(btnText);
      expect(currentBtn).toContainHTML('button');
    }

    const activeBtn = getByText(`${props.pagination.currentPage}`);

    expect(activeBtn.className).toContain('active');
  });

  test('when the current page button is clicked the pageChange callback is not called; if a button that is not the current page is clicked, the callback is called and the button value returned.', () => {
    const mockHandler = jest.fn((val) => val);
    const props = {
      pagination: { currentPage: 1, totalPages: 2 },
      pageChange: mockHandler,
    };

    const { getByText } = render(<PaginationBtn {...props} />);

    const currentPage = 1;
    const secondPage = 2;
    const currentPageBtnNode = getByText(`${currentPage}`);
    const secondPageBtnNode = getByText(`${secondPage}`);

    fireEvent.click(currentPageBtnNode);
    expect(mockHandler).toHaveBeenCalledTimes(0);

    fireEvent.click(secondPageBtnNode);
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(mockHandler.mock.results[0].value).toBe(secondPage);
  });
});

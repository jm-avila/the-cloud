import React from 'react';

function PaginationBtn({ pagination, pageChange = () => {} }) {
  const { currentPage, totalPages } = pagination;

  const btns = Array.from({ length: totalPages }, (v, i) => {
    const btnPage = i + 1;
    let className = 'pagination-btn';
    if (currentPage === btnPage) className += ' active';
    return (
      <button
        className={className}
        key={btnPage}
        value={btnPage}
        onClick={handlePageChange}
      >
        {btnPage}
      </button>
    );
  });

  function handlePageChange(e) {
    const newPage = +e.target.value;
    if (newPage !== currentPage) pageChange(newPage);
  }

  return <div>{btns}</div>;
}

export default PaginationBtn;

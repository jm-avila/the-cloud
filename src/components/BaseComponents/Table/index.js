import React from 'react';
import THead from './THead';
import TBody from './TBody';
import PaginationBtn from './PaginationBtn';

function Table({ columns, rows, pagination, pageChange = () => {} }) {
  return (
    <div>
      <table>
        <THead columns={columns} />
        <TBody rows={rows} />
      </table>
      <PaginationBtn pagination={pagination} pageChange={pageChange} />
    </div>
  );
}

export default Table;

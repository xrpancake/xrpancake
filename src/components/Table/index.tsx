/* eslint-disable react/jsx-key */
import React from 'react';
import { useTable } from 'react-table';

import Spinner from '@components/Spinner';
import { Wrapper } from './styles';

type Props = {
  columns: any;
  data: any;
  loading?: boolean;
};

const Table = ({ columns, data, loading }: Props) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <Wrapper>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Headers')}</th>
              ))}
            </tr>
          ))}
        </thead>
        {!loading && (
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {loading && <Spinner />}
    </Wrapper>
  );
};

export default Table;

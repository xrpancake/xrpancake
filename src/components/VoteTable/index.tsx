import { useMemo, FC } from 'react';

import TableData from '../TableElements/TableData';

import { Wrapper } from '../TableElements/styles';

const VoteTable: FC<any> = ({ charitiesLoading }) => {
  const columns = useMemo(
    () => [
      {
        Headers: 'Charity',
        accessor: 'charity',
      },
      {
        Headers: 'Type',
        accessor: 'type',
      },
      {
        Headers: 'Location',
        accessor: 'location',
      },
      {
        Headers: 'Votes',
        accessor: 'votes',
      },
    ],
    [],
  );

  const data: any = [];

  return (
    <Wrapper>
      <TableData columns={columns} data={data} loading={charitiesLoading} />
    </Wrapper>
  );
};

export default VoteTable;

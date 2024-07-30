import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './MyPagination.scss';
import React, { useState } from 'react';

export const MyPagination = () => {
  const [page, setPage] = useState(1);

  function handleOnChange(e: React.ChangeEvent<unknown>, currentPage: number) {
    setPage(currentPage);
    console.log(page);
  }

  return (
    <Stack spacing={2} className="MyPagination">
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        onChange={handleOnChange}
      />
    </Stack>
  );
};

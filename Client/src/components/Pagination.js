import { Pagination } from 'antd';
import React from 'react';
const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};
const PaginationBar= () => (
  <>
  <div style={{paddingLeft:'200px'}}>
    <Pagination
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={500}
    />
    <br />
    </div>
  </>
);
export default PaginationBar;
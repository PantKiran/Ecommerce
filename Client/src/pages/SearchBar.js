import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


const SearchBar = (props) => (
  <Space direction="vertical">
    <Search  size='large' 
      placeholder="Search Product" onKeyUp={props.onKeyUp}
      onSearch={props.onClick}
      style={{
        width: 800,
        paddingLeft:300,
      }}
    />
    
  </Space>
);

export default SearchBar;
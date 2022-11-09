import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import React from "react";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: "Health And Beauty",
        children: [
          {
            key: "1-1",
            label: "Bath and Body",
          },
          {
            key: "1-2",
            label: "Beauty Tools",
          },
          {
            key: "1-3",
            label: "Hair Care",
          },
        ],
      },
      {
        key: "2",
        label: "Groceries",
        children: [
          {
            key: "2-1",
            label: "Cooking Ingredients",
          },
          {
            key: "2-2",
            label: "liquor",
          },
          {
            key: "2-3",
            label: "Laundry and Household",
          },
        ],
      },
    ]}
  />
);

const Categories = () => (
  <div style={{ marginTop: "10px" }}>
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Categories
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  </div>
);

export default Categories;

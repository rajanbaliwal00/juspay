import { SearchOutlined } from "@ant-design/icons";
import { Flex, Input, Table, theme, Typography } from "antd";
import debounce from "lodash/debounce";
import { useCallback, useState } from "react";

import IconSet1 from "../../assets/IconSet1.png";
import IconSet2 from "../../assets/IconSet2.png";
import IconSet3 from "../../assets/IconSet3.png";
import IconSet4 from "../../assets/IconSet4.png";
import IconSet5 from "../../assets/IconSet5.png";

const data = [
  {
    key: "1",
    icon: IconSet1,
    orderId: "#CM9801",
    user: "Natoli Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    key: "2",
    icon: IconSet2,
    orderId: "#CM9802",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry Son Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    key: "3",
    icon: IconSet3,
    orderId: "#CM9803",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocola",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    key: "4",
    icon: IconSet4,
    orderId: "#CM9804",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    key: "5",
    icon: IconSet5,
    orderId: "#CM9805",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lone Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

const searchInputStyle = {
  backgroundColor: "#F5F5F5",
  border: "none",
  borderRadius: "8px",
  padding: "4px 8px",
  fontSize: "24px",
  color: "#BDBDBD",
  boxShadow: "none",
  width: "10rem",
  height: "1.75rem",
  display: "flex",
  alignItems: "center",
};

export default function OrderListTable() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
    total: data.length,
  });
  const [sortedInfo, setSortedInfo] = useState({});

  // Add search handler with debounce
  const handleSearch = useCallback(
    debounce((value) => {
      const filtered = data.filter((item) =>
        Object.values(item).some((val) =>
          val.toString().toLowerCase().includes(value.toLowerCase())
        )
      );
      setFilteredData(filtered);
      setPagination((prev) => ({
        ...prev,
        current: 1,
        total: filtered.length,
      }));
    }, 300),
    []
  );

  const handleTableChange = (newPagination, filters, sorter) => {
    setPagination(newPagination);
    setSortedInfo(sorter);
  };

  // Add rowSelection object for Table
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys);
    },
    columnWidth: 48,
    fixed: true,
  };

  // Add onRow handler to the Table component
  const onRow = (record) => ({
    onClick: () => {
      setSelectedRow(record.key === selectedRow ? null : record.key);
    },
    style: {
      backgroundColor:
        record.key === selectedRow ? colorPrimaryLight : "transparent",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
  });

  const {
    token: {
      tableActionsBarColor,
      black10,
      black20,
      black40,
      black100,
      searchBackground,
      cityFill,
      checkBoxTickColor,
      colorPrimaryLight,
    },
  } = theme.useToken();

  const { Text } = Typography;

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
      sorter: (a, b) => a.orderId.localeCompare(b.orderId),
      sortOrder: sortedInfo.columnKey === "orderId" && sortedInfo.order,
      render: (text) => (
        <span
          style={{
            fontWeight: 400,
            fontSize: "12px",
            color: "rgba(28, 28, 28, 0.4)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <Text style={{ fontSize: ".8rem", fontWeight: 400 }}>{text}</Text>
        </span>
      ),
      width: 80,
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
      sorter: (a, b) => a.user.localeCompare(b.user),
      sortOrder: sortedInfo.columnKey === "user" && sortedInfo.order,
      filters: [...new Set(data.map((item) => item.user))].map((user) => ({
        text: user,
        value: user,
      })),
      onFilter: (value, record) => record.user.indexOf(value) === 0,
      render: (
        text,
        record // Add record parameter to access the icon
      ) => (
        <span
          style={{
            fontWeight: 400,
            fontSize: "12px",
            color: "#1C1C1C",
            fontFamily: "Inter, sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img
            src={record.icon}
            alt={`${text} avatar`}
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <Text style={{ fontSize: ".8rem", fontWeight: 400 }}>{text}</Text>
        </span>
      ),
      width: 120,
    },
    {
      title: "Project",
      dataIndex: "project",
      key: "project",
      render: (text) => (
        <span
          style={{
            fontWeight: 400,
            fontSize: "12px",
            color: "rgba(28, 28, 28, 0.4)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <Text style={{ fontSize: ".8rem", fontWeight: 400 }}>{text}</Text>
        </span>
      ),
      width: 150,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text) => (
        <span
          style={{
            fontWeight: 400,
            fontSize: "12px",
            color: "rgba(28, 28, 28, 0.4)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <Text style={{ fontSize: ".8rem", fontWeight: 400 }}>{text}</Text>
        </span>
      ),
      width: 170,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text) => (
        <span
          style={{
            fontWeight: 400,
            fontSize: "12px",
            color: "rgba(28, 28, 28, 0.4)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          <Flex align="center" gap=".3rem">
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1H9.5V0.5C9.5 0.367392 9.44732 0.240215 9.35355 0.146447C9.25979 0.0526784 9.13261 0 9 0C8.86739 0 8.74021 0.0526784 8.64645 0.146447C8.55268 0.240215 8.5 0.367392 8.5 0.5V1H3.5V0.5C3.5 0.367392 3.44732 0.240215 3.35355 0.146447C3.25979 0.0526784 3.13261 0 3 0C2.86739 0 2.74021 0.0526784 2.64645 0.146447C2.55268 0.240215 2.5 0.367392 2.5 0.5V1H1C0.734784 1 0.48043 1.10536 0.292893 1.29289C0.105357 1.48043 0 1.73478 0 2V12C0 12.2652 0.105357 12.5196 0.292893 12.7071C0.48043 12.8946 0.734784 13 1 13H11C11.2652 13 11.5196 12.8946 11.7071 12.7071C11.8946 12.5196 12 12.2652 12 12V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1ZM2.5 2V2.5C2.5 2.63261 2.55268 2.75979 2.64645 2.85355C2.74021 2.94732 2.86739 3 3 3C3.13261 3 3.25979 2.94732 3.35355 2.85355C3.44732 2.75979 3.5 2.63261 3.5 2.5V2H8.5V2.5C8.5 2.63261 8.55268 2.75979 8.64645 2.85355C8.74021 2.94732 8.86739 3 9 3C9.13261 3 9.25979 2.94732 9.35355 2.85355C9.44732 2.75979 9.5 2.63261 9.5 2.5V2H11V4H1V2H2.5ZM11 12H1V5H11V12Z"
                fill={black100}
              />
            </svg>
            <Text style={{ fontSize: ".8rem", fontWeight: 400 }}>{text}</Text>
          </Flex>
        </span>
      ),
      width: 110,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        // Define status colors
        const statusColors = {
          "In Progress": "#8A8CD9",
          Complete: "#4AA785",
          Pending: "#59A8D4",
          Approved: "#FFC555",
          Rejected: black40,
        };

        return (
          <span
            style={{
              fontWeight: 400,
              fontSize: "12px",
              fontFamily: "Inter, sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: statusColors[text] || black20,
                display: "inline-block",
              }}
            />
            <Text
              style={{
                fontSize: ".8rem",
                fontWeight: 400,
                color: statusColors[text] || "rgba(28, 28, 28, 0.4)",
              }}
            >
              {text}
            </Text>
          </span>
        );
      },
      width: 90,
    },
    {
      title: "",
      key: "actions",
      width: 50,
      render: (_, record) => (
        <div
          style={{
            visibility: record.key === selectedRow ? "visible" : "hidden",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <svg
            width="16"
            height="3"
            viewBox="0 0 16 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0Z"
              fill={black100}
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <Flex vertical style={{ padding: 24, margin: 0, gap: ".8rem" }}>
      <Text style={{ fontSize: ".9rem", fontWeight: 600 }}>Order List</Text>
      <Flex
        style={{
          padding: ".5rem",
          gap: "1rem",
          borderRadius: ".5rem",
          background: tableActionsBarColor,
        }}
        align="center"
        justify="space-between"
      >
        <Flex style={{ gap: ".5rem" }}>
          <svg
            style={{ cursor: "pointer" }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.625 1.375C7.625 1.02982 7.34518 0.75 7 0.75C6.65482 0.75 6.375 1.02982 6.375 1.375V6.375H1.375C1.02982 6.375 0.75 6.65482 0.75 7C0.75 7.34518 1.02982 7.625 1.375 7.625H6.375V12.625C6.375 12.9702 6.65482 13.25 7 13.25C7.34518 13.25 7.625 12.9702 7.625 12.625V7.625H12.625C12.9702 7.625 13.25 7.34518 13.25 7C13.25 6.65482 12.9702 6.375 12.625 6.375H7.625V1.375Z"
              fill={black100}
            />
          </svg>
          <svg
            style={{ cursor: "pointer" }}
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.625 5C14.625 5.16576 14.5592 5.32473 14.4419 5.44194C14.3247 5.55915 14.1658 5.625 14 5.625H4C3.83424 5.625 3.67527 5.55915 3.55806 5.44194C3.44085 5.32473 3.375 5.16576 3.375 5C3.375 4.83424 3.44085 4.67527 3.55806 4.55806C3.67527 4.44085 3.83424 4.375 4 4.375H14C14.1658 4.375 14.3247 4.44085 14.4419 4.55806C14.5592 4.67527 14.625 4.83424 14.625 5ZM17.125 0.625H0.875C0.70924 0.625 0.550268 0.690848 0.433058 0.808058C0.315848 0.925269 0.25 1.08424 0.25 1.25C0.25 1.41576 0.315848 1.57473 0.433058 1.69194C0.550268 1.80915 0.70924 1.875 0.875 1.875H17.125C17.2908 1.875 17.4497 1.80915 17.5669 1.69194C17.6842 1.57473 17.75 1.41576 17.75 1.25C17.75 1.08424 17.6842 0.925269 17.5669 0.808058C17.4497 0.690848 17.2908 0.625 17.125 0.625ZM10.875 8.125H7.125C6.95924 8.125 6.80027 8.19085 6.68306 8.30806C6.56585 8.42527 6.5 8.58424 6.5 8.75C6.5 8.91576 6.56585 9.07473 6.68306 9.19194C6.80027 9.30915 6.95924 9.375 7.125 9.375H10.875C11.0408 9.375 11.1997 9.30915 11.3169 9.19194C11.4342 9.07473 11.5 8.91576 11.5 8.75C11.5 8.58424 11.4342 8.42527 11.3169 8.30806C11.1997 8.19085 11.0408 8.125 10.875 8.125Z"
              fill={black100}
            />
          </svg>
          <svg
            style={{ cursor: "pointer" }}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.19194 10.3081C1.07473 10.1908 0.91576 10.125 0.75 10.125C0.58424 10.125 0.425269 10.1908 0.308058 10.3081C0.190848 10.4253 0.125 10.5842 0.125 10.75C0.125 10.9158 0.190848 11.0747 0.308058 11.1919L2.80806 13.6919C2.92527 13.8092 3.08424 13.875 3.25 13.875C3.41576 13.875 3.57473 13.8092 3.69194 13.6919L6.19171 11.1922C6.30892 11.075 6.375 10.9158 6.375 10.75C6.375 10.5842 6.30915 10.4253 6.19194 10.3081C6.07473 10.1908 5.91576 10.125 5.75 10.125C5.58424 10.125 5.42527 10.1908 5.30806 10.3081L3.25 12.3661L1.19194 10.3081Z"
              fill={black100}
            />
            <path
              d="M2.625 0.75V13.25C2.625 13.5952 2.90482 13.875 3.25 13.875C3.59518 13.875 3.875 13.5952 3.875 13.25V0.75C3.875 0.404822 3.59518 0.125 3.25 0.125C2.90482 0.125 2.625 0.404822 2.625 0.75Z"
              fill={black100}
            />
            <path
              d="M12.8077 3.69162C12.9249 3.80883 13.0842 3.875 13.25 3.875C13.4158 3.875 13.5747 3.80915 13.6919 3.69194C13.8092 3.57473 13.875 3.41576 13.875 3.25C13.875 3.08424 13.8092 2.92527 13.6919 2.80806L11.1919 0.308058C11.0747 0.190848 10.9158 0.125 10.75 0.125C10.5842 0.125 10.4253 0.190848 10.3081 0.308058L7.80806 2.80806C7.69085 2.92527 7.625 3.08424 7.625 3.25C7.625 3.26001 7.62524 3.27002 7.62572 3.28002C7.63318 3.43522 7.69819 3.58207 7.80806 3.69194C7.92527 3.80915 8.08424 3.875 8.25 3.875C8.41576 3.875 8.57473 3.80915 8.69194 3.69194L10.75 1.63388L12.8077 3.69162Z"
              fill={black100}
            />
            <path
              d="M11.375 13.25V0.75C11.375 0.404822 11.0952 0.125 10.75 0.125C10.4048 0.125 10.125 0.404822 10.125 0.75V13.25C10.125 13.5952 10.4048 13.875 10.75 13.875C11.0952 13.875 11.375 13.5952 11.375 13.25Z"
              fill={black100}
            />
          </svg>
        </Flex>
        <Flex>
          <div
            style={{
              ...searchInputStyle,
              backgroundColor: searchBackground,
              border: `1px solid ${black10}`,
            }}
          >
            <SearchOutlined
              style={{
                fontSize: "16px",
                color: black20,
                marginRight: "8px",
              }}
            />
            <style>
              {`
          .ant-input::placeholder {
            color: ${black20};
            opacity: 1;
          }
        `}
            </style>
            <Input
              onChange={(e) => {
                setSearchText(e.target.value);
                handleSearch(e.target.value);
              }}
              value={searchText}
              placeholder="Search"
              className="custom-placeholder"
              bordered={false}
              style={{
                fontSize: "14px",
                color: "#BDBDBD",
                backgroundColor: "transparent",

                padding: 0,
                flex: 1,
                boxShadow: "none",
              }}
              allowClear
            />
          </div>
        </Flex>
      </Flex>
      <div
        style={{
          borderRadius: "10px",
          padding: "24px 18px",
          boxShadow: "0 0 2px rgba(0,0,0,0.03)",
          minWidth: 950,
          fontFamily: "Inter, sans-serif",
        }}
      >
        <style>
          {`
    .ant-table-selection-column {
      padding-left: 16px !important;
      padding-right: 8px !important;
    }
    .ant-checkbox-wrapper {
      font-family: 'Inter', sans-serif;
    }
    .ant-checkbox {
      top: 0;
    }
      .ant-checkbox-checked .ant-checkbox-inner:after {
  border-color: ${checkBoxTickColor} !important;
}
    .ant-checkbox-inner {
      border-radius: 4px;
      border-color: #d9d9d9;
    }
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: ${cityFill};
    }
      .custom-ant-table-figma .ant-table-tbody > tr:hover > td {
    background-color: ${colorPrimaryLight} !important;
  }
  
  .custom-ant-table-figma .ant-table-tbody > tr.selected-row > td {
    background-color: ${colorPrimaryLight} !important;
  }
    .custom-ant-table-figma .ant-table-thead > tr > th {

  color: ${black40}
}
  .ant-table-column-sorter {
    color: ${black40};
  }
  
  .ant-table-filter-trigger {
    color: ${black40};
  }
  
  .ant-pagination-item-active {
    border-color: ${cityFill};
    background-color: ${cityFill};
  }
  
  .ant-pagination-item-active a {
    color: white;
  }
  
  .ant-select-selector {
    border-radius: 4px !important;
  }
  
  .ant-pagination-options-quick-jumper input {
    border-radius: 4px;
  }

  `}
        </style>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={filteredData}
          bordered={false}
          pagination={{
            ...pagination,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `Total ${total} items`,
            pageSizeOptions: ["5", "10", "20", "50"],
          }}
          className="custom-ant-table-figma"
          onRow={onRow}
          onChange={handleTableChange}
          style={{
            background: "transparent",
          }}
        />
      </div>
    </Flex>
  );
}

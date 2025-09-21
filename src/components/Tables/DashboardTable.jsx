import { Table, theme, Typography } from "antd";

const data = [
  {
    key: 1,
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    key: 2,
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    key: 3,
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    key: 4,
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  {
    key: 5,
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81",
  },
];

export default function DashboardTable() {
  const {
    token: { chartBackground, black40 },
  } = theme.useToken();
  const { Text } = Typography;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <span className="custom-td">
          <Text>{text}</Text>
        </span>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "left",
      render: (text) => (
        <span className="custom-td" style={{ textAlign: "left" }}>
          <Text>{text}</Text>
        </span>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      align: "left",
      render: (text) => (
        <span className="custom-td" style={{ textAlign: "left" }}>
          <Text>{text}</Text>
        </span>
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "left",
      render: (text) => (
        <span className="custom-td" style={{ textAlign: "left" }}>
          <Text>{text}</Text>
        </span>
      ),
    },
  ];

  return (
    <div className="custom-card" style={{ background: chartBackground }}>
      <div style={{ marginBottom: "1rem" }}>
        <Text style={{ fontWeight: 600, fontSize: ".9rem" }}>
          Top Selling Products
        </Text>
      </div>
      <style>
        {`
          .custom-ant-table .ant-table-thead > tr > th {
            color: ${black40};
          }
        `}
      </style>
      <Table
        columns={columns}
        dataSource={data}
        bordered={false}
        pagination={false}
        rowClassName={() => "custom-row"}
        className="custom-ant-table"
      />
    </div>
  );
}

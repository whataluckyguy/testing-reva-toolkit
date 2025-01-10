import { Table } from "reva-toolkit";

const tableColumns = ["Name", "ID"];
const tableData = [
  { Name: "Lalit", ID: "234" },
  { Name: "John", ID: "235" },
  { Name: "Jane", ID: "236" },
  { Name: "Doe", ID: "237" },
  { Name: "Alice", ID: "238" },
  { Name: "Bob", ID: "239" },
  { Name: "Charlie", ID: "240" },
  { Name: "David", ID: "241" },
  { Name: "Eve", ID: "242" },
  { Name: "Frank", ID: "243" },
  { Name: "Grace", ID: "244" },
  { Name: "Hank", ID: "245" },
  { Name: "Ivy", ID: "246" },
  { Name: "Jack", ID: "247" },
  { Name: "Kathy", ID: "248" },
  { Name: "Leo", ID: "249" },
  { Name: "Mona", ID: "250" },
  { Name: "Nina", ID: "251" },
  { Name: "Oscar", ID: "252" },
  { Name: "Paul", ID: "253" },
  { Name: "Quinn", ID: "254" },
  { Name: "Rick", ID: "255" },
  { Name: "Steve", ID: "256" },
  { Name: "Tina", ID: "257" },
  { Name: "Uma", ID: "258" },
  { Name: "Vince", ID: "259" },
  { Name: "Wendy", ID: "260" },
];

const TableView = () => {
  return <Table columns={tableColumns} data={tableData} />;
};

export default TableView;

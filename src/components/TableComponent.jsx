import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Badge,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";

const data = [
  {
    name: "Gowri Bharadwaj",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
    status: "active",
  },
  {
    name: "Nagabhushana",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
    status: "active",
  },
  {
    name: "Kanakadurga",
    Role: "Federal Councillor",
    departement: "The Federal Department of Home Affairs (FDHA)",
    status: "active",
  },
  {
    name: "Manu Bharadwaj",
    Role: "Federal Councillor",
    departement: "The Federal Department of Foreign Affairs (FDFA)",
    status: "active",
  },
  {
    name: "Shalini",
    Role: "Federal Councillor",
    departement: "The Federal Department of Finance (FDF)",
    status: "active",
  },
  {
    name: "Bharath",
    Role: "Federal Councillor",
    departement:
      "The Federal Department of Economic Affairs, Education and Research (EAER)",
    status: "active",
  },
  {
    name: "Shankar",
    Role: "Federal Councillor",
    departement: "The Federal Department of Justice and Police (FDJP)",
    status: "active",
  },
];

function TableComponent() {
  return (
    <Card className="mt-4">
      <Title>List of Swiss Federal Councillours</Title>
      <Table className="mt-5">
        <TableHead>
          <TableRow>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell>Department</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                <Text>{item.Role}</Text>
              </TableCell>
              <TableCell>
                <Text>{item.departement}</Text>
              </TableCell>
              <TableCell>
                <Badge color="emerald" icon={StatusOnlineIcon}>
                  {item.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default TableComponent;

import { useSelector } from "react-redux";
import { selectBooks } from "utils/bookSlice";
import { Column, HeaderCell, Cell } from "rsuite-table";
import { Table } from "rsuite-table";
import { InterfaceBook } from "interface/book.interface";
import Actions from "./Actions/Actions";
import "rsuite-table/dist/css/rsuite-table.css";
import { useState } from "react";

const TableElement = () => {
  const books = useSelector(selectBooks);

  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [loading, setLoading] = useState(false);

  const getData = () => {
    if (sortColumn && sortType) {
      return books?.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === "string") {
          // x = x.charCodeAt();
        }
        if (typeof y === "string") {
          // y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return books;
  };

  const handleSortColumn = (sortColumn: any, sortType: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  return (
    <Table
      data={getData()}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
      loading={loading}
      height={300}
    >
      <Column width={120} sortable>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>
      <Column width={150} sortable>
        <HeaderCell>Category</HeaderCell>
        <Cell dataKey="category" />
      </Column>
      <Column width={110} sortable>
        <HeaderCell>Quantity</HeaderCell>
        <Cell dataKey="quantity" />
      </Column>
      <Column width={110} sortable>
        <HeaderCell>Amount</HeaderCell>
        <Cell dataKey="amount" />
      </Column>
      <Column width={220} sortable>
        <HeaderCell>Create Date</HeaderCell>
        <Cell dataKey="createdAt" />
      </Column>
      <Column width={300}>
        <HeaderCell>Actions</HeaderCell>
        <Cell>
          {(rowData: InterfaceBook) => {
            return <Actions book={rowData} />;
          }}
        </Cell>
      </Column>
    </Table>
  );
};

export default TableElement;

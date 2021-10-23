import { useSelector } from "react-redux";
import { selectBooks } from "utils/bookSlice";
import Row from "./Row/Row";
import "./table.module.scss";

const Table = () => {
  const books = useSelector(selectBooks);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Amount</th>
          <th>Create Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Row key={book._id} book={book} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;

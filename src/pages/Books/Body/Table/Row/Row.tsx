import { InterfaceBook } from "interface/book.interface";
import Actions from "../Actions/Actions";

const Row = (props: { book: InterfaceBook }) => {
  return (
    <tr>
      <td>{props.book.name}</td>
      <td>{props.book.category}</td>
      <td>{props.book.quantity}</td>
      <td>{props.book.amount}</td>
      <td>{props.book.createdAt}</td>
      <td>
        <Actions book={props.book} />
      </td>
    </tr>
  );
};

export default Row;

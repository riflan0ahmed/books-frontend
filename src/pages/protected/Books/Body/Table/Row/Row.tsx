import { InterfaceBook } from "utils/interface/book.interface";
import Actions from "../Actions/Actions";
const { DateTime } = require("luxon");

const Row = (props: { book: InterfaceBook }) => {
  return (
    <tr>
      <td>{props.book.name}</td>
      <td>{props.book.category}</td>
      <td>{props.book.quantity}</td>
      <td>{props.book.amount}</td>
      <td>{DateTime.fromISO(props.book.createdAt).toFormat("yyyy LLL dd")}</td>
      <td>
        <Actions book={props.book} />
      </td>
    </tr>
  );
};

export default Row;

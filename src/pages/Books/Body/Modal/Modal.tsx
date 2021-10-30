import Create from "./Create/Create";
import Edit from "./Edit/Edit";
import Preview from "./Preview/Preview";
import Archive from "./Archive/Archive";
import Delete from "./Delete/Delete";

const Modal = () => {
  return (
    <>
      <Preview />
      <Edit />
      <Create />
      <Archive />
      <Delete />
    </>
  );
};

export default Modal;

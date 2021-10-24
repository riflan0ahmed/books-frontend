import Create from "./Create/Create";
import Edit from "./Edit/Edit";
import Preview from "./Preview/Preview";
import Delete from "./Delete/Delete";

const Modal = () => {
  return (
    <>
      <Preview />
      <Edit />
      <Create />
      <Delete />
    </>
  );
};

export default Modal;

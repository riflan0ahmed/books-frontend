import Amount from "./Amount/Amount";
import Category from "./Category/Category";
import Name from "./Name/Name";
import Quantity from "./Quantity/Quantity";

const Field = () => {
  return (
    <>
      <Name />
      <Category />
      <Quantity />
      <Amount />
    </>
  );
};

export default Field;

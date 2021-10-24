import Pagination from "./Pagination/Pagination";
import Search from "./Search/Search";
import TableElement from "./Table/Table";
import Modal from "./Modal/Modal";

const Body = () => {
  return (
    <div className="flex flex-col bg-white shadow-md rounded-xl">
      <div className="flex px-5 py-3 border-b">
        <span className="text-xl font-medium text-gray-700">Books</span>
      </div>
      <div className="flex flex-col p-5">
        <Search />
        <TableElement />
        <Pagination />
        <Modal />
      </div>
    </div>
  );
};

export default Body;

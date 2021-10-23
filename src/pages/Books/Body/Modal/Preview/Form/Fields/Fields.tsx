import { selectBook } from "utils/bookSlice";
import { useAppSelector } from "utils/hooks/hook";

const Fields = () => {
  const book = useAppSelector(selectBook);
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-6 gap-5 py-3">
        <span className="col-span-2 text-gray-800 uppercase">Name :</span>
        <span className="col-span-4 text-gray-600 capitalize">{book.name}</span>
      </div>
      <div className="grid grid-cols-6 gap-5 py-3">
        <span className="col-span-2 text-gray-800 uppercase">Category :</span>
        <span className="col-span-4 text-gray-600 capitalize">
          {book.category}
        </span>
      </div>
      <div className="grid grid-cols-6 gap-5 py-3">
        <span className="col-span-2 text-gray-800 uppercase">Quantity :</span>
        <span className="col-span-4 text-gray-600 capitalize">
          {book.quantity}
        </span>
      </div>
      <div className="grid grid-cols-6 gap-5 py-3">
        <span className="col-span-2 text-gray-800 uppercase">Amount :</span>
        <span className="col-span-4 text-gray-600 capitalize">
          {book.amount}
        </span>
      </div>
      <div className="grid grid-cols-6 gap-5 py-3">
        <span className="col-span-2 text-gray-800 uppercase">Quantity :</span>
        <span className="col-span-4 text-gray-600 capitalize">
          {book.quantity}
        </span>
      </div>
      <div className="grid grid-cols-6 gap-5 py-3">
        <span className="col-span-2 text-gray-800 uppercase">
          Created Date :
        </span>
        <span className="col-span-4 text-gray-600 capitalize">
          {book.createdAt}
        </span>
      </div>
      <div className="grid grid-cols-6 gap-5 py-3">
        <span className="col-span-2 text-gray-800 uppercase">
          Updated Date :
        </span>
        <span className="col-span-4 text-gray-600 capitalize">
          {book.updatedAt}
        </span>
      </div>
    </div>
  );
};

export default Fields;

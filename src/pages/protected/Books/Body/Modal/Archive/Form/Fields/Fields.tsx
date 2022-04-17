const Fields = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-medium text-gray-800">Are you sure?</h1>
      <p className="text-base font-normal text-gray-600">
        Do you really want to delete this data? The process cannot be undone
      </p>
    </div>
  );
};

export default Fields;

interface NavbarProps {
  label: string;
}

const Navbar = (props: NavbarProps) => {
  const { label } = props;

  return (
    <div className="grid w-full grid-cols-12 p-5 bg-white">
      <div className="col-span-2 my-auto">
        <label className="text-lg font-semibold text-gray-800">{label}</label>
      </div>
      <div className="col-span-10"></div>
    </div>
  );
};

export default Navbar;

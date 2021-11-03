import { blue } from "@mui/material/colors";

interface NavbarProps {
  label: string;
}

const Navbar = (props: NavbarProps) => {
  const { label } = props;
  const color = blue[500];

  return (
    <div
      className="grid w-full grid-cols-12 p-5"
      style={{ backgroundColor: color }}
    >
      <div className="col-span-2 my-auto">
        <label className="text-lg font-semibold text-white">{label}</label>
      </div>
      <div className="col-span-10"></div>
    </div>
  );
};

export default Navbar;

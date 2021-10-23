import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { selectBook } from "utils/bookSlice";
// import MenuItem from "@mui/material/MenuItem";
import { useAppSelector } from "utils/hooks/hook";

const Category = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const category = useAppSelector(selectBook).category;

  return (
    <div className="flex py-2">
      <TextField
        // select
        label="Category"
        defaultValue={category}
        color="primary"
        variant="filled"
        fullWidth={true}
        {...register("category")}
        error={!!errors?.category}
        helperText={errors?.category?.message}
      ></TextField>
    </div>
  );
};

export default Category;

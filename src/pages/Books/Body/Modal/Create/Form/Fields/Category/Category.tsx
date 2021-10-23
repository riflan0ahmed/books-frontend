import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const Category = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex py-2">
      <TextField
        label="Category"
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

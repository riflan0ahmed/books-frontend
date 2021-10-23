import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { selectBook } from "utils/bookSlice";
import { useAppSelector } from "utils/hooks/hook";

const Quantity = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const quantity = useAppSelector(selectBook).quantity;

  return (
    <div className="flex py-2">
      <TextField
        label="Quantity"
        defaultValue={quantity}
        color="primary"
        variant="filled"
        fullWidth={true}
        {...register("quantity")}
        error={!!errors?.quantity}
        helperText={errors?.quantity?.message}
      />
    </div>
  );
};

export default Quantity;

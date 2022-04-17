import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const Quantity = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex py-2">
      <TextField
        label="Quantity"
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

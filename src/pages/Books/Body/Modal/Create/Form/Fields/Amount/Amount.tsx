import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const Amount = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex py-2">
      <TextField
        label="Amount"
        color="primary"
        variant="filled"
        fullWidth={true}
        {...register("amount")}
        error={!!errors?.amount}
        helperText={errors?.amount?.message}
      />
    </div>
  );
};

export default Amount;

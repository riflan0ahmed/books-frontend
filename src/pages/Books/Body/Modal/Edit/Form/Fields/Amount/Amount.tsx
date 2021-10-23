import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { selectBook } from "utils/bookSlice";
import { useAppSelector } from "utils/hooks/hook";

const Amount = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const amount = useAppSelector(selectBook).amount;

  return (
    <div className="flex py-2">
      <TextField
        label="Amount"
        defaultValue={amount}
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

import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { selectBook } from "utils/redux/bookSlice";
import { useAppSelector } from "utils/hooks/hook";

const Name = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const name = useAppSelector(selectBook).name;

  return (
    <div className="flex py-2">
      <TextField
        label="Name"
        defaultValue={name}
        color="primary"
        variant="filled"
        fullWidth={true}
        {...register("name")}
        error={!!errors?.name}
        helperText={errors?.name?.message}
      />
    </div>
  );
};

export default Name;

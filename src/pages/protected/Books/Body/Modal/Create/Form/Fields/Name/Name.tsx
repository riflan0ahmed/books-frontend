import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";

const Name = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex py-2">
      <TextField
        label="Name"
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

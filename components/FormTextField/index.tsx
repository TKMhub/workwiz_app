import { TextField } from "@mui/material";

type Props = {
  label: string;
  name: string;
  value: string | null | undefined;
  error?: string | null | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  rows?: number;
};

const FormTextField = ({ label, name, value, error = "", onChange, multiline, rows }: Props) => {
    return (
<TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id={name}
      label={label}
      name={name}
      autoComplete={name}
      autoFocus
      sx={{ mb: 2 }}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={error}
      
    />
    );
    };
    
    export default FormTextField;
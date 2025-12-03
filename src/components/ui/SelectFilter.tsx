import { FormControl, Select, MenuItem } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";

interface SelectFilterProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  minWidth?: number;
  fullWidth?: boolean;
}

const SelectFilter = ({
  label,
  value,
  options,
  onChange,
  minWidth = 100,
  fullWidth = false,
}: SelectFilterProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl size="small" fullWidth={fullWidth} sx={{ minWidth: fullWidth ? undefined : minWidth }}>
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => (
          <span>
            <span className="text-gray-500">{label}:</span> {selected}
          </span>
        )}
        sx={{
          fontSize: "0.875rem",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#e5e7eb",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#c7d2fe",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#6366f1",
            borderWidth: "1px",
          },
          "& .MuiSelect-select": {
            padding: "0.625rem 1rem",
            paddingRight: "2rem",
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
              border: "1px solid #e5e7eb",
              marginTop: "0.25rem",
              "& .MuiMenuItem-root": {
                fontSize: "0.875rem",
                padding: "0.5rem 1rem",
                "&:hover": {
                  backgroundColor: "#eef2ff",
                },
                "&.Mui-selected": {
                  backgroundColor: "#e0e7ff",
                  "&:hover": {
                    backgroundColor: "#c7d2fe",
                  },
                },
              },
            },
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFilter;

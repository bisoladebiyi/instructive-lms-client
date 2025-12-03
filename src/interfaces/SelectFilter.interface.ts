export interface ISelectFilterProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  minWidth?: number;
  fullWidth?: boolean;
}
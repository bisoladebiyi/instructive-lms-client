export interface IInput {
    className?: string;
    inputClass?: string;
    label: string;
    type?: string;
    id: string;
    name: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export interface IButton {
    className?: string;
    text: string;
    onClick?: () => void;
    type?: "button" | "reset" | "submit" | undefined;
}
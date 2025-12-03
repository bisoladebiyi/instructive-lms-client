export interface IEmptyState {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  actionLink?: string;
  onAction?: () => void;
}
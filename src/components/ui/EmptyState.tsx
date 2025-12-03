import { Link } from "react-router";
import Button from "./Button";
import type { IEmptyState } from "../../interfaces/EmptyState.interface";

const EmptyState = ({
  icon,
  title,
  description,
  actionLabel,
  actionLink,
  onAction,
}: IEmptyState) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {icon && (
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-500 text-center max-w-md mb-6">
          {description}
        </p>
      )}
      {actionLabel && actionLink && (
        <Link to={actionLink}>
          <Button text={actionLabel} />
        </Link>
      )}
      {actionLabel && onAction && !actionLink && (
        <Button text={actionLabel} onClick={onAction} />
      )}
    </div>
  );
};

export default EmptyState;

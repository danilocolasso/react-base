import { cn } from "@/utils/className";
import { formatCurrency } from "@/utils/formatCurrency";

export interface TotalProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
}

export const Total: React.FC<TotalProps> = 
({ children, className, label, value, ...props }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-16 text-gray-500',
        className
      )}
      {...props}
    >
      <span>{label}</span>
      <span>{formatCurrency(value)}</span>
    </div>
  );
};
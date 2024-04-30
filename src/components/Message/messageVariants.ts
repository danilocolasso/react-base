import { VariantProps, cva } from 'class-variance-authority';

export const messageVariants = cva(
  'p-1 rounded-sm text-xs whitespace-nowrap',
  {
    variants: {
      variant: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        destructive: 'text-destructive',
        success: 'text-success',
        warning: 'text-warning',
        info: 'text-info',
        accent: 'text-accent',
        neutral: 'text-neutral',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export type MessageVariantProps = VariantProps<typeof messageVariants>;

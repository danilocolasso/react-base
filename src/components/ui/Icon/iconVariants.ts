import { VariantProps, cva } from 'class-variance-authority';

export const iconVariants = cva(
  '',
  {
    variants: {
      size: {
        small: 'w-4 h-4',
        medium: 'w-6 h-6',
        large: 'w-8 h-8',
      },
      color: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        accent: 'text-accent',
        muted: 'text-muted',
      }
    },
    defaultVariants: {
      size: 'small',
      color: 'muted',
    }
  }
);

export type IconVariantProps = VariantProps<typeof iconVariants>;
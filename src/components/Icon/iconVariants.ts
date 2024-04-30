import { VariantProps, cva } from 'class-variance-authority';

export const iconVariants = cva(
  '',
  {
    variants: {
      size: {
        xs: 'w-2 h-2',
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
        xl: 'w-12 h-12',
        '2xl': 'w-16 h-16',
      },
      color: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        accent: 'text-accent',
        muted: 'text-muted',
      }
    },
    defaultVariants: {
      size: 'sm',
      color: 'muted',
    }
  }
);

export type IconVariantProps = VariantProps<typeof iconVariants>;

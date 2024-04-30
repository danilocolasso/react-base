import { VariantProps, cva } from 'class-variance-authority';

export const paperVariants = cva(
  'flex flex-col mt-5 w-full',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        tertiary: 'bg-tertiary text-tertiary-foreground',
        green: 'bg-paper-green',
        blue: 'bg-paper-blue',
        yellow: 'bg-paper-yellow',
        purple: 'bg-paper-purple',
      },
    },
    defaultVariants: {
      variant: 'tertiary',
    },
  }
);

export const paperBorderVariants = cva(
  'flex flex-col w-full h-5 -mt-5 bg-paper-primary bg-repeat-x bg-[length:1.25rem_1.25rem]',
  {
    variants: {
      variant: {
        primary: 'bg-paper-border-primary',
        secondary: 'bg-paper-border-secondary',
        tertiary: 'bg-paper-border-tertiary',
        green: 'bg-paper-border-green',
        blue: 'bg-paper-border-blue',
        yellow: 'bg-paper-border-yellow',
        purple: 'bg-paper-border-purple',
      },
    },
    defaultVariants: {
      variant: 'tertiary',
    },
  }
);

export type PaperVariantProps = VariantProps<typeof paperVariants>;
export type PaperBorderVariantProps = VariantProps<typeof paperBorderVariants>;

import * as React from 'react';
import { iconVariants, IconVariantProps } from './iconVariants';
import { Icons } from '.';

interface IconProps extends IconVariantProps {
  name: keyof typeof Icons;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color, className }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    console.error(`Icon "${name}" not found`);
    return null;
  }

  const iconClassName = iconVariants({ size, color, className });
  return <IconComponent className={iconClassName} />;
};

export { Icon };

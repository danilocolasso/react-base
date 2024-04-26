import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export const Section: React.FC<SectionProps> = ({ children, ...rest }) => (
  <section {...rest}>{children}</section>
);

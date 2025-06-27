import { MouseEventHandler } from 'react';

export type Variant = 'light' | 'dark' | 'accent';

export interface HelpLinkProps {
  href: string;
  text: string;
  iconId: string;
  variant?: Variant;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

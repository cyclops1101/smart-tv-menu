import {ReactNode} from 'react';

export type TMenuItem = {
  name: string;
  path: string;
  icon: ReactNode;
};

export type TMenu = TMenuItem[];

import React, { ReactNode } from 'react';

type TMenuItem = {
    name: string;
    path: string;
    icon: ReactNode;
};

type TMenuProps = {
    onHide: () => void;
    onShow: () => void;
    items: TMenuItem[];
};
declare function Menu({ onHide, onShow, items }: TMenuProps): React.JSX.Element;

export { Menu as default };

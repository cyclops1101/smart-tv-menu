import React from "react";
import { TMenuItem } from "../types";

type TMenuProps = {
  onHide: () => void;
  onShow: () => void;
  items: TMenuItem[];
};

export default function Menu({ onHide, onShow, items }: TMenuProps) {
  function show() {
    onShow();
  }

  function hide() {
    onHide();
  }

  return (
    <nav
      className="absolute h-[90%] left-10 top-10 group  overflow-hidden w-[45px] hover:w-[200px] transition-all group duration-[1000] ease-in-out rounded-md"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <ul
        className="w-[200px] h-full text-gray-300 bg-opacity-gradient
    py-4"
      >
        {items.map((item: TMenuItem) => (
          <li key={item.name} className="h-18">
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MenuItem({ item }: { item: TMenuItem }) {
  return (
    <a
      href={item.path}
      className="flex items-center justify-start gap-x-4 text-gray-400 hover:text-white px-3 py-2 text-2xl font-semibold"
    >
      <span className="block">{item.icon}</span> {item.name}
    </a>
  );
}

import React from "react";
import NavLink from "./NavLink";

// Mendefinisikan tipe untuk props yang diterima
interface Link {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: Link[]; // Array dari objek Link
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
  return (
    <ul className="menu-overlay flex flex-col py-4 items-center">
      {/* Render setiap link menggunakan NavLink */}
      {links.map((link, index) => (
        <li key={index}>
          <NavLink key={link.path} href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;

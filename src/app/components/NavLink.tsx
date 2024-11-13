import Link from "next/link";

interface NavLinkProps {
  href: string | URL;
  title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
        {title}
      </a>
    </Link>
  );
};

export default NavLink;

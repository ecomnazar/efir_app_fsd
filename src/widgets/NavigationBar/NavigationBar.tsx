import { navbarLinks } from "@/shared/lib/constants/navbarLinks";
import NavbarLink from "@/shared/ui/NavbarLink";

export const NavigationBar = () => {
  return (
    <nav className="w-[325px] h-screen bg-primary fixed items-center py-10 px-6">
      <ul className="flex flex-col gap-4">
        {navbarLinks.map((link, index) => (
          <NavbarLink key={index} link={link.url} text={link.text} />
        ))}
      </ul>
    </nav>
  );
};
import { NavLink } from "react-router-dom";

type Props = {
    link: string;
    text: string
}

const NavbarLink = ({ link, text }: Props) => {
  return (
    <NavLink
      to={link}
      className="p-4 rounded-lg text-lg font-medium cursor-pointer text-primary-light"
    >
      {text}
    </NavLink>
  );
};

export default NavbarLink;

import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import { MenuList, MenuItem } from "./Navbar.styled";
import { menuHeader } from "constants/constants";

const Navbar = () => {
  const { t } = useTranslation();

  const headerMenu = menuHeader;

  return (
    <MenuList>
      {headerMenu.map(({ menu }, index) => (
        <Link
          activeClass="active"
          to={menu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          key={index}
        >
          <MenuItem>{t(menu)}</MenuItem>
        </Link>
      ))}
    </MenuList>
  );
};

export default Navbar;

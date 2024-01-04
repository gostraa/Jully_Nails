import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

import { MenuList, MenuItem } from "./Navbar.styled";

const Navbar = () => {
  const { t } = useTranslation();

  const menu = [{ menu: "diplomes" }, { menu: "price" }, { menu: "reviews" }];

  return (
    <MenuList>
      {menu.map(({ menu }, idx) => (
        <Link
          activeClass="active"
          to={menu}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
          key={idx}
        >
          <MenuItem>{t(menu)}</MenuItem>
        </Link>
      ))}
    </MenuList>
  );
};

export default Navbar;

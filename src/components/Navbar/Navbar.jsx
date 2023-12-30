import { useTranslation } from "react-i18next";

import { MenuList, MenuItem } from "./Navbar.styled";

const Navbar = () => {
  const { t } = useTranslation();

  const menu = [{ menu: "diplomes" }, { menu: "price" }, { menu: "reviews" }];

  return (
    <MenuList>
      {menu.map(({ menu }, idx) => (
        <MenuItem key={idx}>{t(menu)}</MenuItem>
      ))}
    </MenuList>
  );
};

export default Navbar;

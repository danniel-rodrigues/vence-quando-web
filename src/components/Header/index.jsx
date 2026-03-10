import Logo from "../../assets/vence-quando-logo-light.png";
import { Search, Settings, LogOut, Plus, User } from "lucide-react";

import Button from "../Button";
import UserProfile from "../UserProfile";

import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={Styles.container}>
      <div className={Styles.logoAndSearchBox}>
        <img src={Logo} className={Styles.logo} alt="Logo do 'Vence Quando?'" />
        <div className={Styles.searchBox}>
          <Search size={26} />
          <input
            type="search"
            className={Styles.searchField}
            name="serach-field"
            placeholder="Busque um produto"
          />
        </div>
      </div>

      <div className={Styles.userContainer}>
        <Button icon={<Settings size={26} />} variant="secondary" />

        <UserProfile
          username="Alanna Rodrigues"
          usermail="alannardr@gmail.com"
        />

        <Button
          icon={<LogOut size={26} color="#ff594a" />}
          variant="secondary"
        />
      </div>
    </header>
  );
};

export default Header;

import { useTranslation } from "react-i18next";
import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string | undefined;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className ? className : ''])}>
      <div className={cls.links}>
        <AppLink
          to={"/"}
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          {t("Главная")}
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          {t("О сайте")}

        </AppLink>
      </div>
    </div>
  );
};

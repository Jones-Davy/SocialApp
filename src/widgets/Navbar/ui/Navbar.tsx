import cls from "./Navbar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface NavbarProps {
  className?: string | undefined;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className || ""])}>
      <div className={cls.links}></div>
    </div>
  );
};

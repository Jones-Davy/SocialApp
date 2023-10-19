import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = memo(
  ({ item, collapsed }) => {
    const { t } = useTranslation();
    return (
      <AppLink
        to={item.path}
        theme={AppLinkTheme.SECONDARY}
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      >
        <item.icon className={cls.icon} />

        <span className={cls.link}> {t(item.text)}</span>
      </AppLink>
    );
  }
);

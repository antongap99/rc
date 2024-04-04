import cn from 'classnames';
import React, { useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Locales } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import CollapseIcon from 'shared/assets/icons/collapseSvg.svg';
import { AppLink } from 'shared/ui/Link/Link';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import HomeLinkIcon from 'shared/assets/icons/HomeLinkSvg.svg';
import AboutLinkIcon from 'shared/assets/icons/AboutLinkSvg.svg';
import style from './SideBar.module.scss';

interface SideBarProps {
  className?: string
}

export function SideBar({ className }: SideBarProps) {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const toggleCollapsed = () => {
        console.log('toggleCollapsed')
        setCollapsed(!collapsed);
    };

    return (
        <div data-testid="sidebar" className={cn(style.SideBar, { [style.collapsed]: collapsed })}>
            <Button
                data-testid="collapse-btn"
                className={style.collapseBtn}
                onClick={toggleCollapsed}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.M}
                square
            >
                <div className={cn(style.iconWrapper, { [style.iconWrapperCollapsed]: collapsed })}>
                    <CollapseIcon />
                </div>
            </Button>
            <div className={style.items}>
                <AppLink
                    to={RoutePath.main}
                    className={cn(style.link, style.link_active)}
                >
                    <HomeLinkIcon />
                    <span>
                        {t('К главной')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={cn(style.link)}
                >
                    <AboutLinkIcon />
                    <span>
                        {t('О компании')}
                    </span>
                </AppLink>
            </div>
            <div className={style.switchers}>
                <ThemeSwitcher className="theme-switcher" />
                <LangSwitcher locales={Locales.RU} />
            </div>
        </div>
    );
}

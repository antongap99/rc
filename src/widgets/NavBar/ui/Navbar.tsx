import React from "react";
import cn from "classnames";
import cls from './navBar.module.scss'
import {AppLink} from "shared/ui/Link/Link";
import {ThemeSwitcher} from "widgets/ThemeSwitcherBtn";

interface  NavbarProps {
    className?: string;

}

export const Navbar = ({className}: NavbarProps) =>{
    return  (
        <div className={cn(cls.navbar)}>
            <ThemeSwitcher className={'theme-switcher'}/>
            <div className={cls.links}>
                <AppLink to={'/'} className={cn(cls.link, cls.link_active)} >К главной</AppLink>
                <AppLink to={'/about'} className={cn(cls.link)} >О компании</AppLink>
            </div>
        </div>
    )
}







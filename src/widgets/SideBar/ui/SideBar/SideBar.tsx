import cn from "classnames";
import style from './SideBar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcherBtn";
import {LangSwitcher} from "widgets/LangSwitcher";
import {Locales} from "widgets/LangSwitcher/ui/LangSwitcher";

interface  SideBarProps {
    className?: string;
}

export const SideBar = ({className}: SideBarProps) =>{

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    
    return  (
        <div className={cn(style.SideBar, {[style.collapsed]: collapsed})}>
            <button onClick={toggleCollapsed}>collapse sidebar</button>
            <div className={style.switchers}>
                <ThemeSwitcher className={'theme-switcher'}/>
                <LangSwitcher locales={Locales.RU}/>
            </div>
        </div>
    )
}


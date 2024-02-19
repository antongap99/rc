import cn from "classnames";
import cls from './navBar.module.scss'
import {AppLink} from "shared/ui/Link/Link";
import {useTranslation} from "react-i18next";

interface  NavbarProps {
    className?: string;

}



export const Navbar = ({className}: NavbarProps) =>{
    const  {t} = useTranslation()
    return  (
        <div className={cn(cls.navbar)}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cn(cls.link, cls.link_active)} >{t('К главной')}</AppLink>
                <AppLink to={'/about'} className={cn(cls.link)} >{t('О компании')}</AppLink>
            </div>
        </div>
    )
}







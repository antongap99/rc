import cn from "classnames";
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {Button} from "shared/ui/Button/Button";

export enum Locales {
    RU = 'ru',
    EN = 'en',
}

interface  LangSwitcherProps {
    className?: string;
    locales: Locales
}

export const LangSwitcher = ({}: LangSwitcherProps) =>{
    const { t, i18n } = useTranslation();
    const [currentLocal, setCurrentLocal] = useState<Locales>(Locales.RU);
    const toggleTranslation = () => {
        setCurrentLocal(currentLocal === Locales.EN ? Locales.RU: Locales.EN)
    }

    useEffect(() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en': 'ru')
    }, [currentLocal])

    return  (
        <div>
            <Button
                onClick={toggleTranslation}
            >{t('Перевод')}
            </Button>
        </div>
    )
}


import {useTranslation} from 'react-i18next';
import React, {useEffect, useState} from 'react';
import {Button, ButtonTheme} from 'shared/ui/Button/Button';
import TranslateSvg from 'shared/assets/icons/translateSvg.svg';
import i18n from 'shared/config/i18nConfig/i18n'

export enum Locales {
    RU = 'ru',
    EN = 'en',
}

interface LangSwitcherProps {
    className?: string;
    locales: Locales
}

export const LangSwitcher = ({}: LangSwitcherProps) => {
    const { t } = useTranslation();
    const [currentLocal, setCurrentLocal] = useState<Locales>(Locales.RU);
    const toggleTranslation = () => {
        setCurrentLocal(currentLocal === Locales.EN ? Locales.RU : Locales.EN);
    };

    useEffect(() => {
        i18n.changeLanguage(currentLocal === 'ru' ? 'en' : 'ru');
    }, [currentLocal]);

    return (
        <div>
            <Button
                onClick={toggleTranslation}
                theme={ButtonTheme.CLEAR}
            >
                <TranslateSvg />
            </Button>
        </div>
    );
};

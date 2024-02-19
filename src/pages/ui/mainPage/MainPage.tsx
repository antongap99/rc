import React from 'react';
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next";
const MainPage = () => {
    const {t} = useTranslation()
    return (
        <div>
            {t('Main page')}
        </div>
    );
};

export default MainPage;
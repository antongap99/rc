import cn from "classnames";
import style from './NotFoundPage.module.scss'
import {useTranslation} from "react-i18next";

interface  NotFoundPageProps {
    className?: string;

}

export const NotFoundPage = ({className}: NotFoundPageProps) =>{
	const {t} = useTranslation()
    return  (
        <div className={cn(style.NotFoundPage)}>
		{t('Страница не найдена')}
        </div>
    )
}


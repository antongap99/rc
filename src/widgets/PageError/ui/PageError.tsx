import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import style from './PageError.module.scss';

interface PageErrorProps {
    className?: string;

}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={cn(style.PageError)}>
            <p>{t('Произошла не предвиденнная ошибка')}</p>
            <button type="button" onClick={reloadPage}>
                {t('Обновить страницу')}
            </button>
        </div>
    );
};

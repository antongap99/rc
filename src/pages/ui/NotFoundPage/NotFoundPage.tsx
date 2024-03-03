import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import style from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export function NotFoundPage({ className }: NotFoundPageProps) {
    const { t } = useTranslation();
    return (
        <div className={cn(style.NotFoundPage)}>
            {t('Страница не найдена')}
        </div>
    );
}

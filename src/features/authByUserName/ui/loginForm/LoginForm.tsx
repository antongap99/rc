import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import style from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;

}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={cn(style.LoginForm, className)}>
            <Input
                type="text"
                className={style.input}
                placeHolder={t('Логин')}
                autoFocus
            />
            <Input
                type="text"
                className={style.input}
                placeHolder={t('Пароль')}
            />
            <Button className={style.LoginBtn}>{t('Войти')}</Button>
        </div>
    );
};

export default LoginForm;
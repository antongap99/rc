import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { loginActions } from 'features/authByUserName/model/slice/LoginSlice';
import { useCallback } from 'react';
import { loginSelector } from 'features/authByUserName/model/selectors/selectLoginState';
import { useAppDispatch } from 'app/providers/storeProvider';
import { loginByUserName } from '../../model/services/loginByUsername/loginByUsername';
import style from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;

}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const loginForm = useSelector(loginSelector);

    const onChanceUserName = useCallback((value: string) => {
	    dispatch(loginActions.setUserName(value));
    }, [dispatch]);

    const onChancePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        const action = loginByUserName({
            username: loginForm?.username || '',
            password: loginForm?.password || '',
        });
	    dispatch(action);
    }, [dispatch, loginForm?.password, loginForm?.username]);

    return (
        <div className={cn(style.LoginForm, className)}>
            {loginForm?.error && <div>{t('Error')}</div>}
            <Input
                type="text"
                className={style.input}
                placeHolder={t('Логин')}
                autoFocus
                onChange={onChanceUserName}
                value={loginForm?.username}
            />
            <Input
                type="text"
                className={style.input}
                placeHolder={t('Пароль')}
                onChange={onChancePassword}
                value={loginForm?.password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={style.LoginBtn}
                onClick={onLoginClick}
                disabled={loginForm?.isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
};

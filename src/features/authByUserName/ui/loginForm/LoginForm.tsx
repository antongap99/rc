import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import style from './LoginForm.module.scss';
import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "shared/storeHooks/hooks";
import {loginActions} from '../../model/slice/loginSlice';
import {getLoginState} from "../../model/selectors/getLoginState";

export interface LoginFormProps {
    className?: string;

}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()
    const loginState = useAppSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    return (
        <div className={cn(style.LoginForm, className)}>
            <Input
                type="text"
                className={style.input}
                placeHolder={t('Логин')}
                autoFocus
                onChange={onChangeUsername}
                value={loginState?.username}
            />
            <Input
                type="text"
                className={style.input}
                placeHolder={t('Пароль')}
                onChange={onChangePassword}
                value={loginState?.password}
            />
            <Button className={style.LoginBtn}>{t('Войти')}</Button>
        </div>
    );
};

export default LoginForm;
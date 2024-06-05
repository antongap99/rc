import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import style from './LoginForm.module.scss';
import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "shared/storeHooks/hooks";
import {loginActions} from '../../model/slice/loginSlice';
import {getLoginState} from "../../model/selectors/getLoginState";
import {fetchUserById} from "features/authByUserName/services/LoginByUsername/LoginByUsername";

export interface LoginFormProps {
    className?: string;

}

const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch()
    const {username, password, isLoading, error} = useAppSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        username && password && dispatch(fetchUserById({username, password}))
    }, [dispatch, username, password])

    return (
        <div className={cn(style.LoginForm, className)}>
            {error && <div>error</div>}
            <Input
                type="text"
                className={style.input}
                placeHolder={t('Логин')}
                autoFocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={style.input}
                placeHolder={t('Пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button className={style.LoginBtn} onClick={() => onLoginClick()}>{t('Войти')}</Button>
        </div>
    );
};

export default LoginForm;
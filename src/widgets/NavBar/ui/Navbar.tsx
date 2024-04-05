import cn from 'classnames';
import { AppLink } from 'shared/ui/Link/Link';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'shared/ui/BugButton';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/authByUserName';
import cls from './navBar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const oncloseModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={cn(cls.navbar, className)}>
            {/*<LoginModal isOpen={isAuthModal} onClose={oncloseModal} />*/}
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cn(cls.Login)}
                    onClick={oncloseModal}
                >
                    {t('Войти')}
                </Button>
            </div>
        </div>
    );
};

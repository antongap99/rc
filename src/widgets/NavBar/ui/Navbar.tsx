import cn from 'classnames';
import { AppLink } from 'shared/ui/Link/Link';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'shared/ui/BugButton';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './navBar.module.scss';

interface NavbarProps {
    className?: string;

}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback(
	    () => {
		    setIsAuthModal((prev) => !prev);
	    },
	    [],
    );

    return (
        <div className={cn(cls.navbar)}>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                <span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
                    exercitationem iste repellendus tenetur voluptatem. Ipsa modi omnis provi
                    dent quibusdam temporibus? Accusantium autem corporis doloribus hic iste
                    quisquam tenet
                    ur. Eum, eveniet?
                </span>
            </Modal>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cn(cls.Login)}
                    onClick={onToggleModal}
                >
                    {t('Войти')}
                </Button>
            </div>
        </div>
    );
};

import cn from 'classnames';
import { useEffect, useState } from 'react';
import style from './BugButton.module.scss';

// Тестовая кнопка
export const BugButton = () => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) {
            throw Error('new Error');
        }
    }, [error]);

    const onThrow = () => {
	    setError(true);
    };
    return (
        <button type="button" onClick={onThrow} className={cn(style.BugButton)}>
            Throw error
        </button>
    );
};

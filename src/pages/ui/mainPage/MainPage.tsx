import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

function MainPage() {
    const { t } = useTranslation();
    const [value, setValue] = useState<string>('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <Input placeHolder="Введите текст" type="text" value={value} onChange={onChange} />
        </div>
    );
}

export default MainPage;

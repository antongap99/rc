import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { ComponentRender } from 'shared/lib/helpers/ComponentRender/ComponentRender';

describe('SideBar ', () => {
    test('test render', () => {
        ComponentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test collapse', () => {
        ComponentRender(<SideBar />);
        const collapseBtn = screen.getByTestId('collapse-btn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();

        fireEvent.click(collapseBtn);

        // Проверяем наличие класса collapsed с использованием объекта стилей
        screen.debug(screen.getByTestId('sidebar'))
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});

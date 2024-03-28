import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { renderWithTranslation } from 'shared/lib/helpers/withTransation/withTranslation';
import { ComponentRender } from 'shared/lib/helpers/ComponentRender/ComponentRender';

describe('SideBar ', () => {
    test('test render', () => {
	    ComponentRender(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // screen.debug();
    });

    test('test collapse', () => {
        ComponentRender(<SideBar />);
        const collapseBtn = screen.getByTestId('collapse-btn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(collapseBtn);
	    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        // screen.debug();
    });
});

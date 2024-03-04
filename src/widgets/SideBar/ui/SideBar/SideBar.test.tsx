import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { renderWithTranslation } from 'shared/lib/helpers/withTransation/withTranslation';

describe('SideBar ', () => {
    test('test render', () => {
	    renderWithTranslation(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    });

    test('test collapse', () => {
        renderWithTranslation(<SideBar />);
        const collapseBtn = screen.getByTestId('collapse-btn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(collapseBtn);
	    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    });
});

import { Button, ThemeBottom } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('test render', () => {
        render(<Button theme={ThemeBottom.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('test clear theme', () => {
        render(<Button theme={ThemeBottom.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        // screen.debug();
    });
});

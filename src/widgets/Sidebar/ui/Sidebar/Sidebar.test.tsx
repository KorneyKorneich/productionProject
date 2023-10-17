import { fireEvent, screen } from '@testing-library/react'
import Sidebar from './Sidebar';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Sidebar', () => {
    test('Element exist', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
    });
    test('Test toggle', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('Sidebar-toggle');
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
    });
})

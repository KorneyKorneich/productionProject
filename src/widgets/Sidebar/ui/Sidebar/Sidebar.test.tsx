import { fireEvent, screen } from '@testing-library/react'
import Sidebar from './Sidebar';
import { renderWithTranslations } from '../../../../shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('Sidebar', () => {
    test('Element exist', () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
    });
    test('Test toggle', () => {
        renderWithTranslations(<Sidebar />);
        const toggleBtn = screen.getByTestId('Sidebar-toggle');
        expect(screen.getByTestId('Sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('Sidebar')).toHaveClass('collapsed');
    });
})

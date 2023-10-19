import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
    test('Show component on the screen', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 1 } }
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });
    test('Show decrement', () => {
        componentRender(<Counter />);
        const toggleBtn = screen.getByTestId('dec-button');
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('-1');
    });
    test('Show increment', () => {
        componentRender(<Counter />);
        const toggleBtn = screen.getByTestId('inc-button');
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });
})

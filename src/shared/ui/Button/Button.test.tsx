import {render, screen} from '@testing-library/react'
import Button, {ThemeButton} from './Button'

describe('Button test', () => {
    test('Text inside', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    });
    test('With theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})

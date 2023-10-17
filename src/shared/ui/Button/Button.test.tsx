import { render, screen } from '@testing-library/react'
import Button, { ThemeButton } from './Button'

describe('Button test', () => {
    test('Text inside', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    });
    test('With theme', () => {
        // eslint-disable-next-line i18next/no-literal-string
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})

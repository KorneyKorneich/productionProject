import React from 'react'
import App from './app/App'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/provider/ThemeProvider'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/provider/ErrorBoundary'
import 'app/style/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ErrorBoundary>
            <ThemeProvider>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </ThemeProvider>
        </ErrorBoundary>
    </React.StrictMode>
)

export default App

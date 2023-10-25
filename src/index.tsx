import React from 'react'
import App from './app/App'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import 'app/style/index.scss'
import { StoreProvider } from 'app/provider/StoreProvider';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import { ThemeProvider } from 'app/provider/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StoreProvider>
        <React.StrictMode>
            <ErrorBoundary>
                <ThemeProvider>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </ThemeProvider>
            </ErrorBoundary>
        </React.StrictMode>
    </StoreProvider>
)

export default App

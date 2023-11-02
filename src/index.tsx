import React from 'react'
import App from './app/App'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import 'app/style/index.scss'
import { StoreProvider } from 'app/provider/StoreProvider';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import { ThemeProvider } from 'app/provider/ThemeProvider';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <StoreProvider>
            <React.StrictMode>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App/>
                    </ThemeProvider>
                </ErrorBoundary>
            </React.StrictMode>
        </StoreProvider>
    </BrowserRouter>
)

export default App

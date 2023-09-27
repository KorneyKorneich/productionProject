import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/provider/ThemeProvider";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
)

export default App;

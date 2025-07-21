import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import './index.css';
import { ContextProvider } from './common/context';
import { provideRiddleAnswer } from './domain/riddle/RiddleAnswerProvider';
import { getAnswerFor } from './domain/riddle/riddle-answer.adapter';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ContextProvider providers={[provideRiddleAnswer(getAnswerFor)]}>
            <App />
        </ContextProvider>
    </React.StrictMode>,
);

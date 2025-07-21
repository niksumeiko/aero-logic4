import { App } from '../App';
import { provideRiddleAnswer } from '../domain/riddle/RiddleAnswerProvider';
import { ContextProvider } from '../common/context';

describe('Booting the app', () => {
    it('successfully boots the app', () => {
        cy.intercept('GET', 'http://localhost:3000/riddles', {
            body: [
                {
                    id: 'X',
                    contents: 'y',
                    answers: [
                        {
                            id: 'z',
                            text: 'ZZ',
                        },
                    ],
                },
            ],
        });

        cy.intercept('GET', 'http://localhost:3000/riddles/X', {
            body: {
                id: 'X',
                contents: 'y',
                answers: [{ id: 'z', text: 'ZZ' }],
            },
        });

        const fake = () =>
            Promise.resolve({
                id: 'z',
                text: 'ZZ',
            });
        cy.mount(
            <ContextProvider providers={[provideRiddleAnswer(fake)]}>
                <App />
            </ContextProvider>,
            '/',
        );

        cy.getByTestId('riddle-link').click();
        cy.getByTestId('riddle-answer-z').click();
        cy.getByTestId('riddle-answer-correct').should('be.visible');
    });
});

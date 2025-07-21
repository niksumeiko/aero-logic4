import { App } from '../App';

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

        cy.mount(<App />, '/');

        cy.get('img[alt="Aero Logic"]').should('be.visible');
    });
});

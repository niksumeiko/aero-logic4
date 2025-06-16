import { App } from '../App';

describe('Booting the app', () => {
    it('successfully boots the app', () => {
        cy.mount(<App />, '/');

        cy.get('img[alt="Aero Logic"]').should('be.visible');
    });
});

import { getGreeting } from '../support/app.po';

describe('angular-zoneless-cypress-clock-e2e', () => {
  beforeEach(() => {
    cy.clock(Date.now());
    cy.visit('/')
    cy.tick(1000);
  });

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(/Welcome/);
  });
});

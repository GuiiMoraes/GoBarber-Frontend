/// <reference path="../../support/index.d.ts" />

describe('SignUp - Create', () => {
  beforeEach(() => {
    cy.visit('/signup');
    cy.server();

    cy.route('POST', '/sessions').as('sessions_route');
  });

  it('should be able to create a new deafult user', () => {
    cy.get('[data-cy=sign-up-name-input]').type('Test User');
    cy.get('[data-cy=sign-up-email-input]').type('user_email@cypress.com');
    cy.get('[data-cy=sign-up-password-input]').type('user_password');

    cy.get('[data-cy=sign-up-form-submit]').click();

    cy.get("[data-cy='toast']")
      .should('to.be', 'visible')
      .and('have.attr', 'type', 'success');

    cy.location('pathname').should('eq', '/');
  });

  afterEach(() => {
    cy.stopOnFail();
  });
});

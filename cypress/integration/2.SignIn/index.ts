/// <reference path="../../support/index.d.ts" />

describe('SignIn - Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.server();

    cy.route('POST', '/sessions').as('sessions_route');
  });

  it('should be sended to dashboard page when access platform with correct credentials', () => {
    cy.get('[data-cy=sign-in-email-input]').type('user_email@cypress.com');
    cy.get('[data-cy=sign-in-password-input]').type('user_password');

    cy.get('[data-cy=sign-in-form-submit]').click();

    cy.wait('@sessions_route').then(xmlHttpResponse => {
      expect(xmlHttpResponse.status).to.eql(200);

      expect(xmlHttpResponse.request.body).to.have.property(
        'email',
        'user_email@cypress.com'
      );
      expect(xmlHttpResponse.request.body).to.have.property(
        'password',
        'user_password'
      );

      expect(xmlHttpResponse.response.body).to.have.property('user');
      expect(xmlHttpResponse.response.body).to.have.property('token');
    });

    cy.location('pathname').should('eq', '/dashboard');
  });

  it('should not be sended to dashboard page when access platform with incorrect credentials and show error messages', () => {
    cy.get('[data-cy=sign-in-email-input]').type(
      'incorrect_user@cypress.com.br'
    );
    cy.get('[data-cy=sign-in-password-input]').type('incorrect_user_cypress');

    cy.get('[data-cy=sign-in-form-submit]').click();

    cy.wait('@sessions_route').then(xmlHttpResponse => {
      expect(xmlHttpResponse.status).to.eql(401);

      expect(xmlHttpResponse.response.body).to.have.property('status', 'error');
    });

    cy.get("[data-cy='toast']")
      .should('to.be', 'visible')
      .and('have.attr', 'type', 'error');
  });

  afterEach(() => {
    cy.stopOnFail();
  });
});

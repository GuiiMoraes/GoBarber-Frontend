describe('SignIn - Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.server();

    cy.route('POST', '/sessions').as('sessions_route');
  });

  it('should be sended to dashboard page when access platform with correct credentials', () => {
    cy.get('[data-cy=email-input]').type(Cypress.env('user_email'));
    cy.get('[data-cy=password-input]').type(Cypress.env('user_password'));

    cy.get('[data-cy=form-submit]').click();

    cy.wait(['@sessions_route']).then(xmlHttpResponse => {
      // Check the status of request
      expect(xmlHttpResponse.status).to.eql(200);

      // Check the if the request sent all expected datas
      expect(xmlHttpResponse.request.body).to.have.property(
        'email',
        Cypress.env('user_email')
      );
      expect(xmlHttpResponse.request.body).to.have.property(
        'password',
        Cypress.env('user_password')
      );

      // Check the if the response it's as expected
      expect(xmlHttpResponse.response.body).to.have.property('user');
      expect(xmlHttpResponse.response.body).to.have.property('token');
    });
  });

  it('should not be sended to dashboard page when access platform with incorrect credentials and show error messages', () => {
    cy.get('[data-cy=email-input]').type('test_user@cypress.com.br');
    cy.get('[data-cy=password-input]').type('test_user_cypress');

    cy.get('[data-cy=form-submit]').click();

    cy.wait(['@sessions_route']).then(xmlHttpResponse => {
      // Check the status of request
      expect(xmlHttpResponse.status).to.eql(401);

      // Check the if receive error status
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

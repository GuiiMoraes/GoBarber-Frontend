describe('SignIn - Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.server();

    cy.route('POST', '/sessions').as('sessions_route');
  });

  it('should send the correct values in session request', () => {
    cy.get('[data-cy=email-input]').type(Cypress.env('user_email'));
    cy.get('[data-cy=password-input]').type(Cypress.env('user_password'));

    cy.get('[data-cy=form-submit]').click();

    cy.wait(['@sessions_route']).then(xmlHttpResponse => {
      expect(xmlHttpResponse.request.headers).to.have.property(
        'Content-Type',
        'application/json;charset=utf-8'
      );
      expect(xmlHttpResponse.request.body).to.have.property(
        'email',
        Cypress.env('user_email')
      );
      expect(xmlHttpResponse.request.body).to.have.property(
        'password',
        Cypress.env('user_password')
      );
    });
  });

  afterEach(() => {
    cy.stopOnFail();
  });
});

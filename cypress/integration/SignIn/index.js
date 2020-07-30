describe('SignIn - Login', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.server();

    cy.route('POST', '/sessions').as('sessions_route');
  });

  it('should be able to access plataform with correct credentials', () => {
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

  afterEach(() => {
    cy.stopOnFail();
  });
});

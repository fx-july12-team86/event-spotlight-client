/// <reference types="cypress" />

describe('Registration page', () => {
  beforeEach(() => {
    cy.visit('/')
      .get('[data-cy="profile_btn"]')
      .click()
      .get('.ProfileDrop__btn').click()
      .get('[data-cy="registration"]').click()
    cy.get('.RegistrationForm__title').should('have.text', 'реєстрація')
  })

  it('should register user', () => {
    cy.get('[type="email"]').type('usertest@test.com');
    cy.get('[data-cy="username"]').type('test name');
    cy.get('#password').type('123456789');
    cy.get('.RegistrationForm__btn').click();
  });

  it('should not register user if email already exist', () => {
    cy.request({
      method: 'POST',
      url: 'https://event-spotlight-container-eventspotlightprod.up.railway.app/auth/register',
      body: {
        email: "usertest@test.com",
        password: "123456789",
        repeatPassword: "123456789",
        userName: "sdfsd"
      },
      failOnStatusCode: false
    }).as('response');

    cy.get('@response').its('status').should('eq', 400);

  })
});

/// <reference types="cypress" />

import { generateUser } from "../support/generateUser";

describe('Registration page', () => {
  beforeEach(() => {
    cy.visit('/')
      .getByDataCy("profile_btn")
      .click()
      .get('.ProfileDrop__btn').click()
      .getByDataCy('registration').click()
    cy.get('.RegistrationForm__title').should('have.text', 'реєстрація')
  })

  it('should register user', () => {
    cy.get('[type="email"]').type('usertest@test.com');
    cy.getByDataCy("username").type('test name');
    cy.get('#password').type('123456789');
    cy.get('.RegistrationForm__btn').click();
  });

  it('should not register user if email already exist', () => {
    const { email, password, repeatPassword, userName } = generateUser();

    cy.request({
      method: 'POST',
      url: 'https://event-spotlight-container-eventspotlightprod.up.railway.app/auth/register',
      body: {
        email,
        password,
        repeatPassword,
        userName,
      },
      failOnStatusCode: false
    }).as('response');

    cy.get('@response').its('status').should('eq', 400);
  })
});

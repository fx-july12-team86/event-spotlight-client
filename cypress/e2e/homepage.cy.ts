/// <reference types="cypress" />

describe('Name of the group', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should have title', () => {
    cy.get('h1').should('have.text', 'ЗНАЙДИ ПОДІЮ ДЛЯ СЕБЕ')
  });

  it('should work a slider', () => {
    cy.get('.carousel').find('.carousel-control-next').click();
    cy.get('.carousel').find('.carousel-control-prev').click();
  });
});
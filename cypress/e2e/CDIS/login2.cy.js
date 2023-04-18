/// <reference types="cypress" />

import { Login } from "../../page-objects/login"

describe('The user should be able to login and logout successfully', () => {
  const login = new Login()

  beforeEach(() => {
    cy.login('superadmin', 'superadmin031819')
  })

  it('should be able to input username and password to login and logout', () => {
    cy.visit('')
  })

  it('should be able to input username and password to login and logout', () => {
    cy.visit('')
  })
})
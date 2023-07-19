/// <reference types="cypress" />

import {Login} from "../../page-objects/login"

describe('The user should be able to login and logout successfully', () => {
  const login = new Login()

  let data;
  before(() => {
    cy.fixture('credentials').then((Data) => {
      data = Data
    })
  })

  beforeEach(() => {    
    login.navigate()
  })

  it.only('should be able to input valid username and valid password to login and logout', () => {
    login.inputUsername(data.admin.username)
    login.inputPassword(data.admin.password)
    login.clickLoginButton()
    login.clickLogout()
  })

  it('should be able to input valid username and wrong password', () => {
    login.inputUsername(data.admin.username)
    login.inputPassword(data.admin.wrong_password)
    login.clickLoginButton()
    login.validationErrorMessage()
  })

  it('should be able to input wrong username and valid password', () => {
    login.inputUsername(data.admin.wrong_admin)
    login.inputPassword(data.admin.password)
    login.clickLoginButton()
    login.validationErrorMessage()
  })

  it('should be able to input empty username and valid password', () => {
    login.inputPassword(data.admin.username)
    login.clickLoginButton()
    login.validationErrorMessage()
  })

  it('should be able to input valid username and empty password', () => {
    login.inputUsername(data.admin.username)
    login.clickLoginButton()
    login.validationErrorMessage()
  })

  it('should be able to input empty username and empty password', () => {
    login.clickLoginButton()
    login.validationErrorMessage()
  })
})
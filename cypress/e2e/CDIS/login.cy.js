/// <reference types="cypress" />

import {Login} from "../../page-objects/login"

describe('The user should be able to login and logout successfully', () => {
  const login = new Login()

  beforeEach(() => {    
    login.navigate()
  })

  it('should be able to input valid username and valid password to login and logout', () => {
    login.inputUsername('superadmin')
    login.inputPassword('superadmin031819')
    login.clickLoginButton()
    login.clickLogout()
  })

  it('should be able to input valid username and wrong password', () => {
    login.inputUsername('superadmin')
    login.inputPassword('wrong password')
    login.clickLoginButton()
    login.validationErrorMessage()
  })

  it('should be able to input wrong username and valid password', () => {
    login.inputUsername('wrong')
    login.inputPassword('superadmin031819')
    login.clickLoginButton()
    login.validationErrorMessage()
  })

  it('should be able to input empty username and valid password', () => {
    login.inputPassword('superadmin031819')
    login.clickLoginButton()
    login.validationErrorMessage()
  })

  it('should be able to input valid username and empty password', () => {
    login.inputUsername('superadmin')
    login.clickLoginButton()
    login.validationErrorMessage()
  })

  it('should be able to input empty username and empty password', () => {
    login.clickLoginButton()
    login.validationErrorMessage()
  })
})
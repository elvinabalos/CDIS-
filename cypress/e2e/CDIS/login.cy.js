/// <reference types="cypress" />

import { LoginPage } from "../../page-objects/login"

describe('The user should be able to login and logout successfully', () => {
  const loginPage = new LoginPage()

  beforeEach(() => {
    loginPage.navigate()
  })

  it('should be able to input username and password to login and logout', () => {
    // username
    loginPage.inputUsername('superadmin')
    console.log(loginPage.inputUsername)

    // password
    loginPage.inputPassword('superadmin031819')

    // user menu
    loginPage.clickLogout()
  })
})
/// <reference types="cypress" />

import { 
  navigate,
  inputUsername, 
  inputPassword, 
  clickLoginButton, 
  clickLogout 
} from "../../page-objects/functions"

describe('The user should be able to login and logout successfully', () => {

  beforeEach(() => {
    navigate()
  })

  it('should be able to input username and password to login and logout', () => {
    inputUsername('superadmin')
    inputPassword('superadmin031819')
    clickLoginButton()
    clickLogout()
  })
})
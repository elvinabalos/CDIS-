import { currencyFile } from "../../../page-objects/currency-file"

describe('The user should be able to create, update, delete, and search the currency file', () => {
  const currencyfile = new currencyFile()
  const username = 'superadmin'
  const password = 'superadmin031819'

  beforeEach(() => {
    cy.login(username, password)
    cy.visit('/currency-file')

  })

  it('Should be able to create currency file', () => {
    currencyfile.addCurrencyFile()
  })

  it('Should be able to update currency file', () => {
    currencyfile.searchCurrency()  
    currencyfile.updateCurrency()
  })

  it('Should be able to search currency file', () => {
    currencyfile.searchCurrency()   
  })

  it('Should be able to delete currency file', () => {
    currencyfile.deleteCurrency()  
  })

  it('Should be able to search currency file', () => {
    currencyfile.searchCurrency()   
    cy.get('.no-data-available--inline > td')
      .should('have.text', 'No data available to show')
  })
})
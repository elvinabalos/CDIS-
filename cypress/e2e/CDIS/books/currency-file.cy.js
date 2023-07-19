import { currencyFile } from "../../../page-objects/currency-file"

describe('The user should be able to validate clear fields, required fields, duplicates, no data available to show, create, update, delete, and search the currency file', () => {
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

  it('Should be able to validate clear code, currenct and description fields', () => {
    currencyfile.validateClearFields()
  })

  it('Should be able to check validate duplicates currency and description fields', () => {
    currencyfile.validateDuplicates()
  })

  it('Should be able to check validate required fields currency file', () => {
    currencyfile.validateRequired()
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

  it('Should be able to check if no data available to show the currency file', () => {
    currencyfile.checkEmptyResult()
  })
})
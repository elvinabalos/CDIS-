import { pettyCash } from "../../../page-objects/petty-cash"

describe('The user should be able to validate clear fields, required fields, duplicates, no data available to show, create, update, delete, and search the currency file', () => {
  const pettycash = new pettyCash()
  let data;
  before(() => {
    cy.fixture('credentials').then((Data) => {
      data = Data
    })
  })

  beforeEach(() => {
    cy.login(data.admin.username, data.admin.password)
    cy.visit('/petty-cash-custodian-file')

  })

  it('Should be able to create petty cash', () => {
    pettycash.addPettyCash()
  })


  it('Should be able to validate clear code, currenct and description fields', () => {
    pettycash.validateClearFields()
  })


  it('Should be able to check validate duplicates petty cash', () => {
    pettycash.validateDuplicates()
  })


  it('Should be able to check validate required fields petty cash', () => {
    pettycash.validateRequired()
  })

  it('Should be able to update petty cash', () => {
    pettycash.searchKeyword()
    pettycash.updatePettyCash()
  })

  it('Should be able to search petty cash', () => {
    pettycash.searchKeyword()
  })

  it('Should be able to delete petty cash', () => {
    pettycash.deletePettyCash()
  })

  it('Should be able to check if no data available to show the petty cash', () => {
    pettycash.checkEmptyResult()
  })

})
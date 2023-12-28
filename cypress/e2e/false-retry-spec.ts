describe('try request', () => {
  // afterEach(() => {
  //   cy.request('/').its('body').should('include', 'html')
  // })
  after(() => {
    cy.wait(1)
  })

  it('should finish', () => {
    cy.visit('/')
    // this particular alias keeps a number
    cy.wrap(1).as('magic')
    cy.get<number>('@magic').then((n) => {
      // only pass on the third attempt
      expect(n).to.be.a('number').and.to.equal(1)
    })
    cy.request('/').its('body').should('include', 'html')
  })
})

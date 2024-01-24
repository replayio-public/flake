describe('casting an aliased value', () => {
  it('yields a number', () => {
    const attempt = (cy as any).state('runnable')._currentRetry
    // this particular alias keeps a number
    cy.wrap(attempt).as('magic')
    cy.get<number>('@magic').then((n) => {
      // only pass on the third attempt
      expect(n).to.be.a('number').and.to.equal(2)
    })
  })
})

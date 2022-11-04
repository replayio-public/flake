describe('TodoMVC', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  context('New Todo', { tags: '@adding' }, function () {
    it('should fail on this test', function () {
      expect(true).equal(false);
    })
  })
})
